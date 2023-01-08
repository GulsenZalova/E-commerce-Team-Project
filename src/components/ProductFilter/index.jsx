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
 console.log(filteredProducts)
  useEffect(() => {
    network.getcatagoryProduct(BASE_URL,selectCatagory)
    .then(res=>console.log(res))
},[])
  return (
    <div className='layout'>
       <Layout className='container  '>
        <Sider ><ProductFilterSide selectCatagory={selectCatagory} setSelectCatagory={setSelectCatagory}/></Sider>
        <Content><FilterProductContent filteredProducts={filteredProducts} /></Content>
      </Layout>
    </div>
  )
}

export default ProductFilter
