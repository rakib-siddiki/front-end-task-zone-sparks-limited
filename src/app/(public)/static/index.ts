import { signOutAction } from '@/app/auth/actions';
export const USER_DROPDOWN_MENUS = [
    {
        label: 'Dashboard',
        link: '/dashboard'
    },
    {
        label: 'Settings',
        link: '/settings'
    },
    {
        label: 'Earnings',
        link: '/earnings'
    },
    {
        label: 'Sign out',
        action: () => signOutAction()
    }
];
