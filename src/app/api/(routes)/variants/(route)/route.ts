import { dbConnect, errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { IVariant } from '../types';
import { onCreateVariant, onFindVariants } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        await dbConnect();
        const body = (await req.json()) as IVariant;
        const res = await onCreateVariant(body);
        const data = (await res.json()) as IVariant;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        await dbConnect();
        const res = await onFindVariants();
        const data = (await res.json()) as IVariant;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
