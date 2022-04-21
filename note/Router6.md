# React Router 6

## 概述

1. React Router以三个不同的包发布到npm上，它们分别为：

  	* react-router：路由的核心库，提供了很多的：组件、钩子

	* react-router-dom：包含react-router所有内容，并添加一些专门用于DOM的组件，例如 `<BrowserRouter>`等  web页面  √ 常用

	* react-router-native：包括react-router所有内容，并添加一些专门用于ReactNative的API，例如`<NativeRouter>`等

2. 与React Router 5.x版本相比，改变了什么？

  	* 内置组件的变化：移除`<Switch/>`，新增`<Routes/>`等

  	* 语法的变化：`component={About}`变为`element={<About/>}`等

  	* 新增多个hook：useParams、useNavigate、useMatch等

  	* 官方明确推荐函数式组件了！！！

## Component

