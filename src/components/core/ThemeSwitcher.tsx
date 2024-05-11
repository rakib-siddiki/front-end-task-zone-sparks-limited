'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icons } from './Icons';

const ThemeSwitcher = ({ className }: { className?: string }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            {!mounted ? (
                <button
                    className={`w-fit hover:scale-110 active:scale-100 duration-200`}
                >
                    <span>
                        <Icons.Moon
                            className={`${className}stroke-gray-800 stroke-[1.25px] size-6 dark:hidden`}
                        />
                        <Icons.SunMedium
                            className={`${className} stroke-[1.25px] stroke-gray-50 size-6 hidden dark:block`}
                        />
                    </span>
                </button>
            ) : (
                <button
                    className={`w-fit hover:scale-110 active:scale-100 duration-200`}
                    onClick={() =>
                        setTheme(theme === 'dark' ? 'light' : 'dark')
                    }
                >
                    {theme === 'light' ? (
                        <Icons.Moon
                            className={`${className} stroke-gray-800 stroke-[1.25px] size-6`}
                        />
                    ) : (
                        <Icons.SunMedium
                            className={`${className} stroke-[1.25px] stroke-gray-50 size-6`}
                        />
                    )}
                </button>
            )}
        </>
    );
};

export default ThemeSwitcher;
