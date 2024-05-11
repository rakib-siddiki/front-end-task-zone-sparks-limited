import { NextRequest } from 'next/server';
import {
    onDeleteSubCategory,
    onFindSubCategory,
    onUpdateSubCategory
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { ISubCategory } from '../../types';
// get SubCategory by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindSubCategory(id);
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
        const data = (await req.json()) as ISubCategory;
        const res = await onUpdateSubCategory(id, data);
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
        const res = await onDeleteSubCategory(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
