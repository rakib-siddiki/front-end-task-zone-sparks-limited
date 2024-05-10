'use client';
import React, { ChangeEvent, FC, useState } from 'react';
import QtyField from './QtyField';
import SizeVariant from './SizeVariant';
import ColorVariant from './ColorVariant';
import { Icons } from '@/components/core/Icons';
import Link from 'next/link';
import { IProductResponse } from '../../types';
import { Button } from '@/components/ui/button';

const product = {
    title: 'Stitching Women Summer Shoulder Crossbody Bag',
    previews: [
        {
            previewUrl:
                'https://cdn.easyfrontend.com/pictures/products/women-bag1.jpg',
            thumbUrl:
                'https://cdn.easyfrontend.com/pictures/products/women-bag1.jpg'
        },
        {
            previewUrl:
                'https://cdn.easyfrontend.com/pictures/products/women-bag2.jpg',
            thumbUrl:
                'https://cdn.easyfrontend.com/pictures/products/women-bag2.jpg'
        },
        {
            previewUrl:
                'https://cdn.easyfrontend.com/pictures/products/women-bag3.jpg',
            thumbUrl:
                'https://cdn.easyfrontend.com/pictures/products/women-bag3.jpg'
        }
    ],
    rating: 4.0,
    rateCount: 136,
    price: 990,
    colorVariants: [
        { bgcolor: 'bg-yellow-500', value: 'Multi' },
        { bgcolor: 'bg-blue-500', value: 'Blue' },
        { bgcolor: 'bg-red-400', value: 'Pink' },
        { bgcolor: 'bg-black', value: 'Black' },
        { bgcolor: 'bg-red-600', value: 'Red' }
    ],
    sizeVariants: [
        { label: 'XXS', value: 'SSX', title: 'Extra extra small' },
        { label: 'XS', value: 'XS', title: 'Extra small' },
        { label: 'S', value: 'S', title: 'Small' },
        { label: 'M', value: 'M', title: 'Medium' },
        { label: 'L', value: 'L', title: 'Large' },
        { label: 'XL', value: 'XL', title: 'Extra large' },
        { label: 'XXL', value: 'XXL', title: 'Extra extra large' },
        {
            label: 'XXXL',
            value: 'XXXL',
            title: 'Extra extra extra large',
            disabled: true
        }
    ]
};
interface IProps extends IProductResponse {}
const ProductDetails: FC<IProps> = ({ ...props }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { title, rating, sellingPrice, warranty, vendor, variants, reviews } =
        props;
    console.log('🚀 > variants:', variants);
    const [formData, setFormData] = useState({
        color: 'Multi',
        size: 'XL',
        qty: 1
    });

    const setField = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <section className='px-2.5 relative overflow-hidden z-10'>
            <>
                <>
                    <div className='col-span-2 lg:col-span-1'>
                        <div className='mb-6'>
                            <h1 className='text-2xl  md:text-4xl font-medium mb-4 '>
                                {title} ({vendor?.shopName})
                            </h1>
                            <p className='opacity-70 gap-1 text-xl mb-2 font-semibold'>
                                <span className='inline-flex items-center gap-1'>
                                    <span className='font-bold'>{rating}</span>
                                    <Icons.Star className='size-5 inline-block stroke-yellow-500 fill-yellow-500' />
                                </span>
                                <Link
                                    href={`product/review/${product.title}`}
                                    className='text-blue-600 font-medium ml-1'
                                >
                                    {reviews?.length} Reviews
                                </Link>{' '}
                                <span className='ml-2'>104 Order</span>
                            </p>
                            <h3 className='text-2xl text-blue-600 font-medium'>
                                ${sellingPrice}
                            </h3>
                        </div>

                        <div className='space-y-4'>
                            {variants?.find((v) => v.color) ? (
                                <>
                                    <ColorVariant variants={variants} />
                                </>
                            ) : null}
                            {variants?.find((v) => v.size) ? (
                                <>
                                    <SizeVariant variants={variants} />
                                </>
                            ) : null}
                            <div>
                                <h5 className='font-semibold mb-2'>QTY :</h5>
                                <QtyField
                                    onChange={setField}
                                    name='qty'
                                    value={formData.qty}
                                />
                            </div>
                            <p className='font-semibold'>
                                Warrantry:{' '}
                                <span className='opacity-70'>{warranty}</span>
                            </p>
                            <div className='flex items-center gap-5 my-7'>
                                <Button
                                    size='lg'
                                    className='bg-blue-600 rounded hover:bg-blue-700 dark:hover:bg-blue-800 dark:bg-blue-700 dark:text-gray-50 '
                                >
                                    Buy Now
                                </Button>
                                <Button
                                    size='lg'
                                    className='bg-blue-600 rounded hover:bg-blue-700 dark:hover:bg-blue-800 dark:bg-blue-700 dark:text-gray-50'
                                >
                                    Add to Cart
                                </Button>
                                <button className='text-blue-600  px-3 py-2 text-lg font-bold'>
                                    <Icons.Heart
                                        onClick={() =>
                                            setIsFavorite(!isFavorite)
                                        }
                                        className={
                                            isFavorite
                                                ? 'fill-blue-500 stroke-blue-500'
                                                : 'Favorite'
                                        }
                                    />
                                </button>
                            </div>

                            <p className='opacity-70 text-balance'>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque nec consequat lorem.
                                Maecenas elementum at diam consequat bibendum.
                            </p>
                        </div>
                    </div>
                </>
            </>
        </section>
    );
};

export default ProductDetails;
