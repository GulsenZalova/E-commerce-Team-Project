import { createContext, useContext, useState, useEffect } from "react";
import { network, BASE_URL } from "../api/axiosinstance";
export const dataContext = createContext(null)
export const ProductContext = ({ children }) => {

    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});
    const [favorites,setFavorites]=useState([])
    useEffect(() => {
        network.getAll(BASE_URL)
            .then(res => setData(res))
    }, [])

    useEffect(() => {
        network.getCategories(BASE_URL, "categories")
            .then(res => {
                setCategories(res);
            })
    }, [])


    const values = {
        data,
        setData,
        categories,
        setCategories,
        favorites,
        setFavorites
    }
    return <dataContext.Provider value={values}>{children}</dataContext.Provider>
}