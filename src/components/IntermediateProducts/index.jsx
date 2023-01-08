import { Carousel, Rate } from 'antd';
import React, { useEffect, useState } from 'react'
import { BASE_URL, network } from '../../api/axiosinstance';
import "./style.css"
import shoppingCart from "../../assets/icons/shopping-cart.svg"
import eyeIcon from "../../assets/icons/eye.svg"

function IntermediateProducts() {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        network.getLimitedProducts(BASE_URL, "2")
            .then(res => setProduct(res));
    }, [])

    return (
        <div className='intermediate-products'>
            <div className='intermediate-left'>
                <Carousel dots={true}>
                    {React.Children.toArray(
                        product && product.map(item => (
                            <div className='intermediate--carousel'>
                                <div style={{ width: "45%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img width={200} className='item-img' src={item.image} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", width: "55%" }}>
                                    <h3>{item.title}</h3>
                                    <span className='product-price'>${item.price.toFixed(2)}</span>
                                    <Rate disabled defaultValue={0} className="star-product" />
                                    <ul className="intermediate--carousel-list">
                                        <li>57</li>
                                        <li>11</li>
                                        <li>33</li>
                                        <li>78</li>
                                    </ul>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <button style={{ marginRight: "20px" }} className='product-add-cart'>
                                            <span className='addCart'>Add to Cart</span>
                                            <span className='shopping-icon'><img src={shoppingCart} /></span>
                                        </button>
                                        <button className='look-detailly'>
                                            <img src={eyeIcon} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                </Carousel>
            </div>
            <div className='intermediate-right'>
                {React.Children.toArray(
                    product && product.map(item => (
                        <div>
                            <div className='intermediate-right-element'>
                                <img className='product-image' src={item.image} />
                                <div className='intermediate-productss' style={{width:"40%"}}>
                                    <h3>{item.title}</h3>
                                    <span className='product-price'>${item.price.toFixed(2)}</span>
                                    <Rate disabled defaultValue={0} className="star-product" />
                                </div>
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>
    )
}

export default IntermediateProducts