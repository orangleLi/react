// 这里的Component不是解构赋值，而是ES6的另一种语法
import React, { Component } from "react";
import Main from "./containers/Main"; // 引入的是Main的容器组件
import Person from "./containers/Person"; // 引入的是Person的容器组件

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Person />
      </div>
    )
  }
}
export default App
