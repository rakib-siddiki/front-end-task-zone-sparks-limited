import {
    FONT_DEFAULT,
    SITE_DESCRIPTION_DEFAULT,
    SITE_TITLE_DEFAULT,
    SITE_TITLE_TEMPLATE_DEFAULT,
    SITE_VERIFICATION_GOOGLE_DEFAULT
} from '@/configs';
import { SITE_DOMAIN } from '@/configs/env';
import { switchThemeDuration } from '@/configs/switch-theme-duration';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/app/globals.css';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_DOMAIN),
    title: {
        default: SITE_TITLE_DEFAULT,
        template: SITE_TITLE_TEMPLATE_DEFAULT
    },
    description: SITE_DESCRIPTION_DEFAULT,
    verification: {
        google: SITE_VERIFICATION_GOOGLE_DEFAULT
    }
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${FONT_DEFAULT.variable} ${switchThemeDuration}`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='system'
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
