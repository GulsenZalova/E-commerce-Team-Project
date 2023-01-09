import React from 'react'
import "./style.css"
import boxTick from "../../assets/images/box-tick.svg"
import crown from "../../assets/images/crown.svg"
import image10 from "../../assets/images/image10.svg"

function Guarantee() {
    return (
        <div className='guarantee'>
            <div className='guarantee-inside'>
                <div className='guarantee-parts'>
                    <img src={boxTick} className='guarantee-parts-img' />
                    <div className='guarantee-text'>
                        <h1>Free delivery</h1>
                        <span>on order above $50,00</span>
                    </div>
                </div>
                <div className='guarantee-parts'>
                    <img src={crown} className='guarantee-parts-img' />
                    <div className='guarantee-text'>
                        <h1>Best quality</h1>
                        <span>best quality in low price</span>
                    </div>
                </div>
                <div className='guarantee-parts'>
                    <img src={image10} className='guarantee-parts-img' />
                    <div className='guarantee-text'>
                        <h1>1 year warranty</h1>
                        <span>Avaliable warranty</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Guarantee