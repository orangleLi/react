import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      // 标签体的内容默认收集到props的children属性中
      // <NavLink activeClassName='menu-active' className='menu-item' {...this.props}>{this.props.children}</NavLink>
      <NavLink activeClassName='menu-active' className='menu-item' {...this.props} />
    )
  }
}
