import { IProductResponse } from '@/app/(public)/types';
import React, { FC } from 'react';
import { FilterOptions } from '.';
import { http } from '../../httpActions';
import { FallBackData } from '@/components/core';
import { ISubCategory } from '@/app/api/(routes)/sub-categories/types';

interface IProps {
    data: IProductResponse[];
}
export const Wrapper: FC<IProps> = async ({ data }) => {
    const subCat = (await http.get('/sub-categories')) as ISubCategory[];
    if (!subCat) return <FallBackData />;

    return (
        <section className='container'>
            <FilterOptions data={data} subCat={subCat} />
        </section>
    );
};
