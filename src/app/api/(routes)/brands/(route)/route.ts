import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { IBrand } from '../types';
import { onCreateBrand, onFindBrands } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IBrand;
        const res = await onCreateBrand(body);
        const data = (await res.json()) as IBrand;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindBrands();
        const data = (await res.json()) as IBrand;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
