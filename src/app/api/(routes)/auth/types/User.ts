import mongoose from 'mongoose';

export interface IUserCreatePayload {
    name: string;
    email: string;
    image?: string;
    password: string | undefined;
}

export interface IUserSignupPayload {
    name: string;
    email: string;
    image?: string;
    password?: string | undefined;
}

export interface IUserRespose {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    image?: string;
    password: string | undefined;
    message?: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}
