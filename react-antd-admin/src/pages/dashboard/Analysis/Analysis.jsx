import React from 'react'
import { Button, Table, Tag, Space, Dropdown, Menu } from 'antd';
import { PlusOutlined, SearchOutlined, DeleteOutlined, UploadOutlined, DownloadOutlined, ExportOutlined } from '@ant-design/icons';
import './analysis.scss'

export default function analysis() {

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];


  const handleMenuClick = (e) => {
    // message.info('Click on menu item.');
    // console.log('click', e);
  }

  const handleButtonClick = (e) => {
    
  }

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        {
          label: '上传文件',
          key: '1',
          icon: <UploadOutlined />,
        },
        {
          label: '下载文件',
          key: '2',
          icon: <DownloadOutlined />,
        },
        {
          label: '导出模板',
          key: '3',
          icon: <ExportOutlined />,
        },
      ]}
    />
  );

  return (
    <div>
      <div className='btn-box'>
        <Button type="primary" className='btn' icon={<PlusOutlined />}>新增</Button>
        <Button type="primary" className='btn' icon={<SearchOutlined />}>查询</Button>
        <Button type="primary" className='btn' icon={<DeleteOutlined />}>删除</Button>
        <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
          其他
        </Dropdown.Button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  )
}
