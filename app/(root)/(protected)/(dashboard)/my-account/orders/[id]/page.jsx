import { getOrder } from "@/actions/others";
import Link from "next/link";

const SingleOrderPage = async ({ params }) => {
    const { data: { order } } = await getOrder(params?.id);



    return (
        <div className="">
            <div className="flex justify-between">
                <div className="">
                    <p><span className="uppercase font-semibold">Invoice</span>: {order?.invoice}</p>
                    <br />
                    <p className="text-sm font-medium">Invoice to</p>
                    <br />
                    <p>Name</p>
                    <p>{order?.delivery_number}</p>
                    <p>{order?.shipping_address}</p>
                </div>
                <div>
                    <p>Date: {order?.order_date}</p>
                </div>
            </div>
            <div>
                <div className="relative overflow-x-auto pb-5">
                    <table className="w-full text-left rtl:text-right">
                        <thead className="uppercase border-b-2 text-sm font-medium">
                            <tr>
                                <th scope="col" className="px-4 py-3">#</th>
                                <th scope="col" className="px-4 py-3">Product</th>
                                <th scope="col" className="px-4 py-3">Price</th>
                                <th scope="col" className="px-4 py-3">Quantity</th>
                                <th scope="col" className="px-4 py-3">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {
                                order?.order_item?.map((item, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3">{i + 1}</td>
                                        <td className="px-4 py-3">
                                            <Link className="hover:text-primary animate" href={`/products/${item?.product?.slug}`}>{item?.product.title}</Link>
                                        </td>
                                        <td className="px-4 py-3">{parseInt(item?.price).toFixed(2)}</td>
                                        <td className="px-4 py-3">{item?.quantity}</td>
                                        <td className="px-4 py-3">{(parseInt(item?.price) * item?.quantity).toFixed(2)}</td>
                                    </tr>
                                ))
                            }
                            <tr className="border-t text-base font-semibold">
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2">Subtotal</td>
                                <td className="px-4 py-2">
                                    {
                                        order?.order_item.reduce((accumulator, product) => {
                                            return accumulator + (product.price * product.quantity)
                                        }, 0).toFixed(2)
                                    }
                                </td>
                            </tr>
                            <tr className="text-base font-semibold">
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2">Discount</td>
                                <td className="px-4 py-2">{order?.discount}</td>
                            </tr>
                            <tr className="text-base font-semibold">
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2">Delivery Charge</td>
                                <td className="px-4 py-2">{order?.delivery_charge}</td>
                            </tr>
                            <tr className="text-base font-semibold">
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2"></td>
                                <td className="px-4 py-2">Grand Total</td>
                                <td className="px-4 py-2">
                                    {
                                        ((order?.order_item.reduce((accumulator, product) => {
                                            return accumulator + (product.price * product.quantity)
                                        }, 0) - parseFloat(order?.discount)) + parseFloat(order?.delivery_charge)).toFixed(2)
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SingleOrderPage;