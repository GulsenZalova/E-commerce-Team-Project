import React, { useContext } from 'react'
import "./style.css"
import { dataContext } from '../../contexts/ProductContext'
import { Carousel } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";


function index() {
    let { categories, data } = useContext(dataContext);

    const carouselResponsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 805,
            settings: {
                slidesToShow: 1,
            },
        }
    ]

    return (
        <div className='mini-carts'>
            <Carousel responsive={carouselResponsiveSettings}
                arrows={true} dots={false} slidesToShow={3} prevArrow={<ArrowLeftOutlined />} nextArrow={<ArrowRightOutlined />}>
                {React.Children.toArray(
                    categories && categories.map(item => (
                        <div className='all-categories-carousel'>
                            <div className='categories-carousel'>
                                <img width={80} height={80} src={data.find(q => q.category === item)?.image} />
                                <div className='categories--name'>
                                    <h3>{item}</h3>
                                    <span>({data.filter(q => q.category === item).length} items)</span>
                                </div>
                            </div>
                        </div>
                    )))}
            </Carousel>
        </div >
    )
}

export default index