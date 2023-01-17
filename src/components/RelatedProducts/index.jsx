import React, { useContext } from 'react'
import "./style.css"
import { Carousel } from 'antd';
import { dataContext } from '../../contexts/ProductContext';
import ProductCart from '../ProductCart';
import PropTypes from 'prop-types';



function RelatedProducts({productDetail}) {

    let { data} = useContext(dataContext);

    const carouselResponsiveSettings = [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ]

    return (
        <div className='related-products'>
            <div className='related-header'>
                <h1>Related Products</h1>
            </div>

            {productDetail &&
                <Carousel responsive={carouselResponsiveSettings} adaptiveHeight={true} dots={true} slidesToShow={4}>
                    {React.Children.toArray(
                        data.map(item => (
                            item.category === productDetail.category &&
                            <ProductCart item={item} title={item.title} img={item.image} price={item.price} />
                        ))
                    )}
                </Carousel>
            }

        </div>
    )
}

// RelatedProducts.propTypes = {
//     productDetail: PropTypes.object
// }

export default RelatedProducts