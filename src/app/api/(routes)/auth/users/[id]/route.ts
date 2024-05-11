import { NextRequest } from 'next/server';
import { onDeleteUser, onFindUser, onUpdateUser } from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IUserCreatePayload } from '../../types/User';

// get user by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindUser(id);
        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};

// update data
export const PUT = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const data = (await req.json()) as IUserCreatePayload;
        const res = await onUpdateUser(id, data);
        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};

// delete data
export const DELETE = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onDeleteUser(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
