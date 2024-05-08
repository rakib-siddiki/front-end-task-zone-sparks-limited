import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { IVandor } from '../types';
import { VandorSchemaValidation } from '../validations';
import { VandorModel } from '../models';

export const onCreateVandor = async (payload: IVandor) => {
    try {
        const { error } = VandorSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const isVandorExisting = (await VandorModel.findOne(
            payload
        )) as IVandor;

        if (isVandorExisting)
            return errorResponse('Vandor already exists', 400);

        const Vandor = (await VandorModel.create(payload)) as IVandor;
        if (!Vandor) return errorResponse('SubCategory not found', 404);
        return successResponse(Vandor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindVandor = async (id: string) => {
    try {
        await dbConnect();
        const Vandor = (await VandorModel.findById(id)) as IVandor;
        if (!Vandor) return errorResponse('SubCategory not found', 404);
        return successResponse(Vandor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindVandors = async () => {
    try {
        await dbConnect();
        const Vandor = await VandorModel.find({});
        if (!Vandor) return errorResponse('SubCategory not found', 404);
        return successResponse(Vandor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateVandor = async (_id: string, payload: IVandor) => {
    try {
        const { error } = VandorSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Vandor = (await VandorModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IVandor;
        if (!Vandor) return errorResponse('SubCategory not found', 404);
        return successResponse(Vandor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteVandor = async (_id: string) => {
    try {
        await dbConnect();
        const Vandor = (await VandorModel.findByIdAndDelete({
            _id
        })) as IVandor;
        if (!Vandor) return errorResponse('Vandor not found', 404);
        return successResponse('Vandor deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete Vandor');
    }
};
