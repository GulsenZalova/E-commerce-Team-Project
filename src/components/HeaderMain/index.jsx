import React from 'react'
import "./style.css"
import { Col, Row } from 'antd';
import logo from "../../assets/icons/logo.svg"
// import user from "../../assets/icons/user.svg"
import {
    UserOutlined,
    HeartOutlined,
    ShoppingCartOutlined 
  } from '@ant-design/icons';

import { Input, Button,} from 'antd';
function HeaderMain() {
    return (
        <div className='headermain'>
            <div className='container'>
                <Row className='align' >
                    <Col span={8}>
                        <Row>
                            <Col span={12}><img src={logo} alt="" /></Col>
                            <Col className='inputArea' span={12}><Input placeholder="Search any things" /><Button className='btn' type="primary" >Primary</Button></Col>
                        </Row>
                    </Col>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Row>
                            <Col className='row' span={8}><UserOutlined style={{ fontSize: '16px', color: '#FFFFFF'}} twoToneColor="#eb2f96"/>Sign İn</Col>
                            <Col className='row' span={8}><HeartOutlined style={{ fontSize: '16px', color: '#FFFFFF'}} /> <span className='span'>1</span> Sign İn </Col>
                            <Col className='row' span={8}><ShoppingCartOutlined  style={{ fontSize: '16px', color: '#FFFFFF'}}/> <span className='span'>2</span>Cart </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default HeaderMain
