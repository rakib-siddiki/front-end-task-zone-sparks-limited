import { NextRequest } from 'next/server';
import {
    onDeleteCategory,
    onFindCategory,
    onUpdateCategory
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { ICategory } from '../../types';
// get Category by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindCategory(id);
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
        const data = (await req.json()) as ICategory;
        const res = await onUpdateCategory(id, data);
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
        const res = await onDeleteCategory(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
