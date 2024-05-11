import { NextRequest } from 'next/server';
import { onDeleteBrand, onFindBrand, onUpdateBrand } from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IBrand } from '../../types';
// get Brand by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindBrand(id);
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
        const data = (await req.json()) as IBrand;
        const res = await onUpdateBrand(id, data);
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
        const res = await onDeleteBrand(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
