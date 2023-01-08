import React from 'react'
import Information from '../Information'
import Navbar from '../Navbar'
import HeaderMain from '../HeaderMain'
import { Col, Row } from 'antd';
function Header() {
  return (
    <header style={{marginBottom:"55px"}}>
        <Col>
          <Col span={24}><Information/></Col>
        </Col>
        <Row>
          <Col span={24}> <HeaderMain /></Col>
        </Row>
        <Row>
          <Col span={24}><Navbar /></Col>
        </Row>
        {/* <Row>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
          <Col span={6}>col-6</Col>
        </Row> */}


        {/* <Information />
        <HeaderMain />
        <Navbar /> */}
    </header>
  )
}

export default Header