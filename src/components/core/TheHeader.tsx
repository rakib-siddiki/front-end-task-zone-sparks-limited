import React from 'react';
import { SearchInput, ThemeSwitcher } from '.';

import { Icons } from './Icons';
import { LinksDesktop } from './LinksDesktop';
import CustomAvatar from './avatar/CustomAvatar';
import Link from 'next/link';
import { fetchProducts } from '@/app/(public)/httpActions';
const TheHeader = async () => {
    const data = await fetchProducts();
    return (
        <header className='container'>
            <nav className='flex gap-5 justify-between items-center sm:gap-5 py-3'>
                <Link href='/' className='text-2xl font-bold inline-block'>
                    Logo
                </Link>
                <LinksDesktop />
                <div className='max-xs:hidden w-full relative'>
                    <SearchInput products={data ?? []} />
                </div>
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
            <div className='xs:hidden relative'>
                <SearchInput products={data ?? []} />
            </div>
        </header>
    );
};

export default TheHeader;
