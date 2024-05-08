import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { ICategory } from '../types';
import { onCreateCategory, onFindSubCategories } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as ICategory;
        const res = await onCreateCategory(body);
        const data = (await res.json()) as ICategory;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindSubCategories();
        const data = (await res.json()) as ICategory;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
