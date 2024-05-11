import React, { ChangeEvent, FC } from 'react';
import ItemList from '../ItemList';
interface IProps {
    categories: { id: string; name: string }[];
    handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
    filter: { category: string; subCategory: string; brand: string };
}
const CategoryOptions: FC<IProps> = ({ categories, handleFilter, filter }) => {
    return (
        <div className='w-full'>
            <h2 className='text-lg font-bold mb-2'>Categories</h2>
            <ul className='list-none mb-4'>
                {(categories ?? []).map(({ id, name }) => (
                    <li key={id} className='mb-2'>
                        <ItemList
                            id={id}
                            itemName={name}
                            type='checkbox'
                            name='category'
                            value={id}
                            onChange={handleFilter}
                            checked={filter.category === id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryOptions;
