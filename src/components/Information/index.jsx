import React from 'react'
import { Col, Row } from 'antd';
import location from "../../assets/icons/Location.png"
import truck from "../../assets/icons/truck.svg"

import "./style.css"
function Information() {
    return (
        <div className='container'>
            <div className='information'>
                <div className='info-contact'>Need help? Call ue (+98) 0234 456 789</div>
                <div className='info-service'>
                    <div className='info-detail'>
                        <img width={20} src={location} alt="" />
                        <p>Our store</p>
                    </div>
                    <div className='info-detail'>
                        <img width={20} src={truck} alt="" />
                        <p>Truck your order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information
