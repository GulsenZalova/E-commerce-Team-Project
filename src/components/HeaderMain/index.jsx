import React from 'react'
import "./style.css"
import { Col, Row } from 'antd';
import logo from "../../assets/icons/logo.svg"
import Buttons from '../Buttons';
import { useContext } from 'react'
import { dataContext } from '../../contexts/ProductContext'
import {
    UserOutlined,
    HeartOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';

import { Input, Button, } from 'antd';
import { Link } from 'react-router-dom';
function HeaderMain() {
    const {favorites}=useContext(dataContext)
    return (
        <div className='headermain'>
            <div className='container'>
                <div className='header-main-container'>
                    <div className='header-contact'>
                        <Link to="/">
                        <img src={logo} alt="" />
                        </Link>
                        <div className='inputArea'>
                            <Input placeholder="Search any things" style={{padding:"5px 50px 5px 10px",borderRadius:"15px"}} />
                            <button className='btn'>Search</button>
                        </div>
                    </div>
                    <div className='header-icons'>
                        <div className='icon-info'>
                            <UserOutlined style={{ fontSize: '16px', color: '#FFFFFF' }} twoToneColor="#eb2f96" />
                            <span className='icon-text'>Sign İn</span>
                        </div>
                        <Link to="/favorites">
                        <div className='icon-info'>  
                            <HeartOutlined style={{ fontSize: '16px', color: '#FFFFFF' }} />
                            {
                                favorites && (
                                    <span className='span'>{favorites.length}</span> 
                                ) 
                            }
                           
                        </div>
                        </Link>
                        <div className='icon-info'>
                            <ShoppingCartOutlined style={{ fontSize: '16px', color: '#FFFFFF' }} />
                            <span className='span'>2</span>
                            <span className='icon-text'>Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain
