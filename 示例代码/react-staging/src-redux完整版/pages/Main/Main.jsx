import React, { Component } from 'react'
import { Button, Select } from 'antd';
import store from '../../store/store';
import 'antd/dist/antd.css'
import './Main.css'

import { increase, decrease, increaseAsync } from '../../store/count_action';

const { Option } = Select;

export default class Main extends Component {

  state = {
    selectNumber: 1
  }

  // redux只负责状态管理，至于状态的改变驱动页面视图的更新，要靠我们自己写。
  // 可以写在index.js中，避免每个页面都写一遍监测
  // store中数据更新了但是页面没有更新，这里监听数据遍历更新视图
  // componentDidMount() {
  //   // 监测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  handleChange = (val) => {
    this.setState({selectNumber: val - 0})
  }

  increase = () => {
    store.dispatch(increase(this.state.selectNumber))
  }
  
  decrease = () => {
    store.dispatch(decrease(this.state.selectNumber))
  }
  
  increaseOdd = () => {
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch(increase(this.state.selectNumber))
    }
  }
  
  increaseAsync = () => {
    // setTimeout(() => {
    //   store.dispatch(increaseAsync(this.state.selectNumber))
    // }, 500)
    store.dispatch(increaseAsync(this.state.selectNumber, 500))
  }
  
  render() {
    return (
      <div className='main'>
        <h2>当前求和值为{store.getState()}</h2>

        <Select defaultValue={this.state.selectNumber} style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>

        <Button onClick={this.increase}>+</Button>
        <Button onClick={this.decrease}>-</Button>
        <Button onClick={this.increaseOdd}>和为奇数时加</Button>
        <Button onClick={this.increaseAsync}>异步加</Button>
      </div>
    )
  }
}
