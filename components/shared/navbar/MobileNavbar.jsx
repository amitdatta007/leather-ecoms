"use client"

import Image from "next/image";
import Link from "next/link";
import { AlignJustify, Heart, Search, User, X } from "lucide-react";
import MobileDropdown from "./MobileDropdown";
import getImageUrl from "@/utils/getImageUrl";
import { useEffect, useRef, useState } from "react";
import { searchProduct } from "@/actions/products";
import { cn } from "@/utils/utils";
import NavLink from "./NavLink";
import { useRouter } from "next/navigation";



const MobileSideBar = ({ isOpen, setIsOpen, logo, categories }) => {
    const [tabIndex, setTabIndex] = useState(0);
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
        setIsOpen(false)
        const url = `/products?search=${searchQuery}`;
        clearSearch();
        router.push(url)
    }


    return (
        <div className="lg:hidden flex items-center">
            <button className="flex gap-1 items-center" onClick={() => setIsOpen((state) => !state)}>
                <AlignJustify size={24} />
                <span className="text-sm">Menu</span>
            </button>
            <div
                className={`fixed h-full w-full bg-[rgba(0,0,0,0.7)] top-0 left-0 z-30 animate ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
                onClick={() => setIsOpen((state) => !state)}
            />


            <div className={`fixed w-full max-w-80 h-full overflow-y-auto bg-white z-50 top-0 animate flex flex-col px-4 pt-4 ${isOpen ? 'left-0' : '-left-80'}`}>



                <div className="flex flex-col gap-4">
                    <div className="flex justify-between gap-2 py-2 px-4 border rounded-full">
                        <input ref={inputRef} type="text" className="w-full focus:outline-none" placeholder="Search" onKeyUp={handleSearch} />
                        <Search strokeWidth={1.5} size={24} className="" onClick={goToSearchResult} />
                    </div>
                    {
                        (!!searchQuery?.length && !!products?.length) && <div className="w-full bg-white shadow h-fit max-h-80 z-20 top-[calc(100%_+_12px)] grid grid-cols-1 overflow-y-auto ">
                            {products?.map((product, i) => (
                                <div key={i} className="py-2 flex gap-4 hover:bg-text-muted-25 border-b h-fit">
                                    <Image alt="" className="w-16 aspect-[4/5]" src={getImageUrl(product?.img[0])} width={400} height={500} />
                                    <div className="flex flex-col gap-2">
                                        <Link className="text-sm font-medium leading-none" href={product?.slug}>{product?.title}</Link>
                                        <div className='flex justify-center items-center gap-2'>
                                            {
                                                product?.sell_price && <p className='text-sm text-text-muted-50 line-through'>{product?.price}৳</p>
                                            }

                                            <p className='text-xs font-semibold text-primary'>{product?.sell_price ? product?.sell_price : product?.price}৳</p>
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







                <div className="mt-5 ">
                    <div className="w-full flex">
                        <button onClick={() => setTabIndex(0)} className={
                            cn(
                                "w-full py-2 bg-text-muted-25 text-text-muted-100",
                                tabIndex === 0 && 'bg-text-muted-50 text-text-primary'
                            )
                        }>Menu</button>
                        <button onClick={() => setTabIndex(1)} className={
                            cn(
                                "w-full py-2 bg-text-muted-25 text-text-muted-100",
                                tabIndex === 1 && 'bg-text-muted-50 text-text-primary'
                            )
                        }>Categories</button>
                    </div>
                    <div>
                        <div className={cn(
                            tabIndex === 0 ? 'block' : 'hidden'
                        )}>
                            <div className="flex flex-col gap-1 mt-2">
                                <NavLink href='/' exact className="py-3 border-b text-sm font-medium" activeClassName='text-primary'>HOME</NavLink>
                                <NavLink href='/products' className="py-3 border-b text-sm font-medium" activeClassName='text-primary'>PRODUCTS</NavLink>
                                <NavLink href='/blogs' className="py-3 border-b text-sm font-medium" activeClassName='text-primary'>BLOGS</NavLink>
                                <NavLink href='/contact-us' className="py-3 border-b text-sm font-medium" activeClassName='text-primary'>CONTACT US</NavLink>

                                <NavLink href='/wishlist' className="py-3 border-b text-sm font-medium flex items-center gap-2" activeClassName='text-primary'>
                                    <Heart size={16} strokeWidth={2} />
                                    <span>WISHLIST</span>
                                </NavLink>
                                <NavLink href='/login' className="py-3 border-b text-sm font-medium flex items-center gap-2" activeClassName='text-primary'>
                                    <User size={16} strokeWidth={2} />
                                    <span>LOGIN / REGISTER</span>
                                </NavLink>
                            </div>
                        </div>
                        <div className={cn(
                            tabIndex === 1 ? 'block' : 'hidden'
                        )}>
                            <div className="flex flex-col gap-1 mt-2">

                                {
                                    categories?.map((category, i) => (
                                        <NavLink key={i} href={`/products?categories=${category?.slug}`} className="py-3 border-b text-sm font-medium" activeClassName='text-primary'>{category?.name}</NavLink>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MobileSideBar;