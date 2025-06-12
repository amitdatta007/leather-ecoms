"use client"

import { createCategoriesParams } from "@/utils/searchParams";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const FilterByCategories = ({ catParams, allCategories }) => {
    const [categories, setCategories] = useState(catParams?.split(' ') || []);

    useEffect(() => {
        setCategories(catParams?.split(' ') || [])
    }, [catParams]);

    const router = useRouter();

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCategories(prevState => [...prevState, value]);
        } else {
            setCategories(prevState => prevState.filter(item => item !== value));
        }
    };

    useEffect(() => {
        router.push(`/products?${createCategoriesParams(categories)}`);

    }, [categories])

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
                            <div className="flex item-center gap-2" key={i}>
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
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FilterByCategories;