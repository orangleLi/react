import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import store from './store/store'
import { Provider } from 'react-redux'

// react-redux会自动监测状态变化并更新页面
// React.StrictMode 帮你检查代码哪里写的有问题 比如说写了字符串的ref
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 此处需要用Provider组件包裹App组件，目的是让App所有的后代容器组件都能接收到store */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// setupTests用于整体测试  App.test.js 单独测试App文件
