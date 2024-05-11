import { Inter } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'E-Commerce';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - e-commerce`;
export const SITE_DESCRIPTION_DEFAULT = 'E-Commerce Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
