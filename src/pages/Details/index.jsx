import Tabs from "../../components/ReviewTabs";
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL, network } from '../../api/axiosinstance';
import ProductDetail from '../../components/ProductDetail'
import RelatedProducts from "../../components/RelatedProducts";
import { dataContext } from "../../contexts/ProductContext";

function Details() {

  const [productDetail, setProductDetail] = useState({});
  const param = useParams();

  useEffect(() => {
    network.getById(BASE_URL, param.id)
      .then((res) => setProductDetail(res));
  }, [param.id]);



  return (
    <>
      <ProductDetail  productDetail={productDetail} />
      <Tabs />
      <RelatedProducts productDetail={productDetail}  />
    </>
  )
}

export default Details
