import React from 'react'
// import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { useRoutes, NavLink } from 'react-router-dom'
import routers from '../../router'
// import About from '../About';
// import Home from '../Home';
// import Header from '../../components/Header'
import './Main.css'

export default function Main() {
  // console.log(routers);
  // 引入注册的路由表
  const element = useRoutes(routers)
  function computedClassName({isActive}) {
    return isActive ? 'menu-item menu-active' : 'menu-item'
  }
  return (
    <div className='main'>
        <h1>header</h1>
        {/* <Header/> */}
        <div className='wrapper'>
          <div className='menu'>
            <NavLink className={ computedClassName } to='/home'>Home</NavLink>
            <NavLink className={ computedClassName } to='/about'>About</NavLink>
          </div>
          <div className='content'>
            {/* <Routes>
              <Route path='/home' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/' element={<Navigate to='/home' />} />
            </Routes> */}
            {element}
          </div>
        </div>
      </div>
  )
}
