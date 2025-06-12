"use client"

import { useEffect } from "react";
import { useSelector } from "react-redux";

const LocalStorage = ({children}) => {
    const products = useSelector((state) => state.cart.cart);

    useEffect(() => {
        if(products.length){
            localStorage.setItem('cart', JSON.stringify(products))
        } else{
            localStorage.removeItem('cart')
        }

    }, [products])

    return (
        <>
            {children}
        </>
    );
};

export default LocalStorage;