"use client"

import { useScrollLock } from "@/hooks/useScrollLock";
import { ShoppingBag, ShoppingCart, X } from "lucide-react";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, openCart, removeFromCart } from "@/lib/app/features/cart/cartSlice";
import Image from "next/image";
import productImg from "@/assets/product.webp"
import getImageUrl from "@/utils/getImageUrl";


const Cart = ({ children }) => {
    const products = useSelector((state) => state.cart.cart);
    const { isOpen } = useSelector((state) => state.cart);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const [isMounted, setIsMounted] = useState(false);



    useEffect(() => {
        const sum = products.reduce((accumulator, product) => {
            return accumulator + ((product.sell_price ? product.sell_price : product.price) * [product.quantity])
        }, 0);
        setTotalPrice(sum);
    }, [products])

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {children}
            

            <div
                className={`fixed h-full w-full bg-[rgba(0,0,0,0.7)] top-0 left-0 z-30 animate ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                onClick={() => dispatch(closeCart())}
            />

            <div className={`fixed w-full max-w-[320px] h-full bg-white z-50 top-0 animate flex flex-col py-2 ${isOpen ? 'right-0' : '-right-[320px]'}`}>

                <div className="flex items-center justify-between px-4 py-3 border-b">
                    <div className="flex items-center gap-2">
                        <p className="font-semibold text-lg">Shopping Cart</p>
                    </div>
                    <button className="flex items-center gap-1" onClick={() => dispatch(closeCart())}>
                        <X size={20} strokeWidth={1.5} />
                        <span className="text-sm">Close</span>
                    </button>
                </div>




                {
                    products.length ? (
                        <>
                            <div className="flex flex-col gap-2 mt-2 flex-grow px-4">
                                {
                                    products?.map((product, i) => (
                                        <div key={i} className="flex gap-4 py-2 border-b">
                                            <Image alt="" src={getImageUrl(product?.img[0])} width={80} height={80} className="w-20 h-20" />
                                            <div className="flex-grow flex justify-between gap-2">
                                                <div className="flex-grow flex gap-2 flex-col">
                                                    <Link href={`/products/${product?.slug}`} className="text-sm text-paragraph">{product?.title}</Link>
                                                    <p className="text-sm font-semibold"><span className="text-text-muted-50">{product?.quantity} x </span> <span className="text-primary">{product?.sell_price ? product?.sell_price : product?.price}</span></p>
                                                </div>
                                                <div className="">
                                                    <button className="p-1" onClick={() => dispatch(removeFromCart(product))}>
                                                        <X size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className="px-4 pb-2 pt-3 border-t border-border flex flex-col gap-2">
                                <div className="flex justify-between text-xl font-semibold py-2">
                                    <p>Subtotal:</p>
                                    <p className="text-primary">{totalPrice.toFixed(2)}৳</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link href='/cart' className="bg-text-muted-25 hover:bg-text-muted-50 py-3 px-5 text-sm font-medium grid place-content-center" onClick={() => dispatch(closeCart())}>VIEW CART</Link>
                                    <Link href='/checkout' className="bg-primary hover:bg-primary-muted py-3 px-5 text-white text-sm font-medium grid place-content-center">CHECKOUT</Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col justify-center gap-4 items-center py-20">
                            <ShoppingCart size={80} strokeWidth={1.5} className="text-paragraph" />
                            <h2 className="text-lg sm:text-xl font-semibold text-center">No Products in the Cart.</h2>
                            <Link href='/products' className="bg-primary hover:bg-primary-muted py-3 px-5 text-white text-sm font-semibold">RETURN TO PRODUCTS</Link>
                        </div>
                    )
                }




                {/* <div className="mt-5 flex-grow relative">
                    <div className="absolute h-full w-full flex flex-col gap-6 px-4 overflow-y-auto">
                        {
                            products?.map((product, i) => <CartProduct key={i} product={product} />)
                        }
                    </div>
                </div> */}

            </div>
        </>
    );
};

export default Cart;