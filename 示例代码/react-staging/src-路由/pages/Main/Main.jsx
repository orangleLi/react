import React, { Component } from 'react'
// import { Link, Route } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import Home from '../Home'
import About from '../About'
import Test from '../Test'
import MyNavLink from '../../components/MyNavLink/MyNavLink'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <div className='wrapper'>
          <div className='menu'>
            {/* <BrowserRouter>
            </BrowserRouter> */}

            {/* <Link className='menu-item' to='/home'>Home</Link>
            <Link className='menu-item' to='/about'>About</Link> */}

            {/* <NavLink activeClassName='menu-active' className='menu-item' to='/home'>Home</NavLink>
            <NavLink activeClassName='menu-active' className='menu-item' to='/about'>About</NavLink> */}

            <MyNavLink to='/home'>Home</MyNavLink>
            <MyNavLink to='/about'>About</MyNavLink>

            {/* <div className='menu-item active'>Home</div>
            <div className='menu-item'>About</div> */}
          </div>
          <div className='content'>
            {/* Switch作用的作用 path路由进行匹配，匹配到了之后就不在向下继续匹配，提高匹配效率（单一匹配），不加Switch就把path匹配到的所有页面都展示出来 */}
            <Switch>
              <Route path='/home' component={Home} />
              <Route path='/about' component={About} />
              {/* <Route path='/about' component={Test} /> */}
              {/* 上面的路由都没有匹配上时，重定向到/home router6移除了Redirect */}
              <Redirect to='/home' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}
