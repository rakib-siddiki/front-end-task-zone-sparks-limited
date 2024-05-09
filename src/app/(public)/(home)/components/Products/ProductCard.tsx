import { IProductResponse } from '@/app/(public)/types';
import { Icons } from '@/components/core/Icons';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import React, { FC } from 'react';

interface IProps extends IProductResponse {}
const ProductCard: FC<IProps> = ({ ...data }) => {
    return (
        <Card>
            <CardContent className='p-0 group relative'>
                <div className='block text-center'>
                    <Image
                        width={370}
                        height={290}
                        src={data?.image}
                        alt={data?.title}
                        className='max-w-full w-full sm:h-56 object-contain rounded'
                    />
                    <div className='absolute left-4 right-4 bottom-4 rounded rounded-tl-3xl rounded-br-3xl bg-gray-25 bg-opacity-70 dark:bg-black dark:bg-opacity-40 bg-blur-sm  translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 p-5'>
                        <span className='flex items-center justify-center gap-1 text-xl font-medium'>
                            {data?.rating}
                            <Icons.Star className='size-5 fill-yellow-600 stroke-yellow-600' />
                        </span>
                        <p>{data.category.name}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className='px-2 pt-4'>
                <div className='flex items-center justify-between'>
                    <h5 className='text-lg font-medium'>{data?.title}</h5>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-red-600 line-through font-medium text-sm leading-none my-2 mr-3'>
                            ${data?.markedPrice}
                        </span>
                        <span className='text-blue-600 font-medium text-sm leading-none my-2'>
                            ${data?.sellingPrice}
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
