import React from 'react'
import './index.scss'
import logo from '../../assets/imgs/logo.svg'
import user from '../../assets/imgs/user.png'
import { Menu, Dropdown } from 'antd';
import { SearchOutlined, QuestionCircleOutlined, BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons'

export default function Header() {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <div>
              个人中心
            </div>
          ),
          icon: <UserOutlined />,
        },
        {
          label: (
            <div>
              个人设置
            </div>
          ),
          icon: <SettingOutlined />
        },
        {
          label: (
            <div>
              <span>退出登录</span>
            </div>
          ),
          icon: <LogoutOutlined />
        }
      ]}
    />
  );

  return (
    <div className='header-wrapper'>
      <div className='left-box'>
        <img src={logo} className="header-logo" alt="logo" />
        <span className='header-title'>React Antd Admin</span>
      </div>
      <div className='right-box'>
        <SearchOutlined />
        <QuestionCircleOutlined />
        <div className='notice'>
          <BellOutlined />
          <div className='num'>11</div>
        </div>
        <Dropdown overlay={menu}>
          <div className='user-box'>
            <img src={user} alt="" />
            <span>Admin</span>
          </div>
        </Dropdown>
      </div>
    </div>
  )
}
