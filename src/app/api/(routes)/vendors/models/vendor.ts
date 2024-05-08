import { Schema, model, models } from 'mongoose';
import { IVendor } from '../types';

const vendorSchema = new Schema<IVendor>(
    {
        shopLogo: { type: String, required: true },
        shopName: { type: String, required: true }
    },
    { timestamps: true }
);

const VendorModel = models?.vendors ?? model('Vendor', vendorSchema);
export default VendorModel;
