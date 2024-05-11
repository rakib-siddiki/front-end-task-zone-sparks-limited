import { ISubCategory } from '@/app/api/(routes)/sub-categories/types';
import React, { ChangeEvent, FC } from 'react';
interface IProps {
    subCat: ISubCategory[];
    handleFilter: (e: ChangeEvent<HTMLInputElement>) => void;
    filter: { category: string; subCategory: string; brand: string };
}
const SubCategoryOptions: FC<IProps> = ({ subCat, handleFilter, filter }) => {
    return (
        <div className='w-full'>
            <h2 className='text-lg font-bold mb-2'>Subcategories</h2>
            <ul className='list-none mb-4'>
                {(subCat ?? []).map(({ _id, title }) => {
                    const id = String(_id);
                    return (
                        <li key={id} className='mb-2'>
                            <label
                                htmlFor={`subcategory-${id}`}
                                className='p-1 cursor-pointer'
                            >
                                <input
                                    id={`subcategory-${id}`}
                                    type='checkbox'
                                    name='subCategory'
                                    value={id}
                                    onChange={handleFilter}
                                    checked={filter.subCategory === String(_id)}
                                />
                                <span className='ml-2'>{title}</span>
                            </label>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SubCategoryOptions;
