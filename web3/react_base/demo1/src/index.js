//React:框架的核心包
//REactDoOM:专门做渲染相关的包


import React from 'react';
import ReactDOM from 'react-dom/client';
//应用的去哪聚样式文件
import './index.css';
//引入根组件
import App from './App';

//渲染根组件APP
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <APP />
)
