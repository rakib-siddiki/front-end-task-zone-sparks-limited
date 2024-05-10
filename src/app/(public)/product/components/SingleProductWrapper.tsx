import React, { FC } from 'react';
import { Gallery, ProductDetails } from '.';
import { IProductResponse } from '../../types';
interface IProps extends IProductResponse {}
const SingleProductWrapper: FC<IProps> = ({ ...data }) => {
    return (
        <section className='container'>
            <div className='grid grid-cols-12 gap-10 py-6 md:py-10'>
                <div className='col-span-12 lg:col-span-6'>
                    <Gallery {...data} />
                </div>
                <div className='col-span-12 lg:col-span-6'>
                    <ProductDetails {...data} />
                </div>
            </div>
        </section>
    );
};

export default SingleProductWrapper;
