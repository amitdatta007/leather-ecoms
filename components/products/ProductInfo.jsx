"use client"

import { makeWishlist } from "@/actions/products";
import { addToCart, clearCart, openCart } from "@/lib/app/features/cart/cartSlice";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter  } from "react-icons/fa6";

const ProductInfo = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    // const [selectedSize, setSelectedSize] = useState(null);
    // const [maxStock, setMaxStock] = useState(product?.product_stock | 100);
    const [quantityError, setQuantityError] = useState(null);
    const inputRef = useRef();
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart.cart);
    const [cartProduct, setCartProduct] = useState(null);
    const router = useRouter();
    const { data: session, status } = useSession();


    const handleQuantityInput = (e) => {
        setQuantityError(null);
        const quantity = parseInt(e.target.value);
        setQuantity(quantity)
    }

    const incressQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        inputRef.current.value = quantity + 1;
    }

    const decressQuantity = () => {
        if (quantity > 0) {
            setQuantity((prevQuantity) => prevQuantity - 1);
            inputRef.current.value = quantity - 1;
        }
    }

    const handleWishlist = () => {
        const data = {
            customer_id: session?.user?.id,
            product_id: product?.id
        }

        makeWishlist(data).then((res) => {


            if(res.status === "success"){
                toast.success(res.message)
            } else{
                toast.error(res.message)
            }
        })
    }




    const handleAddToCart = () => {
        setQuantityError(null);

        if (!product?.id) {
            toast.error('Product Not Found!');
            return;
        }


        if (!quantity) {
            toast.error('Enter Quantity!');
            return;
        }


        dispatch(addToCart({
            ...product,
            quantity: quantity,
        }));
        dispatch(openCart());
    }

    const handleOrder = () => {
        setQuantityError(null);

        if (!product.id) {
            toast.error('Product Not Found!');
            return;
        }

        dispatch(addToCart({
            ...product,
            quantity: quantity | 1,
        }));
        router.push('/checkout');
    }

    return (
        <section className="w-full lg:w-[50%]">

            <div className="flex flex-col items-start gap-4 pb-2 border-border">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">{product?.title}</h2>

                <div className="flex items-center gap-2">
                    {
                        product?.final_price && <span className='text-xl text-paragraph leading-tight line-through'>{product?.price}৳</span>
                    }
                    <span className="text-2xl text-primary font-semibold leading-tight">{product?.final_price ? product?.final_price : product?.price}৳</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: product?.short_description }}></div>
            </div>

            <div className="pt-6 pb-8 border-b border-border flex flex-col gap-5">

                <div className="flex gap-8 items-center">

                    <div className="relative flex items-center flex-wrap gap-4">
                        <div className='h-[42px] flex border overflow-hidden'>
                            <button
                                className='text-2xl h-full w-7 flex justify-center items-center leading-none border-r hover:bg-primary hover:text-white'
                                onClick={decressQuantity}
                            >
                                -
                            </button>
                            <input
                                ref={inputRef}
                                type="number"
                                className='w-8 h-full flex-1  rounded focus:outline-none text-center font-semibold leading-normal'
                                defaultValue={quantity}
                                onChange={(e) => handleQuantityInput(e)}
                            />
                            <button
                                className='text-2xl h-full w-7 flex justify-center items-center leading-none border-l hover:bg-primary hover:text-white'
                                onClick={incressQuantity}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="bg-primary hover:bg-primary-muted h-[42px] px-5 text-white text-sm font-semibold"
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </button>
                        <button
                            className="bg-primary hover:bg-primary-muted h-[42px] px-5 text-white text-sm font-semibold"
                            onClick={handleOrder}
                        >
                            BUY NOW
                        </button>
                    </div>
                </div>

                <button className="flex items-center gap-2 animate hover:text-text-muted-50" onClick={handleWishlist}>
                    <Heart size={20} />
                    <span className="text-sm font-semibold">Add to Wishlist</span>
                </button>
            </div>
        </section>
    );
};

export default ProductInfo;