import React, { Component } from 'react'
import qs from 'query-string'

export default class Detail extends Component {
  state = {
    filterArr: [
      {id: '01', content: '你好中国'},
      {id: '02', content: '你好陕西'},
      {id: '03', content: '你好西安'}
    ]
  }
  render() {
    // 接收params参数
    // const {id, name}  =this.props.match.params
    
    // 接收search参数
    // const {search} = this.props.location
    // const {id, name} = qs.parse(search)

    // 接收state参数
    const {id, name} = this.props.location.state

    const filterData = this.state.filterArr.find(item => item.id === id) || {}
    return (
      <div>
        <div>ID: {id}</div>
        <div>NAME: {name}</div>
        <div>CONTENT: {filterData.content}</div>
      </div>
    )
  }
}
