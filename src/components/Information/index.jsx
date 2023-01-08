import React from 'react'
import { Col, Row } from 'antd';
import location from "../../assets/icons/Location.png"
import truck from "../../assets/icons/truck.svg"

import "./style.css"
function Information() {
    return (
        <div className='container'>
            <div className='information'>
                <Row>
                    <Col span={8}>Need help? Call ue (+98) 0234 456 789</Col>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <Row>
                            <Col className='row' span={12}> <img width={20} src={location} alt="" /> Our store</Col>
                            <Col className='row' span={12}> <img width={20} src={truck} alt="" /> Truck your order</Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Information
