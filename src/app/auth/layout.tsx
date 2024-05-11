import { ThemeSwitcher } from '@/components/core';
import Link from 'next/link';
import { Toaster } from '@/components/ui/toaster';
export default function PublicLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='min-h-dvh relative'>
            <header className='sm:border-b border-gray-50/30 pt-4 sm:py-3'>
                <nav className='container'>
                    <div className='flex justify-between items-center'>
                        <Link
                            href='/'
                            className='text-3xl font-bold inline-block'
                        >
                            Logo
                        </Link>
                        <ThemeSwitcher className='size-7' />
                    </div>
                </nav>
            </header>
            <Toaster />
            <main className='container'>{children}</main>
        </div>
    );
}
