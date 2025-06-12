"use client"

import { getProducts } from '@/actions/products';
import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
// import SingleProductLoading from './SingleProductLoading';

const AllProducts = ({ searchParams }) => {
    const [limit, setLimit] = useState(12)
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [hasMore, setHasMore] = useState(true);

    const elementRef = useRef();

    useEffect(() => {
        setLoading(true);
        setHasMore(true);


        getProducts({
            ...searchParams,
            limit: limit
        }).then((res) => {
            if (res?.status === "success") {
                setProducts(res?.data);

                if (res?.data?.length < limit) {
                    setHasMore(false)
                }
            }
        }).finally(() => {
            setLoading(false);
        });

    }, [limit, searchParams]);

    useEffect(() => {
        setLimit(12)
        setProducts([]);
        setLoading(true)
    }, [searchParams]);


    const onIntersection = (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting && hasMore) {
            setLimit((prevLimit) => prevLimit + 12)
        }

    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);

        if (observer && elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (observer) {
                observer.disconnect()
            }
        };
    }, [products])



    return (
        <>  
            <div>
                
            </div>
            <div className='py-6 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8'>
                {
                    products?.map((product, i) => (
                        <ProductCard key={i} className='shadow p-2' product={product} />
                    ))
                }
                {/* {
                    loading && [...Array(12).keys()]?.map((i) => (
                        <SingleProductLoading key={i} />
                    ))
                } */}
            </div>
            <p ref={elementRef}></p>

        </>
    );
};

export default AllProducts;