"use client"

import { createCategoriesParams, createSubCategoriesParams } from "@/utils/searchParams";
import { cn } from "@/utils/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FilterByCategories = ({ catParams, subCatParams, allCategories }) => {
    const [categories, setCategories] = useState(catParams?.split(' ') || []);
    const [subCats, setSubCats] = useState(subCatParams?.split(' ') || []);

    // useEffect(() => {
    //     setCategories(catParams?.split(' ') || [])
    // }, [catParams]);
    // useEffect(() => {
    //     setCategories(subCatParams?.split(' ') || [])
    // }, [subCatParams]);

    const router = useRouter();

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCategories(prevState => [...prevState, value]);
        } else {
            setCategories(prevState => prevState.filter(item => item !== value));
        }
    };

    const handleSubcatChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSubCats(prevState => [...prevState, value]);
        } else {
            setSubCats(prevState => prevState.filter(item => item !== value));
        }
    };

    useEffect(() => {
        console.log("Cats", categories)

        router.push(`/products?${createCategoriesParams(categories)}`);
    }, [categories]);

    useEffect(() => {
        console.log("Sub cat", subCats)
        router.push(`/products?${createSubCategoriesParams(subCats)}`);
    }, [subCats])

    return (
        <div className="w-full border-b pb-6">
            <div className="pb-2">
                <span className="font-semibold">Filter by Categories
                </span>
            </div>
            <div className="mt-2 flex flex-col gap-2">

                {
                    allCategories?.map((category, i) => {
                        const checkboxId = uuidv4()

                        return (
                            <div key={i}>
                                <div className="flex item-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="category"
                                        id={checkboxId}
                                        value={category?.slug}
                                        onChange={(e) => handleCheckboxChange(e)}
                                        checked={categories.includes(category?.slug)}
                                    />
                                    <label htmlFor={checkboxId}>
                                        <span className=" text-sm">{category?.name}</span>
                                    </label>
                                </div>
                                <div className={cn(
                                    "pl-6 text-sm overflow-hidden animate",
                                )}>
                                    {
                                        category?.sub_categories.map((subCat, a) => {
                                            const subCatId = uuidv4();

                                            return (
                                                <div className="flex item-center gap-2" key={a}>
                                                    <input
                                                        type="checkbox"
                                                        name="category"
                                                        id={subCatId}
                                                        value={subCat?.slug}
                                                        onChange={(e) => handleSubcatChange(e)}
                                                        checked={subCats.includes(subCat?.slug)}
                                                    />
                                                    <label htmlFor={subCatId}>
                                                        <span className=" text-sm">{subCat?.name}</span>
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FilterByCategories;


// sub_categories