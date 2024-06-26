import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Icons } from './Icons';
interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    inputClass?: string;
    serchIcon?: boolean;
}
const InputField = forwardRef<HTMLInputElement, IProps>(
    ({ className, inputClass, serchIcon, label, ...rest }, ref) => {
        const id = Math.random() * 10;
        return (
            <>
                {label && (
                    <label
                        htmlFor={`input_${id}`}
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                        {label}
                    </label>
                )}
                <span
                    className={twMerge(
                        'relative w-full inline-block',
                        inputClass
                    )}
                >
                    {serchIcon && (
                        <Icons.Search className='absolute top-1/2 -translate-y-1/2 left-3' />
                    )}
                    <input
                        {...rest}
                        ref={ref}
                        id={`input_${id}`}
                        className={twMerge(
                            'w-full border dark:bg-gray-700/50 border-gray-100 dark:border-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 text-sm px-8 py-2.5  rounded outline-none font-light  placeholder:text-gray-100',
                            className
                        )}
                    />
                    {rest.value && serchIcon && (
                        <Icons.X className='absolute top-1/2 -translate-y-1/2 right-3 size-5 stroke-gray-300' />
                    )}
                </span>
            </>
        );
    }
);

InputField.displayName = 'InputField';

export default InputField;
