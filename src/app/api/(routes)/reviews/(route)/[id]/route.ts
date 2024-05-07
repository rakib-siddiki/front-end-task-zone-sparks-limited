import { NextRequest } from 'next/server';
import {
    onDeleteReviews,
    onFindReviews,
    onUpdateReviews
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IReviews } from '../../types';
// get Reviews by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindReviews(id);
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
        const data = (await req.json()) as IReviews;
        const res = await onUpdateReviews(id, data);
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
        const res = await onDeleteReviews(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
