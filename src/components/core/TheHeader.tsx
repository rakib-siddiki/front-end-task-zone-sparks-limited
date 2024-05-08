import React from 'react';
import { InputField, ThemeSwitcher } from '.';

import { Icons } from './Icons';
import { LinksDesktop } from './LinksDesktop';
import CustomAvatar from './avatar/CustomAvatar';
const TheHeader = () => {
    return (
        <header className='container'>
            <nav className='flex gap-5 justify-between items-center sm:gap-5 py-3'>
                <h2 className='text-2xl font-bold'>Logo</h2>
                <LinksDesktop />
                <InputField
                    inputClass='max-xs:hidden'
                    className='py-1.5 sm:py-2.5'
                    placeholder='Search..'
                    type='search'
                />
                <div className='w-1/5 flex justify-end items-center gap-3'>
                    <span className='relative'>
                        <Icons.ShoppingCart className='size-6 dark:stroke-gray-200' />
                        <span className='absolute -top-2 -right-2 bg-blue-500 rounded-full size-4 text-xs text-center text-gray-50'>
                            3
                        </span>
                    </span>
                    <CustomAvatar />
                    <ThemeSwitcher />
                </div>
            </nav>
            <InputField
                inputClass='xs:hidden'
                placeholder='Search..'
                type='search'
            />
        </header>
    );
};

export default TheHeader;
