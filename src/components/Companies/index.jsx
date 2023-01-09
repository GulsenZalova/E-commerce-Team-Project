import React from 'react'
import "./style.css"
import brand4 from "../../assets/images/brand-4.svg"
import brand5 from "../../assets/images/brand-5.svg"
import brand6 from "../../assets/images/brand-6.svg"
import brand8 from "../../assets/images/brand-8.svg"
import brand7 from "../../assets/images/brand-7.svg"
import { Carousel } from 'antd'
import { ArrowLeftOutlined,ArrowRightOutlined } from "@ant-design/icons";


function Companies() {

    const companies = [brand4, brand5, brand6, brand7, brand8];

    const carouselResponsiveSettings = [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            },
        },
    ]

    return (
        <div className='companies'>
            <div className='companies-inside'>
                <Carousel responsive={carouselResponsiveSettings}  arrows={true} dots={false} slidesToShow={3} prevArrow={<ArrowLeftOutlined />} nextArrow={<ArrowRightOutlined />}>
                    {React.Children.toArray(
                        companies.map(item => (
                            <>
                                <div className='companies-parts'>
                                    <img src={item} className='companies-parts-img' />
                                </div>
                            </>
                        ))
                    )}
                </Carousel>

            </div>
        </div>
    )
}

export default Companies