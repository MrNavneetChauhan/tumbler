import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({children})=>{
    const [productDetails,setProductDetails] = useState([])

    function selectedProductDetails(item){
            setProductDetails(item)
    }

    return <ProductContext.Provider value ={{productDetails,selectedProductDetails}} >{children}</ProductContext.Provider>
}