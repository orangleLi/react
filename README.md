# react

*前言*
1. 学习视频 <br>
[尚硅谷React技术全家桶全套完整版](https://www.bilibili.com/video/BV1wy4y1D7JT) <br>
[4小时带你快速入门React全家桶【2022最新】](https://www.bilibili.com/video/BV1tY411G7UP)

2. 框架 <br>
[vue-vben-admin](https://github.com/vbenjs/vue-vben-admin/blob/main/README.zh-CN.md)

**目录**

[受控组件与非受控组件](https://github.com/orangleLi/react/blob/main/note/受控组件与非受控组件.md) <br>
[生命周期](https://github.com/orangleLi/react/blob/main/note/生命周期.md) <br>
[key的作用](https://github.com/orangleLi/react/blob/main/note/key的作用.md) <br>
[webpack脚手架创建项目](https://github.com/orangleLi/react/blob/main/note/webpack脚手架创建项目.md) <br>
[消息订阅-发布机制](https://github.com/orangleLi/react/blob/main/note/消息订阅-发布机制.md) <br>
[路由](https://github.com/orangleLi/react/blob/main/note/路由.md) <br>
[redux](https://github.com/orangleLi/react/blob/main/note/redux.md)<br>
[hooks](https://github.com/orangleLi/react/blob/main/note/hooks.md)<br>
[组件通信方式总结](https://github.com/orangleLi/react/blob/main/note/组件通信方式总结.md)<br>
[react扩展](https://github.com/orangleLi/react/blob/main/note/react扩展.md)

## 介绍

1. React是一个将数据渲染为HTML视图的开源JavaScript库
2. 采用组件化模式、声明式编码，提高开发效率及组件复用率
3. 在React Native中可以使用React语法进行移动端开发
4. 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互
5. DOM Diffing算法，最小化页面重绘 <br>
[Vue与React常用语法转换](https://juejin.cn/post/7044311646604361735)

## state、props、refs

### 组件三大核心属性1：state

state是组件对象最重要的属性，值是对象（可以包含多个key-value的组合） <br>
组件被称为“状态机”，通过更新组件的state来更新对应的页面显示（重新渲染组件） <br>
**强烈注意**
1. 组件中render方法中的this为组件实例对象
2. 组件自定义的方法中的this为undefined，如何解决？ <br>
  a. 强制绑定this，通过函数对象的bind() <br>
  b. 箭头函数
3. 状态数据，不能直接修改或更新。要通过setState({key: value}) setState是合并不是替换

### 组件三大核心属性2：props

每个组件对象都会有props(properties的简写)属性 <br>
组件标签的所有属性都保存在props中 <br>
通过标签属性从组件外向组件内传递变化的数据 <br>
注意：组件内部不要修改props数据

### 组件三大核心属性2：refs

组件内的标签可以定义ref属性来标识自己
1. 字符串形式的ref

```
<input ref="input1" placeholder="输入左侧数据点击按钮显示" />
this.refs.input1
```

2. 回调形式的ref

```
<input ref={c => this.input1 = c} placeholder="输入左侧数据点击按钮显示" />
<input ref={this.saveInput} placeholder="输入左侧数据点击按钮显示" />
saveInput = (c) => {
    this.input1 = c
}
```

3. createRef创建ref容器

```
input1 = React.createRef()
input2 = React.createRef()

<input ref={this.input1} placeholder="输入左侧数据点击按钮显示" />
<input ref={this.input2} onBlur={this.showData1} placeholder="输入右侧数据失去焦点显示" />

this.input1.current.value
this.input2.current.value
```

### 事件处理

1. 通过onXxx属性指定事件处理函数（注意大小写） <br>
  a. React使用的是自定义（合成）时间，而不是使用的原生DOM时间   ----------   为了更好的兼容性 <br>
  b. React中的事件是通过事件委托方式处理的（委托给组件最外层的元素）   ----------   为了更高效
2. 通过event.target得到发生事件的DOM元素对象   ----------   不要过度使用ref
