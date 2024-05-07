import { Be_Vietnam_Pro } from 'next/font/google';

export const SITE_TITLE_DEFAULT = 'E-Commerce';
export const SITE_TITLE_TEMPLATE_DEFAULT = `%s - e-commerce`;
export const SITE_DESCRIPTION_DEFAULT = 'E-Commerce Description';
export const SITE_VERIFICATION_GOOGLE_DEFAULT =
    'google-site-verification=adwdawdaw';

export const FONT_DEFAULT = Be_Vietnam_Pro({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-be-vietnam-pro',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
