import Image from 'next/image';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { decressQuantity, incressQuantity, removeFromCart } from '@/lib/app/features/cart/cartSlice';
import Link from 'next/link';
import getImageUrl from '@/utils/getImageUrl';

const ShowCartProducts = ({ product }) => {
    const dispatch = useDispatch();



    const incressQ = () => {
        dispatch(incressQuantity(product))
    }

    const decressQ = () => {
        dispatch(decressQuantity(product))
    }

    return (
        <tr>
            <td scope="col" className="px-4 py-3 min-w-40">
                <div className='flex items-center gap-4'>
                    <button className='p-2' onClick={() => dispatch(removeFromCart(product))}>
                        <X strokeWidth={1.5} size={20} />
                    </button>
                    <Image alt='' src={getImageUrl(product?.img[0])} width={80} height={80} className='w-20 h-20' />
                    <Link href={`/products/${product?.slug}`} className='font-medium'>{product?.title}৳</Link>
                </div>
            </td>
            <td scope="col" className="px-4 py-3 text-paragraph">
                {product?.final_price ? product?.final_price : product?.price}
            </td>
            <td scope="col" className="px-4 py-3">
                <div className='h-[42px] w-fit flex items-start border overflow-hidden'>
                    <button
                        className='text-2xl h-full w-7 flex justify-center items-center leading-none border-r hover:bg-primary hover:text-white'
                        onClick={decressQ}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        className='w-8 h-full bg-transparent rounded focus:outline-none text-center font-semibold leading-normal'
                        value={product?.quantity}
                        disabled
                    />
                    <button
                        className='text-2xl h-full w-7 flex justify-center items-center leading-none border-l hover:bg-primary hover:text-white'
                        onClick={incressQ}
                    >
                        +
                    </button>
                </div>
            </td>
            <td scope="col" className="px-4 py-3 font-semibold text-primary">
                {product?.final_price ? (product?.final_price * product?.quantity).toFixed(2) : (product?.price * product?.price).toFixed(2)}৳
            </td>
        </tr>
    );
};

export default ShowCartProducts;