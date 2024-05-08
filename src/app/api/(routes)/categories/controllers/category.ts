import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { ICategory } from '../types';
import { CategorySchemaValidation } from '../validations';
import { CategoryModel } from '../models';

export const onCreateCategory = async (payload: ICategory) => {
    try {
        const { error } = CategorySchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);

        await dbConnect();

        const isCategoryExisting = (await CategoryModel.findOne(
            payload
        )) as ICategory;

        if (isCategoryExisting) {
            return errorResponse('Category already exists', 400);
        }
        const Category = (await CategoryModel.create(payload)) as ICategory;
        return successResponse(Category);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindCategory = async (id: string) => {
    try {
        await dbConnect();
        const Category = (await CategoryModel.findById(id).populate(
            'subCategoryId'
        )) as ICategory;
        if (!Category) return errorResponse('Category not found', 404);
        return successResponse(Category);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindSubCategories = async () => {
    try {
        await dbConnect();
        const Category = await CategoryModel.find({}).populate('subCategoryId');
        if (!Category) return errorResponse('Category not found', 404);
        return successResponse(Category);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateCategory = async (_id: string, payload: ICategory) => {
    try {
        const { error } = CategorySchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Category = (await CategoryModel.findOneAndUpdate(
            { _id },
            payload,
            {
                new: true
            }
        )) as ICategory;
        if (!Category) return errorResponse('Category not found', 404);
        return successResponse(Category);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteCategory = async (_id: string) => {
    try {
        await dbConnect();
        const Category = (await CategoryModel.findByIdAndDelete({
            _id
        })) as ICategory;

        if (!Category) {
            return errorResponse('Category not found', 404);
        }

        return successResponse('Category deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete Category');
    }
};
