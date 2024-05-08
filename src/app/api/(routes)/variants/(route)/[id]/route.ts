import { NextRequest } from 'next/server';
import {
    onDeleteVariant,
    onFindVariant,
    onUpdateVariant
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IVariant } from '../../types';
// get Variant by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindVariant(id);
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
        const data = (await req.json()) as IVariant;
        const res = await onUpdateVariant(id, data);
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
        const res = await onDeleteVariant(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
