import { getPrivacyPolicy } from '@/actions/others';
import Breadcrumb from '@/components/shared/others/Breadcrumb';
import React from 'react';

const PrivacyPolicyPage = async() => {
    const data = await getPrivacyPolicy();

    return (
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4]'>
            <Breadcrumb title='Privacy Policy' />

            <div className='wrapper py-10' dangerouslySetInnerHTML={{ __html: data?.data?.content }}></div>
        </main>
    );
};

export default PrivacyPolicyPage;