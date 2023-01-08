import { Carousel } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../../contexts/ProductContext'
import ProductCart from '../ProductCart';
import './style.css'

function PopularProducts() {
    let { categories, data } = useContext(dataContext);

    const [selectedCategory, setSelectedCategory] = useState("electronics");

console.log(selectedCategory)
    return (
        <>
            <div className='popular'>
                <div className='popular-header'>
                    <h1>Popular Products</h1>
                    <ul>
                        {React.Children.toArray(
                            categories && categories.map(item => (
                                <li style={{opacity:item===selectedCategory && "0.6"}} className='selected-categories' onClick={() => setSelectedCategory(item)}>{item}</li>
                            ))
                        )}
                    </ul>
                </div>
                <Carousel rows={2} adaptiveHeight={true} dots={true} slidesToShow={4}>
                    {React.Children.toArray(
                        data.map(item => (
                            item.category === selectedCategory &&
                            <ProductCart item={item} title={item.title} img={item.image} price={item.price} />
                        ))
                    )}
                </Carousel>

            </div>
        </>
    )
}

export default PopularProducts