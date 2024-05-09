import { IProductResponse } from '@/app/(public)/types';
import React, { FC } from 'react';
import { NavigationButtons, Products } from '.';

interface IProps {
    data: IProductResponse[];
}
export const Wrapper: FC<IProps> = ({ data }) => {
    return (
        <section className='container'>
            <NavigationButtons />
            <Products data={data} />
        </section>
    );
};
