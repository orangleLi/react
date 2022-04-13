import React, { Component } from 'react'
import { Button, Select } from 'antd';
import 'antd/dist/antd.css'
import './Main.css'

import { connect } from 'react-redux';
import {increase, decrease, increaseAsync } from '../../store/action/count'

const { Option } = Select;

// UI组件
class Main extends Component {

  state = {
    selectNumber: 1
  }

  // react-redux会自动监测状态变化并更新页面

  handleChange = (val) => {
    this.setState({selectNumber: val - 0})
  }

  increase = () => {
    this.props.increase(this.state.selectNumber)
  }
  
  decrease = () => {
    this.props.decrease(this.state.selectNumber)
  }
  
  increaseOdd = () => {
    const count = this.props.count
    if(count % 2 !== 0) {
      this.props.increase(this.state.selectNumber)
    }
  }
  
  increaseAsync = () => {
    this.props.increaseAsync(this.state.selectNumber, 500)
  }
  
  render() {
    return (
      <div className='main'>
        <h2>当前求和值为{this.props.count}, Person组件总人数为{this.props.personNum}</h2>

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

// 容器组件
export default connect(
  state => ({count: state.count, personNum: state.personData.length}),
  // dispatch => ({
  //   increase: data => {
  //     dispatch(increase(data))
  //   },
  //   decrease: data => {
  //     dispatch(decrease(data))
  //   },
  //   increaseAsync: (data, time) => {
  //     dispatch(increaseAsync(data, time))
  //   }
  // })
  // 简写方式  react-redux会自动帮你dispatch
  // {
  //   increase: increase,
  //   decrease: decrease,
  //   increaseAsync: increaseAsync
  // },
  {
    increase,
    decrease,
    increaseAsync
  }
)(Main)
