import React from 'react'
// // params方式传参
// import { useParams, useMatch } from 'react-router-dom'

// // search方式传参
// import { useSearchParams } from 'react-router-dom'


// state方式传参
import { useLocation } from 'react-router-dom'


export default function Detail() {
  // // params方式传参
  // const {id, title, content} = useParams()
  // const a = useMatch('/home/message/detail/:id/:title/:content')
  // console.log(a);
  
  // // search方式传参
  // let [search, setSearch] = useSearchParams()
  // const id = search.get('id')
  // const title = search.get('title')
  // const content = search.get('content')

  // state方式传参
  let {state: {id, title, content}} = useLocation()
  return (
    <div>
      {/* <button onClick={() => setSearch('id=010&title=消息10&content=修改参数')}>点我修改search参数</button> */}
      <div>{id}</div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  )
}
