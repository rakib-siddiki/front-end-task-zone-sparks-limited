import { FC } from 'react';

type QtyFieldProps = {
    name: string;
    value: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const QtyField: FC<QtyFieldProps> = ({ name, value, onChange }) => {
    const qtyControl = (qty: number) =>
        onChange({
            target: {
                name,
                type: 'radio',
                // @ts-expect-error property 'value' does not exist on type 'HTMLInputElement'
                value: qty < 1 ? 1 : qty
            }
        });

    return (
        <div className='h-11 border dark:border-slate-700 rounded-full flex w-36 relative mt-4 overflow-hidden'>
            <button
                className='w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-r dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-20'
                type='button'
                onClick={() => qtyControl(value - 1)}
            >
                -
            </button>
            <input
                className='text-lg font-bold px-4 pl-5 py-1 inline-flex justify-center max-w-[60px] text-center bg-transparent focus:outline-none pointer-events-none'
                placeholder=''
                value={value}
                onChange={(e) => qtyControl(parseInt(e.target.value, 10))}
            />
            <button
                className='w-full pb-1 inline-flex justify-center items-center text-2xl font-medium border-l dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10'
                type='button'
                onClick={() => qtyControl(value + 1)}
            >
                +
            </button>
        </div>
    );
};
export default QtyField;
