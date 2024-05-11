import { fetchProduct } from '@/app/(public)/httpActions';
import React from 'react';
import SingleProductWrapper from '../components/SingleProductWrapper';
import { IProductResponse } from '../../types';
import { FallBackData } from '@/components/core';
type TParams = { params: { id: string } };
const SingleProductPage = async ({ params }: TParams) => {
    const data = (await fetchProduct(params?.id)) as IProductResponse | null;
    if (!data) {
        return <FallBackData />;
    }
    return <SingleProductWrapper {...data} />;
};

export default SingleProductPage;
