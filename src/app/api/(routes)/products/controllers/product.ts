import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { IProduct } from '../types';
import { ProductSchemaValidation } from '../validations';
import { ProductModel } from '../models';

export const onCreateProduct = async (payload: IProduct) => {
    try {
        const { error } = ProductSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const isProductExisting = (await ProductModel.findOne(
            payload
        )) as IProduct;
        if (isProductExisting) {
            return errorResponse('Product already exists', 400);
        }
        const Product = (await ProductModel.create(payload)) as IProduct;
        if (!Product) return errorResponse('Product not found', 404);
        return successResponse(Product);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindProduct = async (id: string) => {
    try {
        await dbConnect();
        const Product = (await ProductModel.findById(id)?.populate([
            'variants',
            'category',
            'brand',
            'reviews',
            'vendor'
        ])) as IProduct;
        if (!Product) return errorResponse('Product not found', 404);
        return successResponse(Product);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindProducts = async () => {
    try {
        await dbConnect();
        const Product = await ProductModel.find({})?.populate([
            'variants',
            'category',
            'brand',
            'reviews'
        ]);
        if (!Product) return errorResponse('Product not found', 404);
        return successResponse(Product);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateProduct = async (_id: string, payload: IProduct) => {
    try {
        const { error } = ProductSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Product = (await ProductModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IProduct;
        if (!Product) return errorResponse('Product not found', 404);
        return successResponse(Product);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteProduct = async (_id: string) => {
    try {
        await dbConnect();
        const Product = (await ProductModel.findByIdAndDelete({
            _id
        })) as IProduct;
        if (!Product) return errorResponse('Product not found', 404);
        return successResponse('Product deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete Product');
    }
};
