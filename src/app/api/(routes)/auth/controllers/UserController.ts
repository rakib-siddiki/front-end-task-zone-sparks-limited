import { IUserCreatePayload, IUserRespose } from './../types/User';
import bcryptjs from 'bcryptjs';

import { UserModel } from '../models';
import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import userValidationSchema from '../validations/user';
import { UserSchemaValidation } from '../validations';

export const onCreateUser = async (payload: IUserCreatePayload) => {
    try {
        const { error } = userValidationSchema.safeParse(payload);
        if (error) return zodErrorResponse(error);

        await dbConnect();

        const isEmailExisting = (await UserModel.findOne({
            email: payload.email
        })) as IUserRespose;

        if (isEmailExisting) {
            return errorResponse('Email already exists', 400);
        }

        const { name, email, password } = payload;
        if (!password) {
            const newUser = { name, email };
            const user = (await UserModel.create(
                newUser
            )) as IUserCreatePayload;
            user.password = undefined;
            return successResponse(user);
        }

        const hashedPassword = await bcryptjs.hash(password, 10);
        const newUser = {
            name,
            email,
            password: hashedPassword
        };
        const user = (await UserModel.create(
            newUser
        )) as unknown as IUserRespose;
        user.password = undefined;
        return successResponse(user);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindUser = async (email: string) => {
    try {
        await dbConnect();
        const user = (await UserModel.findOne({
            email
        })) as IUserCreatePayload;
        return successResponse(user);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindUsers = async () => {
    try {
        await dbConnect();
        const user = await UserModel.find();
        return successResponse(user);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateUser = async (
    _id: string,
    payload: IUserCreatePayload
) => {
    try {
        const { error } = UserSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);

        await dbConnect();

        const user = (await UserModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IUserCreatePayload;
        return successResponse(user);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteUser = async (_id: string) => {
    try {
        await dbConnect();

        const user = (await UserModel.findByIdAndDelete({
            _id
        })) as IUserCreatePayload;

        if (!user) {
            return errorResponse('User not found', 404);
        }

        return successResponse('User deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete User');
    }
};
