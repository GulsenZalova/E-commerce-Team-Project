import React, { useEffect, useState } from 'react'
import "./style.css"
import canonImg from '../../assets/images/canon.png'
import discountImg from '../../assets/images/discount.png'
import { Carousel } from 'antd';
import { BASE_URL, network } from '../../api/axiosinstance';
import Buttons from '../Buttons';


function Advertisement() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        network.getLimitedProducts(BASE_URL, "3")
            .then(res => setProduct(res));
    }, [])

    return (
        <div className='advertising'>
            <Carousel dots={true}>
                {React.Children.toArray(
                    product && product.map(item => (
                        <div className='advertisement'>
                            <div className='advertisement--part'>
                                <h1 className='advertisement--title' >{item?.title} </h1>
                                <div className='advertisement--buttons'>
                                    <Buttons name="Shop now"/>
                                    <button style={{marginLeft:"17px"}} className='advertisement--buttons--right'>View more</button>
                                </div>
                            </div>
                            <div className='advertisement--part image-advertisement'>
                                <img className='main-img
                        ' src={item?.image} />
                            </div>
                        </div>
                    ))
                )}

            </Carousel>

        </div>
    )
}

export default Advertisement