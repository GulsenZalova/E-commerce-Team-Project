import React from 'react'
import banner from "../../assets/images/banner.svg"
import Buttons from '../Buttons'
import "./style.css"

function Banner() {
    return (
        <div className='banner'>
            <img src={banner} />
            <div className='banner-inside'>
                <Buttons name="New laptop" />
                <h1>Sale up to 50% off</h1>
                <h4>12 inch hd display</h4>
                <Buttons name="Shop now" />

            </div>
        </div>
    )
}

export default Banner