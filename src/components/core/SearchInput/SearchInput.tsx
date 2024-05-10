'use client';
import { FC, useState, useRef, KeyboardEvent, ChangeEvent } from 'react';
import { InputField } from '..';
import { IProductResponse } from '@/app/(public)/types';
import Link from 'next/link';
import { useClickOutside } from '@/app/(public)/(home)/hooks';
interface IProps {
    products: IProductResponse[];
}
const SearchInput: FC<IProps> = ({ products }) => {
    const [query, setQuery] = useState<string>('');
    const [result, setResult] = useState<IProductResponse[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    useClickOutside(inputRef, () => {
        setQuery('');
        setResult([]);
    });
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        const result = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setResult(result);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && result.length > 0) {
            const firstResult = result[0];
            window.location.href = `/product/${firstResult._id}`;
        }
    };
    return (
        <>
            <InputField
                ref={inputRef}
                value={query}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                className='py-1.5 sm:py-2.5'
                placeholder='Search..'
            />
            {result.length > 0 && (
                <div className='absolute z-50 w-full bg-gray-25 rounded-b-md shadow-md  divide-y dark:divide-gray-200/20 dark:bg-gray-800 '>
                    {result.map(({ _id, title }) => (
                        <Link
                            key={_id}
                            href={`/product/${_id}`}
                            className='block px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-bg-gray-25'
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default SearchInput;
