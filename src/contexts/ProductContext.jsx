import { createContext, useContext, useState, useEffect } from "react";
import { network,BASE_URL } from "../api/axiosinstance";

export const dataContext = createContext(null)
export const ProductContext = ({ children }) => {
   
    const [data, setData] = useState([]);
    const [categoires,setCategories] = useState([]);
    const [singleProduct,setSingleProduct] = useState({});

    useEffect(()=>{
        network.getAll(BASE_URL)
        .then(res=>setData(res))
    },[])

    useEffect(()=>{
        network.getCategories(BASE_URL,"categories")
        .then(res=>setCategories(res))
    },[])


//     useEffect(()=>{
// network.getById(BASE_URL/)
//     },[singleProduct])

    console.log(categoires)


    const values = {
        data,
        setData,
        categoires,
        setCategories
    }
    return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}