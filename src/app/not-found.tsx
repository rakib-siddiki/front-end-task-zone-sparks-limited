import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <section className='min-h-dvh w-full flex justify-between items-center py-10 relative overflow-hidden z-10'>
            <Image
                width={1000}
                height={1000}
                className='block w-full'
                src='https://cdn.easyfrontend.com/pictures/httpcodes/six-character.svg'
                alt='error-page'
            />
            <div className='container hidden lg:block'>
                <div className='text-center'>
                    <h2 className='font-bold leading-none text-9xl mb-6 '>
                        404
                    </h2>
                    <p className='opacity-80 text-4xl xl:text-5xl '>
                        Page not Available!
                    </p>
                </div>
            </div>
        </section>
    );
};
export default NotFoundPage;
