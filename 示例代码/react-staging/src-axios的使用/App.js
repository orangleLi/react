// 这里的Component不是解构赋值，而是ES6的另一种语法
import React, { Component } from "react";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}
export default App
