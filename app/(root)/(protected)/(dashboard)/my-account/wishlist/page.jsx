import { getWishlist } from '@/actions/products';
import ProductCard from '@/components/products/ProductCard';
import { auth } from '@/lib/auth';
import React from 'react';

const WishlistPage = async () => {
    const session = await auth();
    const data = await getWishlist(session?.user?.id);



    return (
        <div className='py-10 wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
            {
                data.data.map((product, i) => {
                    return (
                        <ProductCard key={i} product={product?.product} />
                    )
                })
            }
        </div>
    );
};

export default WishlistPage;