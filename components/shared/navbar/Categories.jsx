"use client"

import { AlignJustify, ChevronDown } from "lucide-react";
import Link from "next/link";
// import CategoriesItem from "./categoriesItem";
// import { categories } from "@/constant/categories";
import { useEffect, useRef, useState } from "react";

const Categories = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);


    return (
        <div className='hidden lg:block h-[54PX] w-[25%] max-w-72 relative' ref={containerRef} onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}>
            <div
                className="flex items-center h-full text-white justify-between  bg-primary  w-full animate px-4"
            >
                <div className="flex items-center gap-2">
                    <AlignJustify />
                    <span className="font-medium text-sm uppercase">BROWSE CATEGORIES</span>
                </div>
                <ChevronDown />
            </div>
            <div className={`absolute ${isOpen ? 'block' : 'hidden'} shadow-md w-full top-full left-0 border border-border bg-white z-40`}>
                <div className="w-full h-full">

                    {
                        categories?.map((category, i) => (
                            <div className='group text-sm animate' key={i}>
                                <Link
                                    href={`/products?categories=${category?.slug}`}
                                    className="animate py-3 px-4 w-full h-full flex justify-between items-center text-sm font-medium group-hover:bg-primary group-hover:text-white"
                                >
                                    <span>{category?.name}</span>
                                    <span>
                                    </span>
                                </Link>
                                <div className="animate absolute hidden group-hover:grid w-[720px] h-full min-h-fit left-[calc(100%_+_1px)] top-0 bg-white border-r border-b border-border grid-cols-3 p-6 gap-x-2 gap-y-5 row-auto place-content-start opacity-0 invisible group-hover:visible group-hover:opacity-100 shadow-md">
                                    {
                                        category?.sub_categories.map((subCat) => (<div className='flex flex-col' key={subCat.id}>
                                            <Link href={`/products?categories=${category?.slug}&sub_categories=${subCat.slug}`} className='hover:text-primary'>{subCat.name}</Link>
                                        </div>))
                                    }
                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    );
};

export default Categories;