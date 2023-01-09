import React from 'react'
import { dataContext } from '../../contexts/ProductContext';
import { useContext, useEffect, useState } from 'react';
import { BASE_URL, network } from '../../api/axiosinstance';
import "./style.css"
import { Checkbox } from 'antd';
import { Radio } from 'antd';

function ProductFilterSide({ selectCatagory, setSelectCatagory }) {
    const { categories, data } = useContext(dataContext)
    const onChange = (e) => {
        if (e.target.checked) {
            setSelectCatagory([...selectCatagory, e.target.value])
        } else {
            setSelectCatagory(() => {
                return selectCatagory.filter(q => q !== e.target.value)
            })
        }

    };

    return (
        <div className='side'>
            <div className='catagories'>
                <div className='row'>
                    <div className='catagoryname'>Catagories</div>
                    <div className='catagorycount'>Reset</div>
                </div>
                {
                    categories && (
                        categories.map((item, i) => (
                            <div className='row' key={i}>
                                <div ><Checkbox className='catagory' value={item} onChange={onChange}>{item}</Checkbox></div>
                                {
                                    data && (
                                        <div className='catagory'>{data.filter((q) => q.category === item).length}</div>
                                    )
                                }
                            </div>
                        ))
                    )
                }
            </div>
            <div className='catagories'>
                <div className='row'>
                    <div className='catagoryname'>Avaliability</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>In stock</Checkbox></div>
                    <div>5</div>
                </div>
                <div className='row'>
                    <div><Checkbox disabled onChange={onChange}>Out of stock</Checkbox></div>
                    <div>0</div>
                </div>
            </div>

            <div className='catagories'>
                <div className='row'>
                    <div className='catagoryname'>Product type</div>
                </div>
                <div className='row'>
                    <div>0 selected</div>
                    <div>Reset</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>Smart watch</Checkbox></div>
                    <div>5</div>
                </div>
            </div>

            <div className='catagories'>
                <div className='row'>
                    <div className='catagoryname'>Brand</div>
                </div>
                <div className='row'>
                    <div>0 selected</div>
                    <div>Reset</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>Smart watch</Checkbox></div>
                    <div>5</div>
                </div>
            </div>
            <div className='catagories'>
                <div className='row'>
                    <div className='catagoryname'>Size</div>
                </div>
                <div className='row'>
                    <div>0 selected</div>
                    <div>Reset</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>M</Checkbox></div>
                    <div>5</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>S</Checkbox></div>
                    <div>5</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>X</Checkbox></div>
                    <div>5</div>
                </div>
                <div className='row'>
                    <div><Checkbox onChange={onChange}>XX</Checkbox></div>
                    <div>5</div>
                </div>
            </div>
        </div>
    )
}

export default ProductFilterSide
