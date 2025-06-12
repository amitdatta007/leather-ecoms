"use client"

import { Heart, House, Search, ShoppingCart, Store, User, UserRound } from "lucide-react";
import { useState } from "react";
import { useScrollLock } from "@/hooks/useScrollLock";
import NavLink from "@/components/shared/navbar/NavLink";
import dynamic from "next/dynamic";
import { useDispatch } from "react-redux";
import { openCart } from "@/lib/app/features/cart/cartSlice";



const MobileBottomNav = () => {
    const dispatch = useDispatch();
    

    return (
        <>
            <div className="md:hidden fixed left-1/2 -translate-x-1/2 z-[60] bg-white w-full bottom-0  border-t border-border">
                <div className="wrapper grid grid-cols-4">
                    <NavLink
                        href='/'
                        className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph"
                        activeClassName="text-primary"
                        exact={true}
                    >
                        <House />
                        <span className="font-medium text-xs leading-5">Home</span>
                    </NavLink>
                    <NavLink
                        href='/wishlist'
                        className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph"
                        activeClassName="text-primary"
                    >
                        <Heart />
                        <span className="font-medium text-xs leading-5">wishlist</span>
                    </NavLink>
                    <button
                        className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph"
                        onClick={() => dispatch(openCart())}
                    >
                        <ShoppingCart />
                        <span className="font-medium text-xs leading-5">Cart</span>
                    </button>
                    
                    <NavLink
                        href='/my-account'
                        className="h-[60px] flex gap-1 flex-col items-center justify-center text-paragraph"
                        activeClassName="text-primary"
                    >
                        <User />
                        <span className="font-medium text-xs leading-5">My Account</span>
                    </NavLink>
                    
                </div>
            </div>

        </>
    );
};

export default MobileBottomNav;