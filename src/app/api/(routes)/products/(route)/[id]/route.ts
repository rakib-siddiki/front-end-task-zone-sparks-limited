import { NextRequest } from 'next/server';
import {
    onDeleteProduct,
    onFindProduct,
    onUpdateProduct
} from '../../controllers';
import { errorResponse } from '@/app/api/helpers';
import { IProduct } from '../../types';
// get Product by id
export const GET = async (
    req: NextRequest,
    { params }: { params: { id: string } }
) => {
    try {
        const { id } = params;
        const res = await onFindProduct(id);
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
        const data = (await req.json()) as IProduct;
        const res = await onUpdateProduct(id, data);
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
        const res = await onDeleteProduct(id);

        return res;
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
