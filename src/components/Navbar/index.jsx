import React from 'react'
import { Col, Row } from 'antd';
import { Link } from "react-router-dom"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Drawer, Button } from 'antd';
import { useContext, useState } from 'react';
import { dataContext } from "../../contexts/ProductContext"
import { Select } from 'antd';
import "./style.css"
function Navbar() {
  const { categories} = useContext(dataContext)
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
        <div className='nav-container'>
          <div className='nav-main'>
            <Dropdown menu={{ items }}>
              <a onClick={(e) => console.log(e)}>
                <Space style={{ backgroundColor: "#EDA415", color: "white", display:"flex",alignItems:"center",justifyContent:"center",padding: "10px", width: "218px", height: "70px", fontSize: "16px",borderRadius:"10px" }}>
                  Browse Catagories
                  <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} />
                </Space>
              </a>
            </Dropdown>

            <div className='nav-navbar'>
              <nav className='headerNav'>
                <ul className='list'>
                  <li><Link to={"/"}>Home <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} /></Link></li>
                  <li><Link to={"/catalog"}>Catalog <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} /></Link></li>
                  <li><a>Blog</a></li>
                  <li><a>Pages <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} /></a></li>
                  <li style={{ whiteSpace: "nowrap" }}><a>About us</a></li>
                </ul>
              </nav>
              <Button className='drawerBTN' type="primary" onClick={showDrawer}>
                Menu
              </Button>
              <Drawer className='drawer' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <nav>
                  <ul className='list'>
                    <li><Link to={"/"}>Home <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} /></Link></li>
                    <li><Link to={"/catalog"}>Catalog <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} /></Link></li>
                    <li><a>Blog</a></li>
                    <li><a>Pages <DownOutlined style={{ marginLeft: "5px", fontSize: "14px" }} /></a></li>
                    <li style={{ whiteSpace: "nowrap" }}><a >About us</a></li>
                  </ul>
                </nav>
              </Drawer>
            </div>
          </div>
          <div className='nav-text'>
            <span className='desc'>30 Days Free Return</span>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Navbar
