import React, { useEffect, useState } from 'react'
import { BASE_URL, network } from '../api/axiosinstance';

function useLimitedProducts(num) {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        network.getLimitedProducts(BASE_URL, num)
            .then(res => setProduct(res));
    }, [])

    return { product }
}


export default useLimitedProducts