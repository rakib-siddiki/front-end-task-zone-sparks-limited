import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { IVandor } from '../types';
import { onCreateVandor, onFindVandors } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IVandor;
        const res = await onCreateVandor(body);
        const data = (await res.json()) as IVandor;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindVandors();
        const data = (await res.json()) as IVandor;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
