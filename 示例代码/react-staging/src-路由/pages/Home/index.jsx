import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>Home的内容区</div>
        <div className='menu'>
          <MyNavLink to="/home/news">News</MyNavLink>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </div>
          <div className='content'>
            <Route path='/home/news' component={News} />
            <Route path='/home/message' component={Message} />
            <Redirect to='/home/news' />
          </div>
      </div>
    )
  }
}
