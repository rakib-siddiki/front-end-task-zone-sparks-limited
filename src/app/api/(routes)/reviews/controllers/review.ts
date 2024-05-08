import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { IReviews } from '../types';
import { ReviewsSchemaValidation } from '../validations';
import { ReviewsModel } from '../models';

export const onCreateReviews = async (payload: IReviews) => {
    try {
        const { error } = ReviewsSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Reviews = (await ReviewsModel.create(payload)) as IReviews;
        if (!Reviews) return errorResponse('SubCategory not found', 404);
        return successResponse(Reviews);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindReviews = async (id: string) => {
    try {
        await dbConnect();
        const Reviews = (await ReviewsModel.findById(id)) as IReviews;
        if (!Reviews) return errorResponse('SubCategory not found', 404);
        return successResponse(Reviews);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindReviewss = async () => {
    try {
        await dbConnect();
        const Reviews = await ReviewsModel.find({});
        if (!Reviews) return errorResponse('SubCategory not found', 404);
        return successResponse(Reviews);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateReviews = async (_id: string, payload: IReviews) => {
    try {
        const { error } = ReviewsSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Reviews = (await ReviewsModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IReviews;
        if (!Reviews) return errorResponse('SubCategory not found', 404);
        return successResponse(Reviews);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteReviews = async (_id: string) => {
    try {
        await dbConnect();
        const Reviews = (await ReviewsModel.findByIdAndDelete({
            _id
        })) as IReviews;
        if (!Reviews) return errorResponse('Reviews not found', 404);
    } catch (error) {
        return errorResponse('Failed to delete Reviews');
    }
};
