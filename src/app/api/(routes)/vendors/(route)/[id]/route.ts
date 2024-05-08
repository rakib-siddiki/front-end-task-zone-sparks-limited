import { NextRequest } from 'next/server';
import {
    onDeleteVendor,
    onFindVendor,
    onUpdateVendor
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IVendor } from '../../types';
// get Vendor by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindVendor(id);
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
        const data = (await req.json()) as IVendor;
        const res = await onUpdateVendor(id, data);
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
        const res = await onDeleteVendor(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
