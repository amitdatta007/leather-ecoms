import { getSingleCampaign } from '@/actions/products';
import ProductCard from '@/components/products/ProductCard';
import Breadcrumb from '@/components/shared/others/Breadcrumb';
import React from 'react';

const SingleCampaign = async({ params }) => {
    const campaign = await getSingleCampaign(params?.id);


    return (
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4]'>
            <Breadcrumb title='Campaign Name' />
            <div className='py-10 wrapper grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {
                    campaign?.products?.map((product, i) => (
                        <ProductCard key={i} product={product?.product} />
                    ))
                }
            </div>
        </main>
    );
};

export default SingleCampaign;