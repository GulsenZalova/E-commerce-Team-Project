import { Carousel } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../../contexts/ProductContext'
import ProductCart from '../ProductCart';
import './style.css'
import { Select } from 'antd';


function PopularProducts() {
    let { categories, data } = useContext(dataContext);


    const [selectedCategory, setSelectedCategory] = useState("electronics");

    const handleChange = (value) => {
        setSelectedCategory(value);
    };

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
        {
            breakpoint: 576,
            settings: {
                rows: 1,
                slidesToShow: 1,
            },
        }
    ]
    return (
        <>
            <div className='popular'>
                <div className='popular-header'>
                    <h1>Popular Products</h1>

                    <ul>
                        {React.Children.toArray(
                            categories && categories.map(item => (
                                <li
                                    style={{ opacity: item === selectedCategory && "0.6" }}
                                    className='selected-categories' onClick={() => setSelectedCategory(item)}>{item}</li>
                            ))
                        )}
                    </ul>


                    <Select
                    className='select-category-for-mobile'
                        defaultValue={selectedCategory}
                        style={{
                            width: 120,
                        }}
                        onChange={handleChange}
                        options={[
                            {
                                value: categories[0],
                                label: categories[0],
                            },
                            {
                                value: categories[1],
                                label: categories[1],
                            },
                            {
                                value: categories[2],

                                label: categories[2],
                            },
                            {
                                value: categories[3],
                                label: categories[3],
                            },
                        ]}
                    />


                </div>
                <Carousel responsive={carouselResponsiveSettings} rows={2} adaptiveHeight={true} dots={true} slidesToShow={4}>
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