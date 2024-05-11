import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { ISubCategory } from '../types';
import { SubCategorySchemaValidation } from '../validations';
import { SubCategoryModel } from '../models';
import { CategoryModel } from '../../categories/models';
import { ICategory } from '../../categories/types';
import { ObjectId } from 'mongoose';

export const onCreateSubCategory = async (payload: ISubCategory) => {
    try {
        const { error } = SubCategorySchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);

        await dbConnect();

        const isSubCategoryExisting = (await SubCategoryModel.findOne({
            ...payload
        })) as ISubCategory;

        if (isSubCategoryExisting) {
            return errorResponse('SubCategory already exists', 400);
        }

        const SubCategory = (await SubCategoryModel.create(
            payload
        )) as ISubCategory;
        if (!SubCategory) {
            return errorResponse('SubCategory not found', 404);
        }
        const category = (await CategoryModel.findByIdAndUpdate(
            payload.categoryId,
            {
                $push: {
                    subCategoryId: SubCategory._id as ObjectId
                },
                $set: { subSlug: SubCategory.slug }
            },
            { new: true }
        )) as ICategory;
        if (!category) return errorResponse('Category not found', 400);
        return successResponse(SubCategory);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindSubCategory = async (id: string) => {
    try {
        await dbConnect();
        const SubCategory = (await SubCategoryModel.findById(id).populate(
            'categoryId'
        )) as ISubCategory;
        if (!SubCategory) {
            return errorResponse('SubCategory not found', 404);
        }
        return successResponse(SubCategory);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindSubCategories = async () => {
    try {
        await dbConnect();
        const SubCategory = await SubCategoryModel.find({}).populate(
            'categoryId'
        );
        if (!SubCategory) {
            return errorResponse('SubCategory not found', 404);
        }
        return successResponse(SubCategory);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateSubCategory = async (
    _id: string,
    payload: ISubCategory
) => {
    try {
        const { error } = SubCategorySchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const SubCategory = (await SubCategoryModel.findOneAndUpdate(
            { _id },
            payload,
            {
                new: true
            }
        )) as ISubCategory;
        if (!SubCategory) {
            return errorResponse('SubCategory not found', 404);
        }
        return successResponse(SubCategory);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteSubCategory = async (_id: string) => {
    try {
        await dbConnect();
        const SubCategory = (await SubCategoryModel.findByIdAndDelete({
            _id
        })) as ISubCategory;

        if (!SubCategory) {
            return errorResponse('SubCategory not found', 404);
        }

        return successResponse('SubCategory deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete SubCategory');
    }
};
