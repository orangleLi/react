import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Item.scss'

export default class Item extends Component {
  state = { mouse: false }

  // prop必传及类型校验
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    this.props.handleChange(this.props.index, e.target.checked)
  }
  del = () => {
    this.props.del(this.props.index)
  }
  handleMouse = (flag) => {
    return () => {
      this.setState({mouse: flag})
    }
  }
  render() {
    const {item} = this.props
    const {mouse} = this.state
    return (
      <div key={item.id} className='item' style={{background: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <input type="checkbox" checked={item.checked} onChange={this.handleChange} />
        <span>{item.title}</span>
        <button className='del' style={{display: mouse ? 'block' : 'none'}} onClick={this.del}>删除</button>
      </div>
    )
  }
}
