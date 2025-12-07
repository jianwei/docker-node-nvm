const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Webpack配置文件
 * 用于打包React应用
 */
module.exports = {
  // 入口文件
  entry: './src/index.js',
  
  // 输出配置
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[contenthash].js',
    clean: true
  },
  
  // 模块解析配置
  module: {
    rules: [
      {
        // 处理JS和JSX文件
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        // 处理CSS文件
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      scriptLoading: 'defer',
      scriptOptions: {
        crossOrigin: 'anonymous',
        type: 'module'
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.[contenthash].css'
    })
  ],
  
  // 开发服务器配置
  devServer: {
    port: 5000,
    hot: true,
    open: true
  },
  
  // 解析扩展名
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

