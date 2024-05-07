import { Schema, model, models } from 'mongoose';
import { IVandor } from '../types';

const vendorSchema = new Schema<IVandor>(
    {
        shopLogo: { type: String, required: true },
        shopName: { type: String, required: true }
    },
    { timestamps: true }
);

const VendorModel = models?.Vendor ?? model('Vendor', vendorSchema);
export default VendorModel;
