import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {

  render() {
    console.log(this.props)
    return (
      <h1>healer</h1>
    )
  }
}
export default withRouter(Header)

// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件

