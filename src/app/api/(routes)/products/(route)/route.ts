import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { IProduct } from '../types';
import { onCreateProduct, onFindProducts } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IProduct;
        const res = await onCreateProduct(body);
        const data = (await res.json()) as IProduct;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindProducts();
        const data = (await res.json()) as IProduct;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
