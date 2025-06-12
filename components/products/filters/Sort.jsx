"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createSortParams } from "@/utils/searchParams";
import { Option, Select } from "@/components/ui/Select";

const Sort = ({ sort }) => {
    const [sortBy, setSortBy] = useState(sort || '');
    const router = useRouter();

    useEffect(() => {
        router.push(`/products?${createSortParams(sortBy)}`);
    }, [sortBy]);


    useEffect(() => {
        setSortBy(sort)
    }, [sort])

    return (
        <Select className='min-w-40 sm:min-w-60' onChange={(selected) => setSortBy(selected)}>
            <Option label="Default Sorting" value="" selected={sortBy === ""} />
            <Option label="Sort by Latest" value="latest" selected={sortBy === "latest"} />
            <Option label="Sort by Popularity" value="popularity" selected={sortBy === "popularity"} />
            <Option label="Sort by Price: Low to High" value="price_low_to_high" selected={sortBy === "price_low_to_high"} />
            <Option label="Sort by Price: High to Low" value="price_high_to_low" selected={sortBy === "price_high_to_low"} />
        </Select>
    );
};

export default Sort;