import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { IVendor } from '../types';
import { onCreateVendor, onFindVendors } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IVendor;
        const res = await onCreateVendor(body);
        const data = (await res.json()) as IVendor;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindVendors();
        const data = (await res.json()) as IVendor;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
