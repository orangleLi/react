import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './List.css'
import Item from '../Item/Item'

export default class List extends Component {
  static propTypes = {
    listData: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    del: PropTypes.func.isRequired
  }
  handleChange = (index, vlaue) => {
    this.props.handleChange(index, vlaue)
  }
  del = (index) => {
    this.props.del(index)
  }
  render() {
    return (
      <div className='list'>
        {
          this.props.listData.map((item, index) => {
            return <Item key={item.id} item={item} index={index} handleChange={this.handleChange} del={this.del}/>
          })
        }
      </div>
    )
  }
}
