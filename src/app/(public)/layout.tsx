import { TheHeader } from '@/components/core';
import { NavigationButtons } from './(home)/components';
import { ToggleProvider } from '@/providers/toggle-provider';

export default function PublicLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='min-h-screen relative'>
            <ToggleProvider>
                <TheHeader />
                <NavigationButtons />
                <main>{children}</main>
            </ToggleProvider>
        </div>
    );
}
