import { NextRequest } from 'next/server';
import {
    onDeleteVandor,
    onFindVandor,
    onUpdateVandor
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IVandor } from '../../types';
// get Vandor by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindVandor(id);
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
        const data = (await req.json()) as IVandor;
        const res = await onUpdateVandor(id, data);
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
        const res = await onDeleteVandor(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
