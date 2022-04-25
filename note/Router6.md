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

### 1. \<BrowserRouter>

1. 说明: `<BrowserRouter>`用于包裹整个应用

2. 示例代码：

```
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		{/* 整体结构（通常为APP组件） */}
	</BrowserRouter>
);
```

### 2. \<HashRouter>

1. 说明： 作用与`<BrowserRouter>`一样，但是`<HashRouter>`修改的是地址栏的hash值

2. 备注： 6.x版本中`<HashRouter>`、`<BrowserRouter>`的用法与5.x相同


### 2. \<Routes/>与\<Route/>

1. v6版本中移除了原先的\<Switch>，引入了新的替代者：`<Routes>`

2. `<Routes>`和`<Route>`要配合使用，且必须要用`<Routes>`包裹`<Route>`

3. `<Route>`相当于一个if语句，如果其路径和当前URL匹配，则呈现其对应的组件。

4. `<Route caseSensitive>`属性用于指定：匹配时是否区分大小写（默认为false）

5. 当URL发生变化时， `<Routes>`都会查看其所有子 `<Route>`元素以找到最佳匹配并呈现组件

6.  `<Route>`也可以嵌套使用，且可配合`useRoutes()`配置“路由表”，但需要通过`<Outlet>`组件来渲染其子路由

7. 示例代码

```
<Routes>
  /* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */
  <Route path="/login" element={<Login />}></Route>

  /* 用于定义嵌套路由，home是一级路由，对应的路径/home */
  <Route path="home" element={< Home />}>
    /* test1 和 test2 是二级路由，对应的路径是/home/test1 或 /home/test2 */
    <Route path="test1" element={<Test />}></Route>
    <Route path="test2" element={<Test1 />}></Route>
  </Route>

  // Route也可以不写element属性，这时就是用于展示嵌套的路由，所对应的路径是/users/xxx
  <Route path="users">
    <Route path="xxx" element={<Demo />} />
  </Route>
</Routes>
```

### 4. \<Link/>

1. 作用：修改URL，且不发送网络请求（路由链接）。

2. 注意：外侧需要用`<BrowserRouter>`或`<HashRouter>`包裹

3. 示例代码

```
import { Link } from 'react-router-dom'

function Test() {
  return {
    <div>
      <Link to="/路径">按钮</Link>
    </div>
  }
}
```

### 5. \<NavLink>

1. 作用：与`<Link>`组件类似，且可实现导航的“高亮”效果。

2. 示例代码

```
// 注意： NavLink默认类名是active，下面是指定自定义的class

// 自定义样式
<NavLink
  to="login"
  className={ ({isActive}) => {
    console.log('home', isActive)
    return isActive ? 'base one' : 'base'
  }}
>Login</NavLink>

/*
  默认情况下，当Home的子组件匹配成功，Home的导航也会高亮
  当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果
*/
<NavLink to="home" end >home</NavLink>
```

### 6. \<Navigate>

1. 作用：只要<Navigate>组件被渲染，就会修改路径，切换视图

2. replace属性用于控制跳转模式（push或replace，默认是push）

3. 示例代码

```
import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h3>我是Home的内容</h3>
      {/*根据sum的值决定是否切换视图*/}
      {sum === 1 ? <h4>sum的值为{sum}</h4> : <Navigate to="/about" replace={true} /> }
      <button onClick={() => setSum(2)}>点我将sum变为2</button>
    </div>
  )
}

```

### 7. \<Outlet>

1. 当`<Route>`产生嵌套时，渲染其对应的后续子路由

2. 示例代码

```
// 根据路由表生成对应的路由规则
const element = useRoutes([
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/home',
    element: <Home/>,
    children: [
      {
        path: 'news',
        element: <News/>
      },
      {
        path: 'message',
        element: </Message/>
      }
    ]
  }
])

// Home.js
import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <NavLink className="list-item" to="news">News</NavLink>
        <NavLink className="list-item" to="message">Message</NavLink>
      </div>
      {/*指定路由组件呈现的位置*/}
      <Outlet />
    </div>
  )
}
```


