import React from 'react'
import developing from '../../assets/imgs/developing.png'
import './empty.scss'

export default function Empty() {
  return (
    <div className='empty-box'>
      <img className='developing' src={developing} alt="" />
      <div>正在开发中...</div>
    </div>
  )
}
