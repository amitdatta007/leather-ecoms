import { makeOrder } from "@/actions/products";
import { clearCart } from "@/lib/app/features/cart/cartSlice";
import { Tag } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const CartTotals = ({ products, orderInfo, errors, setErrors, setCustomerInfo }) => {
    const dispatch = useDispatch();
    const { push } = useRouter();

    const handleCheckout = async () => {
        const error = {};
        setErrors({})

        if (!orderInfo?.customerName) error['customerName'] = "Please enter customer name!";
        if (!orderInfo?.phoneNumber) error['phoneNumber'] = "Please enter phone number!";
        if (!orderInfo?.deliveryAddress) error['deliveryAddress'] = "Please enter delivery address!";
        if (!orderInfo?.deliveryAreaId) error['deliveryAreaId'] = "Please select delivery area!";

        if (error?.customerName || error?.phoneNumber || error?.deliveryAddress || error?.deliveryAreaId) {
            setErrors(error);
            return;
        }

        if (!products?.length) {
            toast.error("Product Not Found!");
            return;
        }


        const res = await makeOrder({
            order_info: orderInfo,
            products: products
        });

        if (res?.status === 'success') {
            setCustomerInfo({})
            setErrors({})
            dispatch(clearCart());
            push(`/order-complete?order_id=${res?.order_id}`);
        } else {
            toast.error(res?.message)
        }
    }

    return (
        <section className="lg:col-span-3">
            <div className="flex items-center justify-between border-b border-border py-2">
                <div className="flex items-center gap-2">
                    <p className="font-medium md:text-lg">Total</p>
                </div>
            </div>


            <div className="mt-2 flex flex-col gap-4 lg:pl-6">
                <div className="flex justify-between text-sm">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-medium">700.00 Tk</p>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <div className="flex justify-between">
                        <p className="font-medium">Shipping Cost</p>
                        <p className="font-medium">60.00 TK</p>
                    </div>
                    <div className="flex justify-end text-sm">
                        <p>Shipping to <span className="font-medium">Dhaka</span></p>
                    </div>
                </div>
                <div className="flex justify-between text-sm border-t border-border pt-1">
                    <p className="font-medium">Total</p>
                    <p className="font-medium">760.00 TK</p>
                </div>
            </div>

            <div className="flex flex-col gap-1 lg:pl-6 mt-6">
                <p className="font-medium">Payment Method</p>
                <div className="flex items-center gap-2">
                    <input type="radio" checked readOnly />
                    <p className="text-sm">Cash On Delivery</p>
                </div>
            </div>



            <label htmlFor="coupon" className="lg:pl-6 mt-6 flex gap-2 items-center text-muted font-medium">
                <Tag className="mt-1 w-5 h-5" />
                <p>Coupon</p>
            </label>
            <div className="lg:pl-6 mt-2 flex gap-2 items-center">
                <input
                    type="text"
                    id="coupon"
                    className="border border-border py-2 px-4 rounded text-sm outline-none focus:border-primary w-full"
                    placeholder="Coupon Code"
                />
                <button className="border border-primary bg-primary text-white font-medium uppercase py-2 px-4 rounded text-sm">Apply</button>
            </div>
            <button onClick={handleCheckout} href='' className="lg:ml-6 mt-4 grid place-items-center w-full border border-primary bg-primary text-white font-medium uppercase py-2.5 px-4 rounded text-sm">Proceed To Checkout</button>

        </section>
    );
};

export default CartTotals;