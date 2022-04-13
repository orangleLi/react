import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    dataObj: [
      { id: '01',  name: '张三' },
      { id: '02',  name: '李四' },
      { id: '03',  name: '王五' }
    ]
  }

  pushShow = (id, name) => {
    // push跳转并携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${name}`)

    // push跳转并携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&name=${name}`)

    // push跳转并携带state参数
    this.props.history.push(`/home/message/detail`, {id, name})
  }

  replaceShow = (id, name) => {
    // replace跳转并携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${name}`)

    // replace跳转并携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&name=${name}`)

    // replace跳转并携带state参数
    this.props.history.replace(`/home/message/detail`, {id, name})
  }

  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    // this.props.history.go(2) // 前进两步
    this.props.history.go(-2) // 后退两步
  }

  render() {
    return (
      <div>
        <div>Message</div>
        {
          this.state.dataObj.map(item => {
            // 传递params参数  默认push  开启replace替换路由跳转
            // return <Link replace className='message-item' key={item.id} to={`/home/message/detail/${item.id}/${item.name}`}>message{item.id}</Link>
            // 传递search参数  默认push  开启replace替换路由跳转
            // return <Link replace className='message-item' key={item.id} to={`/home/message/detail?id=${item.id}&name=${item.name}`}>message{item.id}</Link>
            // 传递state参数
            // return <Link className='message-item' key={item.id} to={ {pathname: '/home/message/detail', state: {id: item.id, name: item.name} } }>message{item.id}</Link>

            return (
              <div key={item.id}>
                <button onClick={() => this.pushShow(item.id, item.name)}>push跳转{item.id}</button>
                <button onClick={() => this.replaceShow(item.id, item.name)}>replace跳转{item.id}</button>
              </div>
            )
          })
        }
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route path='/home/message/detail/:id/:name' component={Detail} /> */}
        {/* search参数无需声明，正常接收即可 */}
        {/* state参数无需声明，正常接收即可 */}
        <Route path='/home/message/detail' component={Detail} />

        <button onClick={this.back}>后退</button>  <button onClick={this.forward}>前进</button>  <button onClick={this.go}>go</button>
      </div>
    )
  }
}
