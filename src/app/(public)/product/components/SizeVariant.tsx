import { FC, useState } from 'react';
import { IVariantResponse } from '../../types';
import { Button } from '@/components/ui/button';
interface IProps {
    variants: IVariantResponse[];
}
const SizeVariant: FC<IProps> = ({ variants }) => {
    const [selectedSize, setSelectedSize] = useState(0);
    return (
        <>
            <div className='mb-6'>
                <h5 className='font-semibold mb-2'>Size:</h5>
                <div className='flex flex-wrap gap-2 mb-2'>
                    {variants.map(({ size }, i) => (
                        <>
                            <Button
                                type='button'
                                onClick={() => setSelectedSize(i)}
                                key={size}
                                variant='secondary'
                                className={`w-16, ${selectedSize === i ? 'bg-gray-800 text-gray-25 hover:bg-gray-900 dark:bg-gray-300 dark:text-gray-800' : null}`}
                            >
                                {size}
                            </Button>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};
export default SizeVariant;
