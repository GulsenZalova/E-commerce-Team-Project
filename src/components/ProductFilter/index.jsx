import React from 'react'
import ProductFilterSide from '../ProductFilterSide'
import FilterProductContent from '../FilterProductContent'
import { useContext,useEffect,useState } from 'react';
import { dataContext } from '../../contexts/ProductContext';
import { BASE_URL, network } from '../../api/axiosinstance';
import { Layout } from 'antd';
import "./style.css"
const {Sider, Content } = Layout;
function ProductFilter() {
  const [selectCatagory,setSelectCatagory]=useState([])
  const data=useContext(dataContext)

  const info=data.data

  const filteredProducts = info.filter(x=>selectCatagory.includes(x.category))
  useEffect(() => {
    network.getcatagoryProduct(BASE_URL,selectCatagory)
    .then(res=>console.log(res))
},[])
  return (
    <div className='layout'>
      <div className='container filtercontainer '>
        <div className='filterside'><ProductFilterSide selectCatagory={selectCatagory} setSelectCatagory={setSelectCatagory}/></div>
        <div className='filtercontent'><FilterProductContent filteredProducts={filteredProducts} /></div>
      </div>
    </div>
  )
}
export default ProductFilter
