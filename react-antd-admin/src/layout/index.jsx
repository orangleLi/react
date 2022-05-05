
import Header from './header';
import Memu from './menu'
import MBreadcrumb from './breadcrumb'
import router from '../router'
import './index.scss'

import React from 'react'
import { useRoutes } from 'react-router-dom';

export default function Layout() {
  const element = useRoutes(router)
  return (
    <div className="App">
      <Header/>
      <div className='content-wrapper'>
        <Memu/>
        <div className='content'>
          <MBreadcrumb />
          {element}
        </div>
      </div>
    </div>
  )
}
