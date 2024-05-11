'use client';

import React, { ButtonHTMLAttributes, FC } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/core/Icons';
import { cn } from '@/lib/utils';
interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const CartButton: FC<IProps> = ({ className }) => {
    return (
        <Button
            onClick={(e) => e.stopPropagation()}
            size='sm'
            className={cn(
                'p-3 rounded-full size-10 dark:text-gray-50 dark:bg-gray-600',
                className
            )}
        >
            <Icons.ShoppingCart className='size-5' />
        </Button>
    );
};

export default CartButton;
