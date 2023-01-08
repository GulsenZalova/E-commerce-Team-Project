import React, { useContext } from 'react'
import Advertisement from '../../components/Advertisement'
import Banner from '../../components/Banner'
import IntermediateProducts from '../../components/IntermediateProducts'
import MiniCart from '../../components/MiniCart'
import PopularProducts from '../../components/PopularProducts'
import { dataContext } from '../../contexts/ProductContext'

function Home() {

  return (
    <>
      <Advertisement />
      <MiniCart />
      <PopularProducts />
      <Banner />
      <IntermediateProducts />
    </>
  )
}

export default Home
