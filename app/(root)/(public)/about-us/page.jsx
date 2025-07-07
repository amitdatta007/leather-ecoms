import { getAboutUs } from '@/actions/others';
import Breadcrumb from '@/components/shared/others/Breadcrumb';
import React from 'react';

const AboutUsPage = async() => {
    const data = await getAboutUs();

    return (
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4]'>
            <Breadcrumb title='About us' />

            <div className='wrapper py-10' dangerouslySetInnerHTML={{ __html: data?.data?.content }}></div>
        </main>
    );
};

export default AboutUsPage;