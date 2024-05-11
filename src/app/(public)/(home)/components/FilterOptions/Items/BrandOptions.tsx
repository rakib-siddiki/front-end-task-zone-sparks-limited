import React, { ChangeEvent, FC } from 'react';
import ItemList from '../ItemList';
interface IProps {
    brands: { id: string; name: string }[];
    handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
    filter: { category: string; subCategory: string; brand: string };
}
const BrandOptions: FC<IProps> = ({ brands, handleFilter, filter }) => {
    return (
        <div className='w-full'>
            <h2 className='text-lg font-bold mb-2'>Brands</h2>
            <ul className='list-none mb-4'>
                {(brands ?? []).map(({ id, name }) => (
                    <li key={id} className='mb-2'>
                        <ItemList
                            id={id}
                            itemName={name}
                            type='checkbox'
                            name='brand'
                            value={id}
                            onChange={handleFilter}
                            checked={filter.brand === id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandOptions;
