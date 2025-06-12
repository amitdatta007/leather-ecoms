"use client"

import { useEffect, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import { useRouter } from "next/navigation";
import { createPriceRangeParams } from '@/utils/searchParams';

const FilterByPrice = ({ min, max, minPrice = min, maxPrice = max }) => {
    const [rangeValues, setRangeValues] = useState([minPrice, maxPrice]);
    const router = useRouter();

    const handleInput = (values) => {
        setRangeValues(values);
    };

    useEffect(() => {
        const timer = setTimeout(() => {

            if((rangeValues[0] != min) && (rangeValues[1] != max)){
                router.push(`/products?${createPriceRangeParams(rangeValues[0], rangeValues[1])}`)
            } else{
                if((rangeValues[0] != min) && (rangeValues[1] === max)){
                    router.push(`/products?${createPriceRangeParams(rangeValues[0], false)}`);
                } else if((rangeValues[0] === min) && (rangeValues[1] != max)){
                    router.push(`/products?${createPriceRangeParams(false, rangeValues[1])}`);
                } else{
                    router.push(`/products?${createPriceRangeParams(false, false)}`)
                }
            }

        }, 200);

        return () => clearTimeout(timer);
    }, [rangeValues])



    return (
        <div className='border-b pb-6'>
            <div className="pb-2">
                <span className="font-semibold">Filter by price
                </span>
            </div>
            <RangeSlider className="mt-4" min={min} max={max} defaultValue={[rangeValues[0], rangeValues[1]]} onInput={handleInput} />
            <div className="flex items-center mt-6 gap-2">
                <span className='text-paragraph text-sm'>Price: </span>
                <span className='font-semibold'>{rangeValues[0]} ৳  - {rangeValues[1]} ৳ </span>
            </div>
        </div>
    );
};

export default FilterByPrice;
