import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { IBrand } from '../types';
import { BrandSchemaValidation } from '../validations';
import { BrandModel } from '../models';

export const onCreateBrand = async (payload: IBrand) => {
    try {
        const { error } = BrandSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const isBrandExisting = (await BrandModel.findOne(payload)) as IBrand;
        if (isBrandExisting) return errorResponse('Brand already exists', 400);
        const Brand = (await BrandModel.create(payload)) as IBrand;
        if (!Brand) return errorResponse('Brand not found', 404);
        return successResponse(Brand);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindBrand = async (id: string) => {
    try {
        await dbConnect();
        const Brand = (await BrandModel.findById(id)) as IBrand;
        if (!Brand) return errorResponse('Brand not found', 404);
        return successResponse(Brand);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindBrands = async () => {
    try {
        await dbConnect();
        const Brand = await BrandModel.find({});
        if (!Brand) return errorResponse('Brand not found', 404);
        return successResponse(Brand);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateBrand = async (_id: string, payload: IBrand) => {
    try {
        const { error } = BrandSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Brand = (await BrandModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IBrand;
        if (!Brand) return errorResponse('Brand not found', 404);
        return successResponse(Brand);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteBrand = async (_id: string) => {
    try {
        await dbConnect();
        const Brand = (await BrandModel.findByIdAndDelete({
            _id
        })) as IBrand;
        if (!Brand) return errorResponse('Brand not found', 404);
    } catch (error) {
        return errorResponse('Failed to delete Brand');
    }
};
