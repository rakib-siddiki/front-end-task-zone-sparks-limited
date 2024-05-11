import { errorResponse } from '@/app/api/helpers';
import { NextRequest, NextResponse } from 'next/server';
import { IReviews } from '../types';
import { onCreateReviews, onFindReviewss } from '../controllers';

export const POST = async (req: NextRequest) => {
    try {
        const body = (await req.json()) as IReviews;
        const res = await onCreateReviews(body);
        const data = (await res.json()) as IReviews;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal server error');
    }
};
export const GET = async () => {
    try {
        const res = await onFindReviewss();
        const data = (await res.json()) as IReviews;
        return NextResponse.json(data);
    } catch (err) {
        return errorResponse('Internal Server error');
    }
};
