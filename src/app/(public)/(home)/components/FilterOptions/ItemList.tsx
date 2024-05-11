import React, { FC, InputHTMLAttributes } from 'react';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    itemName: string;
}
const ItemList: FC<IProps> = ({ id, itemName, ...rest }) => {
    return (
        <>
            <label htmlFor={`${itemName}-${id}`} className='p-1 cursor-pointer'>
                <input id={`${itemName}-${id}`} {...rest} />
                <span className='ml-2'>{itemName}</span>
            </label>
        </>
    );
};

export default ItemList;
