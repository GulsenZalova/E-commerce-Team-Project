import React from 'react'
import { useContext } from 'react'
import { dataContext } from '../../contexts/ProductContext'
import ProductCart from '../ProductCart'
import { Col, Row } from 'antd';
import "./style.css"
import Buttons from '../Buttons';
function MyFavorites() {
    const {favorites,setFavorites}=useContext(dataContext)
    console.log(favorites)
    const handleDeleteAll=()=>{
        setFavorites([])
    }
  return (
    <div className='container'>
      {
        favorites.length>0 ? (
            <div className='favorites'>
            <Row>
                <button className='deleteBTN' onClick={()=>handleDeleteAll()}>Delete All</button>
            </Row>
                <Row>
               {   favorites.map(x=>(
                    <Col  xl={8} lg={8} md={12} sm={24}> 
                    <ProductCart item={x} title={x.title} img={x.image} price={x.price} />
                    </Col>
            ))}
            </Row>
            </div>

        ):(
            <h1 className='favMessage'>Your favorites list is empty</h1>
        )
      }
    </div>
  )
}

export default MyFavorites