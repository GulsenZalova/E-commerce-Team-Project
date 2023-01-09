import React, { useContext } from 'react'
import Advertisement from '../../components/Advertisement'
import Banner from '../../components/Banner'
import Companies from '../../components/Companies'
import Guarantee from '../../components/Guarantee'
import IntermediateProducts from '../../components/IntermediateProducts'
import MiniCart from '../../components/MiniCart'
import News from '../../components/News'
import PopularProducts from '../../components/PopularProducts'
import Reviews from '../../components/Reviews'
function Home() {

  return (
    <>
      <Advertisement />
      <MiniCart />
      <PopularProducts />
      <Banner />
      <IntermediateProducts />
      <Guarantee />
      <Reviews />
      <Companies />
      <News />
    </>
  )
}

export default Home
