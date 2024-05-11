import { IProductResponse } from '@/app/(public)/types';
import React, { FC } from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';
import CartButton from './CartButton';

interface IProps {
    data: IProductResponse[];
}
const Products: FC<IProps> = ({ data }) => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {(data ?? []).map(({ _id, ...rest }) => (
                <main key={_id} className='relative'>
                    <Link href={`/product/${_id}`} className='block'>
                        <ProductCard {...rest} />
                    </Link>
                    <CartButton className='absolute right-4 bottom-4' />
                </main>
            ))}
        </section>
    );
};

export default Products;
