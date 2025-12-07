FROM registry.cn-hangzhou.aliyuncs.com/dockertransfer/ubuntu:26.04

# 配置国内源（阿里云）
RUN echo "deb http://mirrors.aliyun.com/ubuntu/ resolute main restricted universe multiverse" > /etc/apt/sources.list && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ resolute-updates main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ resolute-backports main restricted universe multiverse" >> /etc/apt/sources.list && \
    echo "deb http://mirrors.aliyun.com/ubuntu/ resolute-security main restricted universe multiverse" >> /etc/apt/sources.list && \
    rm -f /etc/apt/sources.list.d/*.list 2>/dev/null || true

# 安装必要的依赖
RUN apt-get update && \
    apt-get install -y curl wget git ca-certificates bash && \
    rm -rf /var/lib/apt/lists/*

# 复制 NVM 安装包到容器
COPY nvm-0.40.3 /root/.nvm

# 配置 NVM 环境变量
ENV NVM_DIR=/root/.nvm

# 配置 shell 自动加载 NVM
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bashrc && \
    echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bashrc

# 加载 NVM 并安装 Node.js 版本
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install 6 && \
    nvm install 8 && \
    nvm install 10 && \
    nvm install 12 && \
    nvm install 14 && \
    nvm install 16 && \
    nvm install 18 && \
    nvm install 20 && \
    nvm install 22 && \
    nvm install 24 && \
    nvm alias default 20



