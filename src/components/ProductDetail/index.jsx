import React, { useContext } from 'react'
import "./style.css"
import blog1 from "../../assets/images/Blog-1.svg"
import { dataContext } from '../../contexts/ProductContext'
import heartIcon from "../../assets/icons/Heart.svg"
import availability from "../../assets/images/available.svg"
import { Rate } from 'antd'
import PropTypes from 'prop-types';
import {
    GoogleOutlined,
    FacebookOutlined,
    InstagramOutlined
} from '@ant-design/icons';

function ProductDetail({productDetail}) {

    return (
        <>
            {productDetail &&
                <div className='product-detaill'>
                    <div className='product-detaill--img'>
                        <img src={productDetail.image} />
                    </div>
                    <div className='product-detaill--info'>

                        <div className='product-main-info'>
                            <h1 className='product-detaill--name'>{productDetail.title}</h1>
                            <h4 className='product-detaill--price'>${productDetail.price}</h4>
                            <div className='product-detaill--rate'>
                                <Rate disabled defaultValue={0} />
                                <span className='reviewss'>No reviews</span>
                            </div>
                            <div className='product-detaill--available'>
                                <span className='available'>Available:</span>
                                <span className='stock'> <img src={availability} /> In stock </span>
                            </div>
                            <p className='count-stock'>Hurry up! only 34 product left in stock!</p>
                        </div>

                        <hr></hr>

                        <div className='product-detail-secondary-info'>
                            <div className='product-size'>
                                <span className='info-topics'>Size:</span>
                                <span className='quantity-helper'>30</span>
                                <span className='quantity-helper'>56</span>
                                <span className='quantity-helper'>42</span>
                                <span className='quantity-helper'>48</span>
                            </div>

                            <div className='product-quantity'>
                                <span className='info-topics info-quantity'>Quantity:</span>
                                <span className='product-counter'>-</span>
                                <span className='product-count'>1</span>
                                <span className='product-counter'>+</span>
                            </div>

                            <div className='product-detail-add'>
                                <button >Add to cart</button>
                                <button>Buy it now</button>

                                <img src={heartIcon}  />
                            </div>

                            <hr />

                            <div className='product-detail-last-info'>

                                <div className='product-detail-sku'>
                                    <span className='info-topics info-quantity'>SKU:</span>
                                    <span style={{ opacity: "0.8" }}>01133-9-9</span>
                                </div>

                                <div className='product-detail-category'>
                                    <span className='info-topics info-quantity'>Category:</span>
                                    <span style={{ opacity: "0.8" }}>20% off, 49% off Alex remote</span>

                                </div>

                                <div className='product-detail-share'>
                                    <span className='info-topics info-quantity'>Share:</span>
                                    <span style={{ opacity: "0.8" }}>
                                        <GoogleOutlined style={{ fontSize: '16px', color: '#3B3B3B', marginRight: "20px" }} />
                                        <FacebookOutlined style={{ fontSize: '16px', color: '#3B3B3B', marginRight: "20px" }} />
                                        <InstagramOutlined style={{ fontSize: '16px', color: '#3B3B3B' }} />
                                    </span>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            }
        </>
    )
}

// ProductDetail.propTypes = {
//     productDetail: PropTypes.object.isRequired
// }

export default ProductDetail