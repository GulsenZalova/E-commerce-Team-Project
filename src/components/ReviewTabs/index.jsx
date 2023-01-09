import React from 'react'
import "./style.css"
import { Tabs } from 'antd';

function ReviewTabs() {
    const tabsMenu = [
        {
            label: (<span className="product-tabs-menu">Description</span>),
            id: 1,
            text: (
                <div className="product-tabs-inside">
                    <div className='inside-header'>Product Description</div>
                    <div className='inside-text'>No description yet</div>
                </div>
            )
        },
        {
            label: (<span className="product-tabs-menu">Reviews</span>),
            id: 2,
            text: (
                <div className="product-tabs-inside">
                    <div className='inside-header'>Customer Reviews</div>
                    <div className='inside-text'>No reviews yet</div>
                </div>
            )
        }
    ]
    return (
        <div className='product-tabs'>
            <Tabs
                defaultActiveKey="1"
                centered
                items={tabsMenu.map((item) => {
                    // const id = String(i + 1);
                    return {
                        label: item.label,
                        key: item.id,
                        children: item.text,
                    };
                })}
            />
        </div>
    )
}

export default ReviewTabs