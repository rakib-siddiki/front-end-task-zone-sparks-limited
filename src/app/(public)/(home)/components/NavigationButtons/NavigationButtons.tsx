'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const categories = [
    { label: 'All', value: 'all', isActive: true },
    { label: 'Branding', value: 'Brand', isActive: false },
    { label: 'category', value: 'category', isActive: false }
];
const NavigationButtons = () => {
    const [isActive, setIsActive] = useState<number>(0);

    return (
        <section className='my-6'>
            {categories.map(({ label, value }, i) => (
                <Button
                    onClick={() => setIsActive(i)}
                    variant={isActive === i ? 'default' : 'secondary'}
                    size='sm'
                    className={cn(' mr-2 dark:bg-gray-800 dark:text-gray-100')}
                    key={value}
                >
                    {label}
                </Button>
            ))}
        </section>
    );
};

export default NavigationButtons;
