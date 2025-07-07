'use client'

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import MobileNavbar from "./MobileNavbar";
import MobileBottomNav from "./MobileBottomNav";

import logo from "@/assets/logop.png"
import { Heart, ShoppingBag } from "lucide-react";
import DesktopSearch from "./DesktopSearch";
import Cart from "./Cart";
import Categories from "./Categories";
import { useAuth } from "@/components/providers/AuthProvider";
import getImageUrl from "@/utils/getImageUrl";
import NavLink from "./NavLink";
import { useDispatch } from "react-redux";
import { openCart } from "@/lib/app/features/cart/cartSlice";
import { useSession } from 'next-auth/react'




const Navbar = ({ settings, categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    // const { authData } = useAuth();
    const dispatch = useDispatch();

    const { data: session, status } = useSession();

    


    return (
        <>
            <nav className="border-b border-border fixed w-full  z-[99] top-0 shadow bg-white">
                <div className="wrapper">
                    {/* <div className="hidden lg:flex py-2 justify-end">
                        {
                            authData?.user?.email ? <Link href='/my-account' className="text-sm text-text-muted-100">Hello, {authData?.user?.name}</Link> : <button className="text-sm text-text-muted-100">Login / Register</button>
                        }
                    </div> */}

                    <div className="py-6 flex justify-between items-center gap-6">
                        <MobileNavbar isOpen={isOpen} setIsOpen={setIsOpen} logo={logo} categories={categories} />
                        <Link href='/' className="block h-6 md:h-8 xl:h-10">
                            <Image
                                src={getImageUrl(settings?.logo)}
                                width={80}
                                height={200}
                                alt="logo"
                                className="h-full w-auto"
                            />
                        </Link>
                        <DesktopSearch />
                        <div className="hidden lg:flex gap-4 items-center ">
                            {
                                session?.user ? <Link href='/my-account' className="text-[13px] font-bold hover:text-text-muted-50">MY ACCOUNT</Link> : <Link href='/login' className="text-[13px] font-bold hover:text-text-muted-50">LOGIN / REGISTER</Link>
                            }

                            <Link href='/wishlist' className="-mt-1 hover:text-text-muted-50 relative">
                                <Heart strokeWidth={1.5} size={24} />
                                <span className="absolute -top-1 -right-1/3 rounded-full flex justify-center items-center w-4 h-4 text-xs  bg-primary  text-white">0</span>
                            </Link>
                        </div>

                        <Cart>
                            <button onClick={() => dispatch(openCart())} className="h-full grid lg:hidden place-items-center">
                                <ShoppingBag className="icon-size" />
                            </button>
                        </Cart>
                    </div>
                    <div className='w-full hidden lg:block'>
                        <div className='w-full h-full flex items-center relative border-t justify-between'>
                            <div className="flex items-center w-full gap-6">
                                <Categories categories={categories} />
                                <div className="flex gap-6">
                                    <NavLink
                                        href='/'
                                        exact
                                        className='text-sm font-bold uppercase hover:text-primary'
                                        activeClassName='text-primary'
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        href='/products'
                                        exact
                                        className='text-sm font-bold uppercase hover:text-primary'
                                        activeClassName='text-primary'
                                    >
                                        Products
                                    </NavLink>
                                    <NavLink
                                        href='/blogs'
                                        exact
                                        className='text-sm font-bold uppercase hover:text-primary'
                                        activeClassName='text-primary'
                                    >
                                        Blogs
                                    </NavLink>
                                </div>
                            </div>

                            <Cart>
                                <button onClick={() => dispatch(openCart())} className="h-full grid place-items-center">
                                    <ShoppingBag className="icon-size" />
                                </button>
                            </Cart>
                        </div>
                    </div>

                </div>
            </nav>

            <MobileBottomNav />
        </>
    );
};

export default Navbar;