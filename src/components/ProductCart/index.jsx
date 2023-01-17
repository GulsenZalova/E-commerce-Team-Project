import { Rate } from 'antd'
import React, { useContext, useState } from 'react'
import heartIcon from "../../assets/icons/productHeart.svg"
import "./style.css"
import shoppingCart from "../../assets/icons/shopping-cart.svg"
import eyeIcon from "../../assets/icons/eye.svg"
import { Link, useParams } from "react-router-dom";
import { BASE_URL, network } from '../../api/axiosinstance'
import { dataContext } from '../../contexts/ProductContext'

function ProductCart(props) {
  let { item, title, img, price, } = props

  const [hoveredElement, setHoveredElement] = useState("");
  const {setFavorites,favorites}=useContext(dataContext)

  const setFavoritesElement=(element)=>{
    let selectedFavorite=favorites.find((x)=>x.id==element.id)
    if(!selectedFavorite){
       setFavorites([...favorites,element])
    }else{
      setFavorites(()=>{
       return favorites.filter((x)=>x.id!==element.id)
      })
    }
  }

  return (
    <>

        <div
          onMouseOver={() => setHoveredElement(item)}
          onMouseLeave={() => setHoveredElement("")}
          className='carts'>
          <div style={{ height: "320px" }} className='productt'>
            <Link to={`/product/${item.id}`}>
            <img className='product-image' src={img} />
            </Link>
          
            {hoveredElement !== item ?
              <>
                <h3>{title}</h3>
                <span className='product-price'>${price.toFixed(2)}</span>
                <Rate disabled defaultValue={0} className="star-product" />
              </>
              :
              <>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <button className='product-add-cart'>
                    <span className='addCart'>Add to Cart</span>
                    <span className='shopping-icon'><img src={shoppingCart} /></span>
                  </button>

               <button className='look-detailly' >
                    <img src={eyeIcon}  />
                  </button>
               
                </div>
              </>
            }
            <div className='whishlist-icon'>
              <img src={heartIcon} onClick={()=>setFavoritesElement(item)}  />
            </div>
          </div>
        </div>
    </>
  )
}

export default ProductCart