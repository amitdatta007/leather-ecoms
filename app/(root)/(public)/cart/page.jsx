'use client';

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowCartProducts from "@/components/cart/page/ShowCartProducts";
import Breadcrumb from "@/components/shared/others/Breadcrumb";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartPage = () => {
    const products = useSelector((state) => state.cart.cart);
    const [isMounted, setIsMounted] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

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
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4]'>
            <Breadcrumb title='Cart Product' />

            {
                products.length ? (
                    <div className="wrapper flex flex-col md:flex-row py-20 gap-6">
                        <div className="w-full md:w-[70%] overflow-x-auto">
                            <div className="relative overflow-x-auto pb-5">
                                <table className="w-full text-left rtl:text-right border-b">
                                    <thead className="uppercase border-b-2 font-semibold">
                                        <tr>
                                            <th scope="col" className="px-4 py-3 min-w-40">Product</th>
                                            <th scope="col" className="px-4 py-3">PRICE</th>
                                            <th scope="col" className="px-4 py-3">QUANTITY</th>
                                            <th scope="col" className="px-4 py-3">SUBTOTAL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product, i) => (
                                            <ShowCartProducts key={i} product={product} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="w-full md:w-[30%] border-2 p-4">
                            <h3 className="text-xl uppercase font-semibold">Cart totals</h3>
                            <div className="flex flex-col mt-6">
                                <div className="flex justify-between items-center py-4 border-b">
                                    <p className="font-semibold">Subtotal</p>
                                    <p className="text-text-muted-50">{totalPrice.toFixed(2)}৳</p>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b">
                                    <p className="font-semibold">Shipping Cost</p>
                                    <p className="text-text-muted-50">120.00৳</p>
                                </div>
                                <div className="flex justify-between items-center py-4">
                                    <p className="font-semibold">Total</p>
                                    <p className="text-lg font-semibold text-primary">{(totalPrice + 120).toFixed(2)}</p>
                                </div>

                                <Link
                                    href='/checkout'
                                    className="bg-primary hover:bg-primary-muted h-[42px] px-5 text-white text-sm font-semibold mt-4 grid place-content-center" 
                                >
                                    PROCEED TO CHECKOUT
                                </Link>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="wrapper flex flex-col justify-center gap-4 items-center py-40 max-w-[680px]">
                        <ShoppingCart size={80} strokeWidth={1.5} className="text-paragraph" />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Your cart is currently empty.</h2>
                        <p className="text-paragraph text-center px-10">Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our &quot;Products&quot; page.</p>
                        <Link href='/products' className="bg-primary hover:bg-primary-muted py-3.5 px-7 text-white text-sm font-semibold">RETURN TO Products</Link>
                    </div>
                )
            }
        </main>
    );
};

export default CartPage;
