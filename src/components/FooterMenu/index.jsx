import React from 'react'
import { Col, Row } from 'antd';
import footerlogo from "../../assets/images/footerlogo.svg"
import {
    GoogleOutlined,
    FacebookOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import "./style.css"
function FooterMenu() {
    return (
        <div className='container footermenu'>
            <Row style={{ display: "flex", justifyContent: "space-between",gap:"20px" }} >
                <Col  xs={24} sm={4} md={12} lg={8} xl={5} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                    <Row><img src={footerlogo} alt="" /></Row>
                    <Row><p className='text'>64 st james boulevard <br />
                        hoswick , ze2 7zj</p>
                    </Row>
                    <Row style={{ display: "flex", gap: "20px" }}>
                        <GoogleOutlined style={{ fontSize: '16px', color: '#3B3B3B' }} />
                        <FacebookOutlined style={{ fontSize: '16px', color: '#3B3B3B' }} />
                        <InstagramOutlined style={{ fontSize: '16px', color: '#3B3B3B' }} />
                    </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={5} style={{ display: "flex", justifyContent: "space-between" }} >
                    <nav>
                        <h1>Find product</h1>
                        <ul>
                            <li><a>Brownze arnold</a></li>
                            <li><a>Chronograph blue</a></li>
                            <li><a>Smart phones</a></li>
                            <li><a>Automatic watch</a></li>
                            <li><a>Hair straighteners</a></li>
                        </ul>
                    </nav>
                </Col>
                <Col  xs={24} sm={24} md={12} lg={8} xl={5}style={{ display: "flex", justifyContent: "space-between" }} >
                    <nav>
                        <h1>Get help</h1>
                        <ul>
                            <li><a>About us</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>Return policy</a></li>
                            <li><a>Privacy policyy</a></li>
                            <li><a>Payment policy</a></li>
                        </ul>
                    </nav>
                </Col>
                <Col  xs={24} sm={24} md={12} lg={8} xl={5} style={{ display: "flex", justifyContent: "space-between" }} >
                    <nav>
                        <h1>About us</h1>
                        <ul>
                            <li><a>News</a></li>
                            <li><a>Service</a></li>
                            <li><a>Our policy</a></li>
                            <li><a>Custmer care</a></li>
                            <li><a>Faq’s</a></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </div>
    )
}

export default FooterMenu
