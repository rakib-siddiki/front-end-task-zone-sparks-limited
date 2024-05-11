import { NextRequest, NextResponse } from 'next/server';
import { IUserCreatePayload, IUserRespose } from '../types/User';
import { errorResponse } from '@/app/api/helpers';
import { onCreateUser, onFindUsers } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IUserCreatePayload;
        const res = await onCreateUser(body);
        const data = (await res.json()) as IUserRespose;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindUsers();
        return res;
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
