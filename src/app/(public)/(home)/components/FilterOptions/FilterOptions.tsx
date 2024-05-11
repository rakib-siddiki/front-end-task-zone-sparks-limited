'use client';
import React, { useContext } from 'react';
import { IProductResponse } from '../../../types';
import { filterBrand } from '../../helper/filter';
import { ISubCategory } from '@/app/api/(routes)/sub-categories/types';
import useFilter from '../../hooks/useFilter';
import { ToggleContext } from '@/providers/toggle-provider';
import { Products } from '..';
import { cn } from '@/lib/utils';
import {
    BrandOptions,
    CategoryOptions,
    PriceOptions,
    SubCategoryOptions
} from './Items';
interface IProps {
    data: IProductResponse[];
    subCat: ISubCategory[];
}
const FilterOptions: React.FC<IProps> = ({ data, subCat }) => {
    const { filter, filteredData, handleFilter } = useFilter(data, subCat);
    const { toggle, isOpen } = useContext(ToggleContext);
    const brands = filterBrand(data, 'brand');
    const categories = filterBrand(data, 'category');
    return (
        <section className='relative'>
            <div
                className={cn(
                    'w-full absolute top-0 left-0 z-40  bg-white dark:bg-black py-5  transition  ',
                    isOpen
                        ? 'translate-y-0 duration-500 opacity-100'
                        : '-translate-y-10 -z-50 opacity-0 duration-500'
                )}
            >
                {isOpen && (
                    <>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                            <CategoryOptions
                                categories={categories}
                                handleFilter={handleFilter}
                                filter={filter}
                            />
                            <SubCategoryOptions
                                subCat={subCat}
                                handleFilter={handleFilter}
                                filter={filter}
                            />
                            <BrandOptions
                                brands={brands}
                                handleFilter={handleFilter}
                                filter={filter}
                            />
                            <div className='sm:hidden '>
                                <PriceOptions
                                    toggle={toggle}
                                    handleFilter={handleFilter}
                                    filter={filter}
                                />
                            </div>
                        </div>
                        <div className='p-3 hidden sm:block'>
                            <PriceOptions
                                toggle={toggle}
                                handleFilter={handleFilter}
                                filter={filter}
                            />
                        </div>
                    </>
                )}
            </div>
            <Products data={filteredData} />
        </section>
    );
};

export default FilterOptions;
