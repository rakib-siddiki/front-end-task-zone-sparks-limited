import { NextResponse } from 'next/server';
import { ZodError } from 'zod';
export * from './dbConf';

export const successResponse = (data: unknown) => {
    return NextResponse.json(data, { status: 200 });
};

export const errorResponse = (message: string, status: number = 500) => {
    return NextResponse.json({ message }, { status });
};
export const zodErrorResponse = (error: ZodError) => {
    const errorMessage = error.issues.map((issue) => issue.message).join(', ');
    return errorResponse(errorMessage, 400);
};
