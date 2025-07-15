import { getProfile } from "@/actions/others";
import { auth } from "@/lib/auth";
import Link from "next/link";

const OrdersPage = async () => {
    const session = await auth();

    const profile = await getProfile(session?.user?.id);
    const orders = profile?.user?.order;



    return (
        <div>
            <div className="relative overflow-x-auto pb-5">
                <table className="w-full text-left rtl:text-right border-b">
                    <thead className="uppercase border-b-2 font-semibold">
                        <tr>
                            <th scope="col" className="px-4 py-3">#</th>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3">Invoice</th>
                            <th scope="col" className="px-4 py-3">Total</th>
                            <th scope="col" className="px-4 py-3">Delivery Status</th>
                            <th scope="col" className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, i) => (
                                <tr key={order}>
                                    <td scope="col" className="px-4 py-3">{i + 1}</td>
                                    <td scope="col" className="px-4 py-3">{order?.order_date}</td>
                                    <td scope="col" className="px-4 py-3">{order?.invoice}</td>
                                    <td scope="col" className="px-4 py-3">{parseInt(order?.total_amount) + parseInt(order?.delivery_charge)}</td>
                                    <td scope="col" className="px-4 py-3">
                                        {
                                            order?.status == 0 && "Pending"
                                        }
                                        {
                                            order?.status == 1 && "Canceled"
                                        }
                                        {
                                            order?.status == 2 && "Confirmed"
                                        }
                                        {
                                            order?.status == 3 && "Send To Courier"
                                        }
                                        {
                                            order?.status == 4 && "Completed"
                                        }
                                    </td>
                                    <td scope="col" className="px-4 py-3">
                                        <Link href={`/my-account/orders/${order?.id}`} className="text-sm bg-primary text-white py-2 px-4 font-medium">View Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrdersPage;