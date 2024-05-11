import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { ISubCategory } from '../types';
import { onCreateSubCategory, onFindSubCategories } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as ISubCategory;
        const res = await onCreateSubCategory(body);
        const data = (await res.json()) as ISubCategory;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindSubCategories();
        const data = (await res.json()) as ISubCategory;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
