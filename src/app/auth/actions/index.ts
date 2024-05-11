'use server';
import { signIn, signOut } from '@/auth';

import { AuthError } from 'next-auth';
import { DEFAULT_REDIRECT_LOGIIN } from '@/routes';
interface ILogInUser {
    email: string;
    password: string;
}

export const loginWithCredentials = async (
    formData: ILogInUser,
    callbackUrl?: string | null
) => {
    if (!formData.email || !formData.password) {
        return;
    }

    const { email, password } = formData;
    try {
        await signIn('credentials', {
            email: email,
            password: password,
            redirectTo: callbackUrl || DEFAULT_REDIRECT_LOGIIN
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials' };
                default:
                    return { error: 'Something went wrong!' };
            }
        }
        throw error;
    }
};
export const signUpWithSocial = async (stategy: string) => {
    try {
        await signIn(stategy);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credentials' };

                default:
                    return { error: 'Something went wrong!' };
            }
        }
        throw error;
    }
};

export const signOutAction = async () => {
    await signOut();
};
