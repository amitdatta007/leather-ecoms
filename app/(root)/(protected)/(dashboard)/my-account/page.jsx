import Breadcrumb from '@/components/shared/others/Breadcrumb';
import { auth } from '@/lib/auth';
import { CircleUser, Component, DiamondPlus, Heart, LogOut, ScrollText } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const MyAccountPage = async () => {
    const session = await auth();



    return (
        <div className=''>
            <p className='text-paragraph'>Hello <span className='font-semibold'>{session?.user?.name}</span> (not <span className='font-semibold'>{session?.user?.name}</span>? <span className='text-text-primary'>Log out</span>)</p>
            <p className='text-paragraph mt-4'>From your account dashboard you can view your <Link href='/my-account/orders' className='text-text-primary font-semibold'>recent orders</Link>, <Link href='/my-account/account-details' className='text-text-primary font-semibold'>edit your password and account details</Link>.</p>

            <div className='grid grid-cols-3 mt-10 gap-6'>
                <Link href='/my-account/orders' className='shadow flex flex-col items-center justify-center py-6 gap-3 group'>
                    <ScrollText strokeWidth={1.3} size={48} className='text-text-muted-50 group-hover:text-primary' />
                    <p className='text-[15px] font-semibold text-text-muted-100'>Orders</p>
                </Link>
                <Link href='/my-account/points' className='shadow flex flex-col items-center justify-center py-6 gap-3 group'>
                    <DiamondPlus strokeWidth={1.3} size={48} className='text-text-muted-50 group-hover:text-primary' />
                    <p className='text-[15px] font-semibold text-text-muted-100'>Points</p>
                </Link>
                <Link href='/my-account/account-details' className='shadow flex flex-col items-center justify-center py-6 gap-3 group'>
                    <CircleUser strokeWidth={1.3} size={48} className='text-text-muted-50 group-hover:text-primary' />
                    <p className='text-[15px] font-semibold text-text-muted-100'>Account Details</p>
                </Link>
                <Link href='/my-account/my-coupons' className='shadow flex flex-col items-center justify-center py-6 gap-3 group'>
                    <Component strokeWidth={1.3} size={48} className='text-text-muted-50 group-hover:text-primary' />
                    <p className='text-[15px] font-semibold text-text-muted-100'>My coupons</p>
                </Link>
                <Link href='/my-account/wishlist' className='shadow flex flex-col items-center justify-center py-6 gap-3 group'>
                    <Heart strokeWidth={1.3} size={48} className='text-text-muted-50 group-hover:text-primary' />
                    <p className='text-[15px] font-semibold text-text-muted-100'>Wishlist</p>
                </Link>
                <Link href='/my-account' className='shadow flex flex-col items-center justify-center py-6 gap-3 group'>
                    <LogOut strokeWidth={1.3} size={48} className='text-text-muted-50 group-hover:text-primary' />
                    <p className='text-[15px] font-semibold text-text-muted-100'>Orders</p>
                </Link>
            </div>
        </div>
    );
};

export default MyAccountPage;