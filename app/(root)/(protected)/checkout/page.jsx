"use client"

import { checkCoupon } from "@/actions/others";
import { makeOrder } from "@/actions/products";
import { clearCart } from "@/lib/app/features/cart/cartSlice";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CheckoutPage = () => {
    const products = useSelector((state) => state.cart.cart);
    const [couponCode, setCouponCode] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isCouponApplied, setIsCouponApplied] = useState(false)
    const [discount, setDiscount] = useState(0);

    const { data: session, status } = useSession();
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const sum = products.reduce((accumulator, product) => {
            return accumulator + ((product.final_price ? product.final_price : product.price) * [product.quantity])
        }, 0);
        setTotalPrice(sum);
    }, [products])

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    const handleOrder = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const orderProducts = products.map((product) => {
            return {
                product_id: product.id,
                quantity: product.quantity,
            }
        });

        const orderInfo = {
            customerName: name,
            phoneNumber: phone,
            deliveryAddress: address,
            email: null,
            deliveryAreaId: 1,  
        }


        if (!products?.length) {
            toast.error('No product found to order!')
            return
        }



        const res = await makeOrder({
            user_id: session?.user?.id,
            coupon_code: couponCode,
            order_info: orderInfo,
            products: orderProducts
        });


        if (res?.status === "success") {
            dispatch(clearCart());
            // push(`/order-complete?order_id=${res?.order_id}`);
            toast.success(res?.message)
            router.push('/')
        } else {
            toast.error(res?.message)
        }
        
        
    }

    const applyCoupon = () => {
        checkCoupon(totalPrice, couponCode).then((res) => {


            if(res?.success){
                toast.success('Coupon Successfully Applied')
                setIsCouponApplied(true)
                setDiscount(parseFloat(res?.data?.amount))
            } else {
                toast.error(res?.message)
            }
        })
    }

    const clearCoupon = () => {
        setCouponCode('');
        setIsCouponApplied(false);
        setDiscount(0)
    }
    


    return (
        <main className=" mt-[72px] lg:mt-[150px] bg-[#FFFCF4] py-10">
            <form className="wrapper flex flex-col md:flex-row gap-10" onSubmit={handleOrder}>
                <div className="w-full">
                    <h3 className="text-2xl font-semibold uppercase">Billing details</h3>
                    <div className="mt-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm">Full Name <span className="text-red-500">*</span></label>
                            <input type="text" id="name" className="border-2 focus:outline-none bg-transparent py-2 px-4" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="text-sm">Phone <span className="text-red-500">*</span></label>
                            <input type="number" id="phone" className="border-2 focus:outline-none bg-transparent py-2 px-4" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="address" className="text-sm">Full Address <span className="text-red-500">*</span></label>
                            <input type="text" id="address" className="border-2 focus:outline-none bg-transparent py-2 px-4" required />
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-[#F7F7F7] p-6">
                    <h3 className="text-center font-semibold text-2xl uppercase">Your order</h3>

                    <div className="bg-white w-full h-full p-6 mt-4">
                        <div className="flex justify-between items-center pb-4 border-b-2">
                            <p className="font-semibold uppercase">Products</p>
                            <p className="font-semibold uppercase">Subtotal</p>
                        </div>
                        <div className="border-b-2">
                            {products.map((product, i) => (
                                <div key={i} className="py-3 flex justify-between items-center gap-20">
                                    <p className="text-sm text-text-muted-50">{product?.title} x {product?.quantity}</p>
                                    <p className="text-sm text-text-muted-50">{product?.final_price ? (product?.final_price * product?.quantity).toFixed(2) : (product?.price * product?.price).toFixed(2)}৳</p>
                                </div>
                            ))}
                        </div>
                        <div className="py-3 flex justify-between items-center text-sm font-semibold border-b-2">
                            <p className="">Subtotal</p>
                            <p className="text-primary">{totalPrice.toFixed(2)}৳</p>
                        </div>
                        <div className="py-3 flex justify-between items-center text-sm font-semibold border-b-2">
                            <p className="">Discount</p>
                            <p className="text-primary">- {discount.toFixed(2)}৳</p>
                        </div>
                        <div className="py-3 flex justify-between items-center text-sm font-semibold border-b-2">
                            <p className="">Shipping</p>
                            <p className="text-primary">120.00৳</p>
                        </div>
                        <div className="pt-3 flex justify-between items-center text-sm font-semibold ">
                            <p className="">Total</p>
                            <p className="text-primary text-lg">{((totalPrice - discount) + 120).toFixed(2)}৳</p>
                        </div>
                    </div>
                    <div className="bg-white w-full h-full p-6 mt-4">
                        <div className='w-full'>
                            <label htmlFor="coupon">Enter Coupon Code</label>
                            <div className='w-full flex gap-4'>
                                <input id='coupon' type="text" className='border-2 bg-transparent py-2 px-4 w-full focus:outline-none' onKeyUp={(e) => setCouponCode(e.target.value)} disabled={isCouponApplied} />
                                

                                {
                                    isCouponApplied ? <button type="button" className=" bg-red-600 px-6 text-white font-semibold uppercase animate hover:bg-red-800" onClick={clearCoupon}>Cancel</button> : <button type="button" className=" bg-primary px-6 text-white font-semibold uppercase animate hover:bg-primary-muted" onClick={applyCoupon}>Apply</button>
                                }

                            </div>
                        </div>


                        <button type="submit" className="w-full mt-6 uppercase bg-primary hover:bg-primary-muted py-3.5 px-7 text-white text-sm font-semibold">Place Order</button>
                    </div>

                </div>
            </form>
        </main>
    );
};

export default CheckoutPage;