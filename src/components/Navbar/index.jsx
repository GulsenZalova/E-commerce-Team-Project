import React from 'react'
import { Col, Row } from 'antd';
// import type { MenuProps } from 'antd';
import { Link } from "react-router-dom"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Drawer,Button } from 'antd';
import { useContext, useState } from 'react';
import { dataContext } from "../../contexts/ProductContext"
import "./style.css"
function Navbar() {
  const { categories } = useContext(dataContext)
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      key: '1',
      label: (
        <a target="_blank">
          {categories[0]}
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" >
          {categories[1]}
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank">
          {categories[2]}
        </a>
      ),
    },
    {
      key: '4',
      label: <a target="_blank">
        {categories[3]}
      </a>,
    },
  ];

  return (
    <div className='nav'>
      <div className='container'>
        <Row className='align' >
          <Col span={16} >
            <Row>
              <Col span={6} md={6}>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ backgroundColor: "#EDA415", color: "white", padding: "10px" }}>
                      Browse Catagories
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Col>
              <Col className='inputArea' span={10} md={6}>
              <nav className='headerNav'>
                    <ul className='list'>
                      <li><Link to={"/"}>Home <DownOutlined /></Link></li>
                      <li><Link to={"/catalog"}>Catalog <DownOutlined /></Link></li>
                      <li><a>Blog</a></li>
                      <li><a>Pages <DownOutlined /></a></li>
                      <li style={{whiteSpace:"nowrap"}}><a>About us</a></li>
                    </ul>
                  </nav>
                <Button  className='drawerBTN'  type="primary" onClick={showDrawer}>
                  Open
                </Button>
                <Drawer className='drawer' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                  <nav>
                    <ul className='list'>
                      <li><a>Home <DownOutlined /></a></li>
                      <li><a>Catalog <DownOutlined /></a></li>
                      <li><a>Blog</a></li>
                      <li><a>Pages <DownOutlined /></a></li>
                      <li style={{whiteSpace:"nowrap"}}><a >About us</a></li>
                    </ul>
                  </nav>
                </Drawer>
              </Col>
            </Row>
          </Col>
          <Col span={8}  >
            <Row style={{ display: "flex",alignItems: "end",justifyContent:"center"}}>
              <Col  className='desc' span={8}>30 Days Free Return</Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Navbar