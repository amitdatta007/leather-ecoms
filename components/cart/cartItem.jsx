"use client"

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
// import getImageUrl from "@/utils/getImageUrl";
import { useDispatch } from "react-redux";
import { decressQuantity, incressQuantity, removeFromCart } from "@/lib/app/features/cart/cartSlice";

const CartItem = ({ product }) => {
    const [quantity, setQuantity] = useState(0);

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

    return (
        <div className="w-full flex gap-2 sm:gap-3 lg:gap-4 border-b border-border pb-3 card_item">
            <div className="h-[72px] sm:h-20 md:h-24 aspect-[9/10]">
                {/* <Image src={getImageUrl(product?.img)} width={96} height={96} alt="" className="h-full w-full object-cover" /> */}
            </div>
            <div className="flex-grow relative">
                <div className="absolute w-full h-full flex flex-col justify-between">
                    <div>
                        <Link href={`/products/${product?.slug}`} className="text-sm md:text-base line-clamp-1 animate hover:text-primary">{product?.name}</Link>
                        <p className="text-xs sm:text-sm">Size - <span className="font-medium">{product?.variant}</span></p>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm font-semibold text-muted">TK {product?.price} x {product?.quantity}</p>
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                            <div className="border border-border rounded flex items-center gap-1">
                                <button className="p-1.5 text-muted animate hover:text-black" onClick={handleDecress}>
                                    <Minus className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                                </button>
                                <input type="number" className="w-6 outline-none text-center text-xs md:text-sm font-semibold text-muted" value={product?.quantity} readOnly />
                                <button className="p-1.5 text-muted animate hover:text-black" onClick={handleIncress}>
                                    <Plus className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                                </button>
                            </div>
                            <button className="p-0.5 animate hover:text-red-500" onClick={handleDelete}>
                                <Trash2 className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;