import React, { useEffect } from 'react'
import { Menu } from 'antd';
import router from '../../router'
import { useNavigate, useLocation } from 'react-router-dom';

const rootSubmenuKeys = router.map(item => item.key);

export default function Sider() {
  const pathArr = useLocation().pathname.split('/').filter(item => item)
  const [openKeys, setOpenKeys] = React.useState(pathArr.slice(0, pathArr.length-1));

  const key = pathArr[pathArr.length-1]
  const [selectedKeys, setSelectedKeys] = React.useState([key]);

  const navigate = useNavigate()

  // SubMenu 展开/关闭的回调
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const menuClick = (item) => {
    let path = '/' + item.keyPath.reverse().join('/')
    navigate(path)
  }

  useEffect(() => {
    setSelectedKeys(key)
  }) 

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 256,
      }}
      items={router}
      onClick={menuClick}
    />
  );
};