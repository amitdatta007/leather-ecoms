"use client"

import { makeOrder } from "@/actions/products";
import { clearCart } from "@/lib/app/features/cart/cartSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CheckoutPage = () => {
    const products = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleOrder = async(e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        const orderProducts = products.map((product) => {
            return {
                product_id: product.id,
                quantity: product.quantity,
                variant_id: 1
            }
        });

        const orderInfo = {
            customerName: name,
            phoneNumber: phone,
            deliveryAddress: address,
            email: null,
            deliveryAreaId: 1
        }


        if(!products?.length){
            toast.error('No product found to order!')
            return
        }


        const res = await makeOrder({
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
                <div className="w-full bg-[#F7F7F7] p-6">
                    <div className="bg-white w-full h-full">


                        <button type="submit">Submit</button>

                    </div>
                </div>
            </form>
        </main>
    );
};

export default CheckoutPage;