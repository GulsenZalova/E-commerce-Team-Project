import React from 'react'
import Information from '../Information'
import Navbar from '../Navbar'
import HeaderMain from '../HeaderMain'
import { Col, Row } from 'antd';
function Header() {
  return (
    <header style={{marginBottom:"55px"}}>
      <div className='header'>
        <Information/>
        <HeaderMain/>
        <Navbar/>
      </div>
    </header>
  )
}
export default Header