import { auth } from '@/lib/auth';
import React from 'react';

const AccountDetailsPage = async () => {
    const session = await auth();

    return (
        <form>
            <div className='flex gap-6'>
                <div className='flex w-full'>
                    <div className='w-full'>
                        <label htmlFor="name">Name <span className='text-red-600'>*</span></label>
                        <input id='name' type="text" className='border-2 bg-transparent py-2 px-4 w-full focus:outline-none' defaultValue={session?.user?.name} />
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-full'>
                        <label htmlFor="email">Email or Phone <span className='text-red-600'>*</span></label>
                        <input id='email' type="text" className='border-2 bg-transparent py-2 px-4 w-full focus:outline-none' disabled defaultValue={session?.user?.email} />
                    </div>
                </div>


            </div>

            <div className='flex flex-col gap-4 mt-10'>
                <h3 className='text-2xl font-semibold'>Change Password</h3>
                <div className='flex w-full'>
                    <div className='w-full'>
                        <label htmlFor="old_pass">Old Password <span className='text-red-600'>*</span></label>
                        <input id='old_pass' type="password" className='border-2 bg-transparent py-2 px-4 w-full focus:outline-none' />
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-full'>
                        <label htmlFor="new_pass">New Password <span className='text-red-600'>*</span></label>
                        <input id='new_pass' type="password" className='border-2 bg-transparent py-2 px-4 w-full focus:outline-none' />
                    </div>
                </div>

                <button
                    className="bg-primary hover:bg-primary-muted h-[42px] px-5 text-white text-sm font-semibold"
                    type='submit'
                >
                    Update Profile
                </button>
            </div>
        </form>
    );
};

export default AccountDetailsPage;