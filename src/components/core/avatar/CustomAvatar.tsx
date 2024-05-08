'use client';
import React, { useRef, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { USER_DROPDOWN_MENUS } from '@/app/(public)/static';
import { useClickOutside } from '@/app/(public)/(home)/hooks';

const CustomAvatar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => setDropdownOpen(false));
    return (
        <>
            <div className='relative'>
                <Avatar onClick={() => setDropdownOpen((prev) => !prev)}>
                    <AvatarImage
                        width={32}
                        height={32}
                        src='https://github.com/shadcn.png'
                        alt='avater'
                        className='cursor-pointer'
                    />
                    <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <div
                    ref={menuRef}
                    className={`${dropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-all duration-300`}
                >
                    <span
                        className='size-5 border-t border-l border-gray-50 dark:border-gray-700 bg-gray-25 dark:bg-gray-700 absolute 
                    top-9 left-1/2 -translate-x-1/2 rotate-45'
                    />
                    <div className='absolute min-w-48 top-full -left-32 z-50  my-4 text-base list-none bg-gray-25 divide-y divide-gray-100 rounded-md overflow-hidden shadow-sm dark:bg-gray-700 dark:divide-gray-600'>
                        <div className='px-4 py-3'>
                            <span className='block text-sm text-gray-900 dark:text-white'>
                                Rakib Siddiki
                            </span>
                            <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                                name@user.com
                            </span>
                        </div>
                        <ul>
                            {(USER_DROPDOWN_MENUS ?? []).map(
                                ({ label, link, action }) => (
                                    <Link
                                        key={label}
                                        href={action ? '#' : link}
                                        onClick={action}
                                        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                                    >
                                        {label}
                                    </Link>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomAvatar;
