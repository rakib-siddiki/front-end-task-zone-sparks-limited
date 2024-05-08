import {
    dbConnect,
    errorResponse,
    successResponse,
    zodErrorResponse
} from '@/app/api/helpers';
import { IVendor } from '../types';
import { VendorSchemaValidation } from '../validations';
import { VendorModel } from '../models';

export const onCreateVendor = async (payload: IVendor) => {
    try {
        const { error } = VendorSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const isVendorExisting = (await VendorModel.findOne(
            payload
        )) as IVendor;
        if (isVendorExisting)
            return errorResponse('Vendor already exists', 400);
        const Vendor = (await VendorModel.create(payload)) as IVendor;
        if (!Vendor) return errorResponse('Vendor not found', 404);
        return successResponse(Vendor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindVendor = async (id: string) => {
    try {
        await dbConnect();
        const Vendor = (await VendorModel.findById(id)) as IVendor;
        if (!Vendor) return errorResponse('Vendor not found', 404);
        return successResponse(Vendor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onFindVendors = async () => {
    try {
        await dbConnect();
        const Vendor = await VendorModel.find({});
        if (!Vendor) return errorResponse('Vendor not found', 404);
        return successResponse(Vendor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onUpdateVendor = async (_id: string, payload: IVendor) => {
    try {
        const { error } = VendorSchemaValidation.safeParse(payload);
        if (error) return zodErrorResponse(error);
        await dbConnect();
        const Vendor = (await VendorModel.findOneAndUpdate({ _id }, payload, {
            new: true
        })) as IVendor;
        if (!Vendor) return errorResponse('Vendor not found', 404);
        return successResponse(Vendor);
    } catch (error) {
        return errorResponse('Internal server error', 500);
    }
};

export const onDeleteVendor = async (_id: string) => {
    try {
        await dbConnect();
        const Vendor = (await VendorModel.findByIdAndDelete({
            _id
        })) as IVendor;
        if (!Vendor) return errorResponse('Vendor not found', 404);
        return successResponse('Vendor deleted successfully');
    } catch (error) {
        return errorResponse('Failed to delete Vendor');
    }
};
