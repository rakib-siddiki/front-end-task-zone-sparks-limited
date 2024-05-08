import { TheHeader } from '@/components/core';

export default function PublicLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='min-h-screen relative'>
            <TheHeader />
            <main>{children}</main>
        </div>
    );
}
