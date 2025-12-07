import React, { useState } from 'react';
import './App.css';

/**
 * 主应用组件
 * 包含一个简单的计数器示例
 */
function App() {
  const [count, setCount] = useState(0);

  /**
   * 增加计数
   */
  const handleIncrement = () => {
    setCount(count + 1);
  };

  /**
   * 减少计数
   */
  const handleDecrement = () => {
    setCount(count - 1);
  };

  /**
   * 重置计数
   */
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <h1>React + Webpack 测试项目</h1>
      <div className="counter">
        <p>当前计数: <span className="count">{count}</span></p>
        <div className="buttons">
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleReset}>重置</button>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;

