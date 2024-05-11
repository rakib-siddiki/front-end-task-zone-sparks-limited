'use client';
import { Icons } from '@/components/core/Icons';
import { InputField } from '@/components/core';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
const socialSignUp = [
    {
        id: 1,
        label: 'Sign In with Google',
        icon: <Icons.Google className='w-4 h-4' />,
        action: 'google'
    },
    {
        id: 2,
        label: 'Sign In with Google',
        icon: <Icons.Facebook className='w-4 h-4' />,
        action: 'facebook'
    }
];
const SignUpFrom = () => {
    const [isHidePass, setIsHidePass] = useState(false);

    return (
        <>
            <h1 className='font-bold text-4xl lg:text-5xl mb-8 md:mb-12 whitespace-nowrap'>
                Sign Up in Zone Spark
            </h1>
            <main className='w-full mx-auto max-w-md space-y-6 md:space-y-8'>
                <form className='space-y-4'>
                    <InputField
                        placeholder='Full Name'
                        name='fullName'
                        type='text'
                        className='px-3 block'
                    />
                    <InputField
                        placeholder='Email address'
                        name='email'
                        type='email'
                        className='px-3'
                    />
                    <div className='relative'>
                        <InputField
                            placeholder='password'
                            type={isHidePass ? 'text' : 'password'}
                            name='password'
                            className='relative px-3'
                        />
                        <span
                            className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-700 dark:text-gray-400'
                            onClick={() => setIsHidePass((prev) => !prev)}
                        >
                            {isHidePass ? (
                                <Icons.Eye className='size-4 md:size-5 stroke-[1.5px] dark:stroke-gray-100' />
                            ) : (
                                <Icons.EyeOff className='size-4 md:size-5 stroke-[1.5px] dark:stroke-gray-100' />
                            )}
                        </span>
                    </div>
                    <div className='flex items-start gap-2'>
                        <input
                            type='checkbox'
                            className='h-4 w-4 mt-1 text-gray-900 dark:text-gray-100 rounded border-gray-300 dark:border-gray-600 
                            focus:ring-primary-400'
                            id='checkbox-1'
                        />
                        <label
                            htmlFor='checkbox-1'
                            className='text-sm text-start font-medium text-gray-900 dark:text-gray-100'
                        >
                            Receive relevant offers and promotional
                            communication from MediHive
                        </label>
                    </div>
                    <div className='flex items-start gap-2'>
                        <input
                            type='checkbox'
                            className='h-4 w-4 mt-1 text-gray-900 dark:text-gray-100 rounded border-gray-300 dark:border-gray-600
                             focus:ring-primary-400'
                            id='checkbox-2'
                        />
                        <label
                            htmlFor='checkbox-2'
                            className='text-sm font-medium text-gray-900 dark:text-gray-100'
                        >
                            By Sign up, I agree to{' '}
                            <span className='text-primary-500'>
                                term & conditions
                            </span>
                        </label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Link href={'/auth/sign-in'} className='font-medium'>
                            Already have an account?
                        </Link>
                        <Link
                            href={'/auth/forget-password'}
                            className='font-medium'
                        >
                            Forget password?
                        </Link>
                    </div>
                    <Button
                        color='primary'
                        className='w-full py-2.5 dark:bg-gray-50 mt-4 md:mt-6'
                    >
                        Sign in
                    </Button>
                </form>
                <div className='flex items-center gap-3 text-sm text-center'>
                    <span className='h-px w-full bg-gray-50 dark:bg-gray-400'></span>
                    or
                    <span className='h-px w-full bg-gray-50 dark:bg-gray-400'></span>
                </div>
                <div className='flex flex-col items-center gap-4'>
                    {(socialSignUp ?? []).map(({ id, icon, label }) => (
                        <button
                            key={id}
                            className={`w-full flex items-center justify-center text-left gap-3 py-2.5 px-16 border border-primary-500 dark:border-gray-400 rounded  dark:text-gray-200 text-sm whitespace-nowrap transition duration-150 tracking-wide dark:hover:border-gray-300  dark:hover:text-gray-100`}
                        >
                            <span className='pl-5'>{icon}</span>
                            {label}
                        </button>
                    ))}
                </div>
            </main>
        </>
    );
};

export default SignUpFrom;
