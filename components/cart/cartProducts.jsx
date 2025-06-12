import Link from "next/link";
import CartItem from "./cartItem";
import { ArrowRight } from "lucide-react";
// import { FaArrowLeft } from "react-icons/fa6";

const CartProducts = ({ products }) => {

    return (
        <section className="border lg:col-span-5 border-border">
            <div className="flex items-center justify-between border-b-2 border-border px-4 py-2">
                <div className="flex items-center gap-2">
                    <p className="font-medium text-lg">Products ({products.length})</p>
                </div>
                <Link href='/products' className="flex items-center gap-2 text-sm animate hover:text-primary">
                    <span className="font-medium ">Continue Shoping</span>
                    <ArrowRight className="w-5 h-5 mt-1" />
                </Link>
            </div>
            <div className="mt-4 mb-1 px-4 flex flex-col gap-6">
                {
                    products?.map((product, i) => <CartItem key={i} product={product} />)
                }
            </div>
        </section>
    );
};

export default CartProducts;