import { Navigate } from "react-router-dom"
import { MailOutlined } from '@ant-design/icons';
import Analysis from '../pages/dashboard/Analysis/Analysis'
import Monitoring from '../pages/dashboard/Monitoring/Monitoring'
import Control from '../pages/dashboard/Control/Control'
import Empty from '../pages/empty/Empty'
const router = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <MailOutlined />,
    path: '/dashboard',
    redirect: '/dashboard/analysis',
    children: [
      {
        key: 'analysis',
        label: '分析页',
        path: 'analysis',
        element: <Analysis/>
      },
      {
        key: 'monitoring',
        label: '监控页',
        path: 'monitoring',
        element: <Monitoring/>
      },
      {
        key: 'control',
        label: '控制台',
        path: 'control',
        element: <Control/>
      }
    ]
  },
  {
    key: 'form',
    label: '表单页',
    icon: <MailOutlined />,
    path: '/form',
    redirect: '/form/base-form',
    children: [
      {
        key: 'base-form',
        label: '基础表单',
        path: 'base-form',
        element: <Empty/>
      },
      {
        key: 'distribution-form',
        label: '分布表单',
        path: 'distribution-form',
        element: <Empty/>
      },
      {
        key: 'senior-form',
        label: '高级表单',
        path: 'senior-form',
        element: <Empty/>
      }
    ]
  },
  {
    key: 'list',
    label: '列表页',
    icon: <MailOutlined />,
    path: '/list',
    redirect: '/list/search-list/article',
    children: [
      {
        key: 'search-list',
        label: '搜索列表',
        path: 'search-list',
        redirect: '/list/search-list/article',
        children: [
          {
            key: 'article',
            label: '搜索列表（文章）',
            path: 'article',
            element: <Empty/>
          },
          {
            key: 'project',
            label: '搜索列表（项目）',
            path: 'project',
            element: <Empty/>
          },
          {
            key: 'application',
            label: '搜索列表（应用）',
            path: 'application',
            element: <Empty/>
          }
        ]
      },
      {
        key: 'table',
        label: '查询表格',
        path: 'table',
        element: <Empty/>
      },
      {
        key: 'standard-list',
        label: '标准列表',
        path: 'standard-list',
        element: <Empty/>
      },
      {
        key: 'card-list',
        label: '卡片列表',
        path: 'card-list',
        element: <Empty/>
      }
    ]
  },
  {
    key: 'detail',
    label: '详情页',
    icon: <MailOutlined />,
    path: '/detail',
    children: [
      {
        key: 'base-detail',
        label: '基础详情页',
        path: 'base-detail',
        element: <Empty/>
      },
      {
        key: 'senior-detail',
        label: '高级详情页',
        path: 'senior-detail',
        element: <Empty/>
      }
    ]
  },
  {
    key: 'results-page',
    label: '结果页',
    icon: <MailOutlined />,
    path: '/results-page',
    children: [
      {
        key: 'success-page',
        label: '成功页',
        path: 'success-page',
        element: <Empty/>
      },
      {
        key: 'fail-page',
        label: '失败页',
        path: 'fail-page',
        element: <Empty/>
      }
    ]
  },
  {
    key: 'exception-page',
    label: '异常页',
    icon: <MailOutlined />,
    path: '/exception-page',
    children: [
      {
        key: 'page-403',
        label: '403',
        path: 'page-403',
        element: <Empty/>
      },
      {
        key: 'page-404',
        label: '404',
        path: 'page-404',
        element: <Empty/>
      },
      {
        key: 'page-500',
        label: '500',
        path: 'page-500',
        element: <Empty/>
      }
    ]
  },
  {
    key: 'user-page',
    label: '个人页',
    icon: <MailOutlined />,
    path: '/user-page',
    children: [
      {
        key: 'user-center',
        label: '个人中心',
        path: 'user-center',
        element: <Empty/>
      },
      {
        key: 'user-setting',
        label: '个人设置',
        path: 'user-setting',
        element: <Empty/>
      }
    ]
  },
  {
    key: 'graphic-editor',
    label: '图形编辑器',
    icon: <MailOutlined />,
    path: '/graphic-editor',
    children: [
      {
        key: 'process-editor',
        label: '流程编辑器',
        path: 'process-editor',
        element: <Empty/>
      },
      {
        key: 'brain-map-editor',
        label: '脑图编辑器',
        path: 'brain-map-editor',
        element: <Empty/>
      },
      {
        key: 'topology-editor',
        label: '拓扑编辑器',
        path: 'topology-editor',
        element: <Empty/>
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/dashboard/analysis' />
  }
]

export default router