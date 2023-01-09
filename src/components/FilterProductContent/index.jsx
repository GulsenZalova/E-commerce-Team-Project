import React from 'react'
import "./style.css"
import { useContext } from 'react';
import ProductCart from '../ProductCart'
import { dataContext } from '../../contexts/ProductContext';
import { Col, Row } from 'antd';
function FilterProductContent({filteredProducts,selectedProducts}) {
  console.log(filteredProducts)
  const data=useContext(dataContext)
  const info=data.data
  return (
    <div className='content'>
      
      {
        filteredProducts.length>0 ? (
          <Row>
          { filteredProducts.map((x)=>(
              <Col xl={8} lg={12} md={24} sm={24}>
                {console.log(x)}
              <ProductCart item={x} title={x.title} img={x.image} price={x.price} />
            </Col>
         ))
         }
        </Row>
         
        ) : (
         <Row>
          {
            info.map((x=>(
              <Col  xl={8} lg={12} md={24} sm={24}>
              <ProductCart item={x} title={x.title} img={x.image} price={x.price} />
            </Col>
            )))
          }
         </Row>

        )
      }
    </div>
  )
}

export default FilterProductContent
