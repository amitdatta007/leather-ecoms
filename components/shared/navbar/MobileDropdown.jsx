"use client"

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import NavParam from "./NavParam";
import NavLink from "./NavLink";

const MobileDropdown = ({ title, items, setIsOpen: closeMenu }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
        setIsOpen((state) => !state);
        closeMenu((state) => !state);
    }

    return (
        <div className='text-sm animate border-b border-border'>
            <button className="h-12 w-full flex items-center justify-between group animate" onClick={() => setIsOpen((state) => !state)}>
                <span className="group-hover:text-primary animate">{title}</span>
                <span className='group-hover:text-primary animate'>
                    <ChevronDown className={`${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </span>
            </button>
            <div className={`animate pb-4 ${isOpen ? 'block' : 'hidden'}`}>
                <NavLink
                    href={`/products`}
                    className="h-8 w-full flex items-center px-4 hover:text-primary"
                    onClick={handleClose}
                >
                    All Products
                </NavLink>
                {items?.map((item, i) => <NavParam
                    key={i}
                    href={`/products?categories=${item?.slug}`}
                    className="h-8 w-full flex items-center px-4"
                    activeClassName="text-primary"
                    onClick={handleClose}
                >
                    {item.name}
                </NavParam>)}
            </div>
        </div>
    );
};

export default MobileDropdown;