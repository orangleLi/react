import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Message() {

  const navigate = useNavigate()
  
  const messageData = [
    {id: '001',title: '消息01', content: '唐小妃'},
    {id: '002',title: '消息02', content: '武小将'},
    {id: '003',title: '消息03', content: '李小白'},
    {id: '004',title: '消息04', content: '波斯客'},
    {id: '005',title: '消息05', content: '去病'},
  ]

  function showDetail(item) {
    navigate('detail', {
      replace: false,
      state: item
    })
  }

  return (
    <div>
      <div>message</div>
      <div className='message-box'>
        {
          messageData.map(item => {
            // params方式传参
            // return <Link className='message-item' key={item.id} to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link>

            // // search方式传参
            // return <Link className='message-item' key={item.id} to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link>

            // // state方式传参
            // return <Link className='message-item' key={item.id} to='detail' state={{
            //   id: item.id, title: item.title, content: item.content
            // }}>{item.title}</Link>

            // 编程式路由，也是通过state方式传参
            return <div className='message-item' key={item.id} onClick={() => showDetail(item)}>{item.title}</div>
          })
        }
      </div>
      <Outlet />
    </div>
  )
}
