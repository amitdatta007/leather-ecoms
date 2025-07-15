"use client"

import Image from 'next/image';
import productImg from '@/assets/product.webp';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/utils/utils';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, openCart } from '@/lib/app/features/cart/cartSlice';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import getImageUrl from '@/utils/getImageUrl';

const ProductCard = ({ className, product }) => {
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        dispatch(openCart());

    }


    return (
        <div className={cn('flex flex-col gap-4 pb-4', className)}>
            <div className='w-full overflow-hidden'>
                {
                    product?.img?.[0] &&
                    <Image alt='' className='transition-all duration-300 ease-out hover:scale-110 aspect-[4/5]' src={getImageUrl(product?.img[0])} width={400} height={500} />
                }
            </div>
            <div className='flex flex-col gap-3 items-center'>
                <Link href={`/products/${product?.slug}`} className='text-center line-clamp-2 text-sm text-text-muted-100 hover:text-paragraph'>{product?.title}</Link>
                <div className='flex justify-center items-center gap-2'>
                    {
                        product?.final_price && <p className='text-sm text-text-muted-50 line-through'>{parseFloat(product?.price).toFixed(2)}৳</p>
                    }

                    <p className='font-semibold text-primary'>{product?.final_price ? parseFloat(product?.final_price).toFixed(2) : parseFloat(product?.price).toFixed(2)}৳</p>
                </div>

                <button
                    className="bg-primary py-1.5 px-3.5 relative group overflow-hidden hover:bg-primary-muted text-white text-[13px] font-semibold"
                    onClick={addProductToCart}
                >
                    <div className="relative overflow-hidden py-1">
                        <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">ADD TO CART</p>
                        <p className="absolute top-10 left-1/2 -translate-x-1/2 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                            <ShoppingCart size={24} />
                        </p>
                    </div>
                </button>

            </div>
        </div>
    );
};

export default ProductCard;