import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import router from '../../router';

export default function MBreadcrumb() {
  const x = useLocation()
  const navigate = useNavigate()
  const breadData = x.pathname.split('/').filter(item => item)


  let routerLabelObj = {}
  const getRouterLabelObj = (data) => {
    data.forEach(item => {
      routerLabelObj[item.key] = item
      if(item.children) {
        getRouterLabelObj(item.children)
      }
    })
    return routerLabelObj
  }
  getRouterLabelObj(router)

  const breadcrumbClick = (key) => {
    const { redirect } = routerLabelObj[key]
    if(redirect) {
      navigate(redirect)
    }
  }

  return (
    <Breadcrumb>
      {
        breadData.map(item => {
          return <Breadcrumb.Item key={item} onClick={() => breadcrumbClick(item)}>{routerLabelObj[item].label}</Breadcrumb.Item>
        })
      }
  </Breadcrumb>
  )
}
