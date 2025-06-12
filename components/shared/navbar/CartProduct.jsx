"use client"

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import getImageUrl from "@/utils/getImageUrl";
import { useDispatch } from "react-redux";
import { decressQuantity, incressQuantity, removeFromCart } from "@/lib/app/features/cart/cartSlice";

const CartProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(product.quantity);
    const dispatch = useDispatch();

    const handleIncress = () => {
        dispatch(incressQuantity({
            product_id: product?.product_id,
            variant_id: product?.variant_id
        }));
    }

    const handleDecress = () => {
        dispatch(decressQuantity({
            product_id: product?.product_id,
            variant_id: product?.variant_id
        }))
    }

    const handleDelete = () => {
        dispatch(removeFromCart({
            product_id: product?.product_id,
            variant_id: product?.variant_id
        }))
    }


    useEffect(() => {
        setQuantity(product.quantity);
    }, [product])


    return (
        <div className="w-full flex gap-2 border-b border-border pb-3">
            <div className="w-[72px] h-[72px] aspect-square">
                {/* <Image src={getImageUrl(product?.img)} width={72} height={72} alt="" className="h-full w-full object-cover" /> */}
            </div>
            <div className="flex-grow relative">
                <div className="absolute w-full h-full flex flex-col justify-between">
                    <Link href={`/products/${product?.slug}`} className="text-sm leading-4 line-clamp-2 block animate hover:text-primary">{product?.name} - <span className="text-xs font-medium">{product?.variant}</span></Link>
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-xs font-semibold">৳ {product?.price * product?.quantity}</p>
                        <div className="flex items-center gap-2">
                            <div className="border border-border rounded flex items-center gap-1">
                                <button className="p-1.5 text-muted animate hover:text-black" onClick={handleDecress}>
                                    <Minus height={18} width={18} />
                                </button>
                                <input type="number" className="w-6 outline-none text-center text-xs font-semibold text-muted" value={quantity} readOnly />
                                <button className="p-1.5 text-muted animate hover:text-black" onClick={handleIncress}>
                                    <Plus height={18} width={18} />
                                </button>
                            </div>
                            <button className="p-0.5 animate hover:text-red-500" onClick={handleDelete}>
                                <Trash2 height={18} width={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;