import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  function computedClassName({isActive}) {
    return isActive ? 'menu-item menu-active' : 'menu-item'
  }
  return (
    <div>
      <div>Home</div>
      <div className=''>
          <div className='menu-horizontal'>
            <NavLink className={ computedClassName } to='news'>News</NavLink>
            <NavLink className={ computedClassName } to='message'>Message</NavLink>
          </div>
          <div className=''>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}
