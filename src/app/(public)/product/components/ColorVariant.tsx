import { FC, Fragment, useState } from 'react';
import { IVariantResponse } from '../../types';
import { cn } from '@/lib/utils';
type TColor = { bgcolor: string; value: string };
const colorVariants: TColor[] = [
    { bgcolor: 'bg-yellow-500', value: 'Multi' },
    { bgcolor: 'bg-blue-500', value: 'Blue' },
    { bgcolor: 'bg-red-400', value: 'Pink' },
    { bgcolor: 'bg-black', value: 'Black' },
    { bgcolor: 'bg-red-600', value: 'Red' }
];
interface IProps {
    variants: IVariantResponse[];
}
const ColorVariant: FC<IProps> = () => {
    const [selectedColor, setSelectedColor] = useState('Multi');

    const handleColorChange = (value: string) => {
        setSelectedColor(value);
    };

    return (
        <>
            <div className='mb-6'>
                <h5 className='font-semibold mb-2'>
                    Color:{' '}
                    <span className='opacity-50'>
                        {selectedColor &&
                            colorVariants.find(
                                (color) => color.value === selectedColor
                            )?.value}
                    </span>
                </h5>
                <div className='flex flex-wrap gap-2 mb-2'>
                    {colorVariants.map((item, i) => (
                        <Fragment key={i}>
                            <input
                                type='radio'
                                className='absolute hidden'
                                autoComplete='off'
                                checked={selectedColor === item.value}
                                onChange={() => handleColorChange(item.value)}
                            />
                            <label
                                className={cn(
                                    'size-10 cursor-pointer border dark:border-slate-700 rounded-full',
                                    item.bgcolor
                                )}
                                onClick={() => handleColorChange(item.value)}
                            ></label>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};
export default ColorVariant;
