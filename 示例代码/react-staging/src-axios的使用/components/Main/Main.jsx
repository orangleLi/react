import React, { Component } from 'react'
import axios from 'axios'
import './Main.css'
import List from '../List/List'

export default class Main extends Component {
  state = {
    id: 0,
    listData: [],
    funcData: []
  }
  handleKeyDown = (e) => {
    let { listData, id } = this.state
    if(e.keyCode === 13) {
      this.setState({
        listData: [{title: e.target.value, id, checked: false}, ...listData],
        id: id + 1
      })
      this.input.value = ''
    }
  }
  handleChange = (index, vlaue) => {
    let { listData } = this.state
    listData[index].checked = vlaue
    this.setState({listData})
  }
  del = (index) => {
    let { listData } = this.state
    listData.splice(index, 1)
    this.setState({listData})
    let len = this.state.listData.length
    this.allInput.checked = len && len === this.state.listData.filter(item => item.checked).length
  }
  delFinished = () => {
    this.setState({listData: this.state.listData.filter(item => !item.checked)})
    this.allInput.checked = false
  }
  selectAll = () => {
    let { listData } = this.state
    listData.forEach(item => item.checked = true)
    this.setState({listData})
  }
  componentDidMount() {
    axios({
      url: '/dev-api/aqzbapp/loginController/getmenu',
      params: {xmbh: 'cs01'}
    }).then(({data}) => {
      if(data.result === '1') {
        this.setState({
          funcData: data.data
        })
      }
    })
  }
  render() {
    return (
      <div className='main'>
        <input placeholder='请输入任务，按回车键添加' ref={c => this.input = c} onKeyDown={this.handleKeyDown} />
        <List listData={ this.state.listData } handleChange={this.handleChange} del={this.del}></List>
        <div className='footer'>
          <input type="checkbox" ref={c => this.allInput = c} onChange={this.selectAll} />
          <span className='state'>已完成{this.state.listData.filter(item => item.checked).length}/{this.state.listData.length}</span>
          <button onClick={this.delFinished}>删除已完成项</button>
          <br/><br/>
          <hr/>
          <h2>从接口获取数据</h2>
          <div className='func-box'>
            <div className='func-item'>
                <span className='xmbt'>名称</span><span className='tbmc'>图标</span><span className='xmbt'>路径</span>
            </div>
            <div className='func-content'>
              {
                this.state.funcData.map(item => {
                  return (
                    <div className='func-item' key={item.xh}>
                        <span className='xmbt'>{item.xmbt}</span><span className='tbmc'>{item.tbmc}</span><span className='xmbt'>{item.xmnm}</span>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
