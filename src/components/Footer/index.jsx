import React from 'react'
import FooterMenu from '../FooterMenu'
import FooterContact from '../FooterContact'

import "./style.css"
function Footer() {
  return (
    <div className='footer'>
    <FooterContact/>
    <FooterMenu/>
    </div>
  )
}

export default Footer