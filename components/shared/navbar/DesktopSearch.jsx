"use client"

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";
// import dynamic from "next/dynamic";
import { searchProduct } from "@/actions/products";
import Image from "next/image";
import getImageUrl from "@/utils/getImageUrl";
import { useRouter } from "next/navigation";


const DesktopSearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const inputRef = useRef();
    const router = useRouter();


    const handleSearch = (e) => {
        const search = e.target.value.trim();
        setSearchQuery(search);
    };

    useEffect(() => {


        if (searchQuery?.length) {
            searchProduct({
                search: searchQuery,
                limit: 12
            }).then((res) => {
                if (res?.status === 'success') {
                    setProducts(res?.data)
                } else {
                    setProducts([])
                }
            })
        } else {
            setProducts([])
        }
    }, [searchQuery]);

    const clearSearch = () => {
        inputRef.current.value = '';
        setSearchQuery('')
    }

    const goToSearchResult = () => {
        const url = `/products?search=${searchQuery}`;
        clearSearch();
        router.push(url)
    }







    return (
        <div className="w-3/6 hidden lg:block relative">
            <div className="border flex h-[46px] px-5 gap-3 items-center justify-between rounded-full">
                <input type="text" ref={inputRef} placeholder="Search" className="focus:outline-none text-sm w-full" onKeyUp={handleSearch} />
                <div className="flex gap-3 ">
                    {
                        !!searchQuery?.length && <>
                            <button onClick={clearSearch}>
                                <X className="text-text-muted-50" strokeWidth={1.5} size={24} />
                            </button>
                            <div className="w-px bg-text-muted-25"></div>
                        </>
                    }
                    <button onClick={goToSearchResult}>
                        <Search className="text-text-muted-50" strokeWidth={1.5} size={24} />
                    </button>
                </div>
            </div>


            {
                (!!searchQuery?.length && !!products?.length) && <div className="absolute w-full bg-white shadow h-fit max-h-80 z-20 top-[calc(100%_+_12px)] grid grid-cols-2 overflow-y-auto ">
                    {products?.map((product, i) => (
                        <div key={i} className="p-4 flex gap-4 hover:bg-text-muted-25 border h-fit">
                            <Image alt="" className="w-20 aspect-[4/5]" src={getImageUrl(product?.img[0])} width={400} height={500} />
                            <div className="flex flex-col gap-2">
                                <Link className="text-sm font-medium leading-none" href={`/products/${product?.slug}`}
                                    onClick={() => setSearchQuery('ya')}
                                >{product?.title}</Link>
                                <div className='flex justify-center items-center gap-2'>
                                    {
                                        product?.final_price && <p className='text-sm text-text-muted-50 line-through'>{product?.price}৳</p>
                                    }

                                    <p className='text-xs font-semibold text-primary'>{product?.final_price ? product?.final_price : product?.price}৳</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }

            {
                (!!searchQuery?.length && !products?.length) && <div className="absolute w-full bg-white shadow h-fit max-h-80 z-20 top-[calc(100%_+_12px)] overflow-y-auto p-4">
                    No Products Found!
                </div>
            }




        </div>
    );
};

export default DesktopSearch;