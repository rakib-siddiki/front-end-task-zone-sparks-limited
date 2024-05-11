import authConfig from '@/auth.config';
import { DEFAULT_REDIRECT_LOGIIN, authRoutes, protectedRoutes } from '@/routes';
import NextAuth from 'next-auth';

export const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isProtectedRoutes = protectedRoutes.includes(nextUrl.pathname);
    const isAuthRoutes = nextUrl.pathname.startsWith(authRoutes);
    if (!isLoggedIn && isProtectedRoutes) {
        return Response.redirect(new URL('/auth/sign-in', nextUrl));
    }

    if (isLoggedIn && isAuthRoutes) {
        return Response.redirect(new URL(DEFAULT_REDIRECT_LOGIIN, nextUrl));
    }

    if (isProtectedRoutes) {
        if (!isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_REDIRECT_LOGIIN, nextUrl));
        }
        return;
    }

    return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: [
        // Exclude files with a "." followed by an extension, which are typically static files.
        // Exclude files in the _next directory, which are Next.js internals.
        '/((?!.+\\.[\\w]+$|_next).*)',
        // Re-include any files in the api or trpc folders that might have an extension
        '/(api|trpc)(.*)'
    ],
    unstable_allowDynamic: ['/node_modules/mongoose/**']
};
