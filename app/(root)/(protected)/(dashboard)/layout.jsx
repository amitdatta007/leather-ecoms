"use client"

import { logout } from '@/actions/authActions';
import NavLink from '@/components/shared/navbar/NavLink';
import Breadcrumb from '@/components/shared/others/Breadcrumb';
import { useRouter } from 'next/navigation';


const DashboardLayout = ({ children }) => {
    const router = useRouter();

    const lout = () => {
        logout()
        router.push('/login')
    }

    return (
        <main className='mt-[72px] lg:mt-[150px] bg-[#FFFCF4]'>
            <Breadcrumb title='My Account' />

            <div className='wrapper py-10 flex flex-col md:flex-row gap-6'>
                <div className='w-full md:w-1/3 lg:w-1/4 flex flex-col pr-6 border-r items-start'>
                    <div className='py-4 border-b w-full mb-6'>
                        <h3 className='text-lg font-semibold'>My Account</h3>
                    </div>
                    <NavLink
                        href='/my-account'
                        className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full'
                        activeClassName='bg-black/10'
                        exact
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        href='/my-account/orders'
                        className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full'
                        activeClassName='bg-black/10'
                    >
                        Orders
                    </NavLink>
                    <NavLink
                        href='/my-account/points'
                        className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full'
                        activeClassName='bg-black/10'
                    >
                        Points
                    </NavLink>
                    <NavLink
                        href='/my-account/account-details'
                        className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full'
                        activeClassName='bg-black/10'
                    >
                        Account Details
                    </NavLink>
                    {/* <NavLink
                        href='/my-account/my-coupons'
                        className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full'
                        activeClassName='bg-black/10'
                    >
                        My Coupons
                    </NavLink> */}
                    <NavLink
                        href='/my-account/wishlist'
                        className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full'
                        activeClassName='bg-black/10'
                    >
                        Wishlist
                    </NavLink>
                    <button onClick={() => lout()} className='py-2.5 px-3.5 text-sm font-semibold hover:bg-black/5 w-full flex items-start'>Logout</button>
                </div>
                <div className='w-full md:w-2/3 lg:w-3/4'>
                    {children}
                </div>
            </div>
        </main>
    );
};

export default DashboardLayout;