import React from 'react'
import "./style.css"

function Buttons(props) {
  return (
    <button className='main-button'>{props.name}</button>
  )
}
export default Buttons