import { dbConnect } from '@/app/api/helpers';
import bcrypt from 'bcryptjs';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import { UserModel } from './app/api/(routes)/auth/models';
import { IUserRespose } from './app/api/(routes)/auth/types/User';

export default {
    pages: {
        signIn: '/auth/sign-in',
        error: '/auth/sign-in'
    },
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                await dbConnect();
                const user = (await UserModel.findOne({
                    email: email
                }).select('+password')) as IUserRespose;
                if (!user) {
                    return null;
                }

                const isMatched = (await bcrypt.compare(
                    password as string,
                    user.password!
                )) as unknown as boolean;

                if (isMatched) {
                    delete user.password;
                    return user;
                }

                return null;
            }
        })
    ]
} satisfies NextAuthConfig;
