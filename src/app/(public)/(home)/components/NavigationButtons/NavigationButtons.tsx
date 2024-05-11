'use client';
import React, { useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/core/Icons';
import { ToggleContext } from '@/providers/toggle-provider';
const categories = [
    { label: 'All', value: 'all' },
    { label: 'Branding', value: 'Brand' },
    { label: 'category', value: 'category' }
];
const NavigationButtons = () => {
    const [isActive, setIsActive] = useState<number>(0);
    const { toggle } = useContext(ToggleContext);
    return (
        <section className='container'>
            <div className='mt-6 mb-4 flex flex-wrap gap-3 items-center justify-between'>
                <div>
                    {categories.map(({ label, value }, i) => (
                        <Button
                            onClick={() => setIsActive(i)}
                            variant={isActive === i ? 'default' : 'secondary'}
                            size='sm'
                            className='mr-2 dark:bg-gray-800 dark:text-gray-100'
                            key={value}
                        >
                            {label}
                        </Button>
                    ))}
                </div>
                <Button
                    variant='secondary'
                    size='sm'
                    className='dark:bg-gray-800 dark:text-gray-100'
                    onClick={() => toggle()}
                >
                    Filter
                    <Icons.Filter className='inline-block ml-1 stroke-gray-600 size-5 dark:stroke-gray-100' />
                </Button>
            </div>
        </section>
    );
};

export default NavigationButtons;
