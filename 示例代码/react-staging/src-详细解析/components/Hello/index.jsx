import React, {Component} from "react";
// 样式的模块化，防止各个组件样式文件覆盖，不过项目中一般都用less/scss  使用根样式 .hello{} 包裹起来，也会避免样式影响
import hello from './index.module.css'

export default class Hello extends Component {
  render() {
    return (
      <h2 className={hello.title}>Hello React！</h2>
    )
  }
}