import { getReturnPolicy } from '@/actions/others';
import Breadcrumb from '@/components/shared/others/Breadcrumb';
import React from 'react';

const ReturnPolicyPage = async() => {
    const data = await getReturnPolicy();

    return (
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4]'>
            <Breadcrumb title='Easy Return Policy' />

            <div className='wrapper py-10' dangerouslySetInnerHTML={{ __html: data?.data?.content }}></div>
        </main>
    );
};

export default ReturnPolicyPage;