import React from 'react'
import { Col, Row, Typography } from 'antd';
import { Input, Button, } from 'antd';
import "./style.css"
import {
    SendOutlined,
    CustomerServiceOutlined
} from '@ant-design/icons';

function FooterContact() {
    const { Title } = Typography;
    return (
        <div className='container footercontent'>
            <Row className='content'>
                <Col
                    xs={24} sm={24} md={24} lg={8} xl={8} style={{ display: "flex", alignItems: "center",width:"100%" }}>
                    <h1 className='contenttext'>
                        Subscribe newsletter
                    </h1>
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} className='inputArea'>
                    <Input placeholder="Email Adress" className='input' />
                    <SendOutlined className='send' />
                </Col>
                <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{ display: "flex", justifyContent: "center" }} >
                    <Row>
                        <Col><CustomerServiceOutlined style={{ fontSize: '40px', color: '#EDA415', paddingRight: "20px" }} /></Col>
                        <Col>
                            <Row className='text'>
                                Call us 24/7 :
                            </Row>
                            <Row className='text'>(+62) 0123 567 789</Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FooterContact
