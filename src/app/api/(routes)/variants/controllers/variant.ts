import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { IVariant } from '../types';
import { VariantSchemaValidation } from '../validations';
import { VariantModel } from '../models';
import { IProduct } from '../../products/types';
import { ProductModel } from '../../products/models';
import { ObjectId } from 'mongoose';

export const onCreateVariant = async (payload: IVariant) => {
    try {
        const { error } = VariantSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const isVariantExisting = (await VariantModel.findOne(
            payload
        )) as IVariant;
        if (isVariantExisting)
            return errorResponse('Variant already exists', 400);
        const Variant = new VariantModel(payload) as IVariant;
        if (!Variant) return errorResponse('Variant not found', 404);
        const Product = (await ProductModel.findByIdAndUpdate(
            { _id: payload.productId },
            { $push: { variants: Variant._id as ObjectId } }
        )) as IProduct;
        if (!Product) return errorResponse('Product not found', 404);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await Variant.save();
        return successResponse(Variant);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindVariant = async (id: string) => {
    try {
        await dbConnect();
        const Variant = (await VariantModel.findById(id)) as IVariant;
        if (!Variant) return errorResponse('Variant not found', 404);
        return successResponse(Variant);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindVariants = async () => {
    try {
        await dbConnect();
        const Variant = await VariantModel.find({});
        if (!Variant) return errorResponse('Variant not found', 404);
        return successResponse(Variant);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateVariant = async (_id: string, payload: IVariant) => {
    try {
        const { error } = VariantSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Variant = (await VariantModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IVariant;
        if (!Variant) return errorResponse('Variant not found', 404);
        return successResponse(Variant);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteVariant = async (_id: string) => {
    try {
        await dbConnect();
        (await ProductModel.findOneAndUpdate(
            { variants: _id },
            { $pull: { variants: _id } }
        )) as IProduct;
        const Variant = (await VariantModel.findByIdAndDelete({
            _id
        })) as IVariant;
        if (!Variant) return errorResponse('Variant not found', 404);
        return successResponse('Variant deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete Variant');
    }
};
