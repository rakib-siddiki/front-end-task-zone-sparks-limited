import { InputField } from '@/components/core';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
interface IProps {
    filter: { minPrice: string; maxPrice: string };
    handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    toggle: () => void;
}
const PriceOptions: FC<IProps> = ({ filter, handleFilter, toggle }) => {
    return (
        <div className='w-full max-w-xs mx-auto text-center'>
            <h2 className='text-lg font-bold mb-2'>Price Range</h2>
            <div className='flex items-center mb-4'>
                <InputField
                    type='number'
                    name='minPrice'
                    min={0}
                    value={filter.minPrice}
                    onChange={handleFilter}
                    className='px-3 text-gray-700 dark:text-gray-100 '
                />
                <span className='mx-2'>-</span>
                <InputField
                    type='number'
                    name='maxPrice'
                    min={0}
                    value={filter.maxPrice}
                    onChange={handleFilter}
                    className='px-3 text-gray-700 dark:text-gray-100'
                />
            </div>
            <Button onClick={toggle} className=''>
                Filter
            </Button>
        </div>
    );
};

export default PriceOptions;
