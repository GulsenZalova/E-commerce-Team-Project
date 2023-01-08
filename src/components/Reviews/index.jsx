import { Carousel } from 'antd'
import React from 'react'
import "./style.css"
import avatar from "../../assets/images/Ellipse4.svg"
import { ArrowLeftOutlined,ArrowRightOutlined } from "@ant-design/icons";


function Reviews() {
    return (
        <div className='reviews'>
            <Carousel arrows={true} dots={false} slidesToShow={3} prevArrow={<ArrowLeftOutlined />} nextArrow={<ArrowRightOutlined />}>
                <div className='parts'>
                    <div className='reviews-part'>
                        <div className='review-top'>
                            <img src={avatar} />
                            <h3>Savannah Nguyen</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                            Nec sit enim tellus faucibus bibendum ullamcorper.
                            Phasellus tristique aenean at lorem sed scelerisque.
                        </p>
                    </div>
                </div>
                <div className='parts'>
                    <div className='reviews-part'>
                        <div className='review-top'>
                            <img src={avatar} />
                            <h3>Savannah Nguyen</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                            Nec sit enim tellus faucibus bibendum ullamcorper.
                            Phasellus tristique aenean at lorem sed scelerisque.
                        </p>
                    </div>
                </div>
                <div className='parts'>
                    <div className='reviews-part'>
                        <div className='review-top'>
                            <img src={avatar} />
                            <h3>Savannah Nguyen</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                            Nec sit enim tellus faucibus bibendum ullamcorper.
                            Phasellus tristique aenean at lorem sed scelerisque.
                        </p>
                    </div>
                </div>
                <div className='parts'>
                    <div className='reviews-part'>
                        <div className='review-top'>
                            <img src={avatar} />
                            <h3>Savannah Nguyen</h3>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur.
                            Nec sit enim tellus faucibus bibendum ullamcorper.
                            Phasellus tristique aenean at lorem sed scelerisque.
                        </p>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}

export default Reviews