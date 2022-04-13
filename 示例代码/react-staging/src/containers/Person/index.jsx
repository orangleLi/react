import React, { Component } from 'react'
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { addPerson } from '../../store/action/person'

// UI组件
class Person extends Component {

  state = {
    count: 0,
    personInfo: {
      name: '',
      age: ''
    }
  }

  saveInfo = (e, key) => {
    const {personInfo} = this.state
    personInfo[key] = e.target.value
    this.setState({personInfo})
  }

  addPerson = async () => {
    // 这里要是用受控组件，即将input的值存到state中，用的使用再取
    // 通过ref现用现取，这种是非受控组件方式，无法清空input框中的值
    this.props.addPerson({id:(Math.random()*100000000000).toFixed(0), ...this.state.personInfo})
    await this.setState({personInfo: {}}, () => {
      console.log(this.state.personInfo)
    })
    console.log(this.state.personInfo)

    // 函数式的setState
    // this.setStates(state => ({count: state.count + 1}))
  }

  render() {
    return (
      <div style={{margin: '30px'}}>
        <h2>Person，上面的组件当前求和值为{this.props.count}</h2>
        {/* 姓名：<Input id='name'  placeholder='请输入名称' style={{width: '200px', marginRight: '15px'}} ref={c => this.nameNode = c} />
        年龄：<Input id='age'  placeholder='请输入年龄' style={{width: '200px'}} ref={c => this.ageNode = c} /> */}
        姓名：<Input id='name'  placeholder='请输入名称' style={{width: '200px', marginRight: '15px'}} value={this.state.personInfo.name} onChange={e => this.saveInfo(e, 'name')} />
        年龄：<Input id='age'  placeholder='请输入年龄' style={{width: '200px'}} value={this.state.personInfo.age} onChange={e => this.saveInfo(e, 'age')} />
        <Button type="primary" onClick={this.addPerson}>添加</Button>
        <hr />
        <div>
          {
            this.props.personData.map(item => {
              return <div key={item.id}>{item.name}-{item.age}</div>
            })
          }
        </div>
      </div>
    )
  }
}

// 容器组件
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.count, personData: state.personData}), // 映射状态
  { addPerson } // 映射操作状态的方法 {addPerson: addPerson}简写了
)(Person)
