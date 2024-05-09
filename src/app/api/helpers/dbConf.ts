/* eslint-disable */
// @ts-nocheck
import { MONGODB_URI } from '@/configs/env';
import mongoose from 'mongoose';
import { ProductModel } from '../(routes)/products/models';
import { VariantModel } from '../(routes)/variants/models';
import { CategoryModel } from '../(routes)/categories/models';
import { BrandModel } from '../(routes)/brands/models';
import ReviewModel from '../(routes)/reviews/models/Review';
import { VendorModel } from '../(routes)/vendors/models';

const MONGO_URI = MONGODB_URI;
const cached: {
    connection?: typeof mongoose;
    promise?: Promise<typeof mongoose>;
} = {};
export const dbConnect = async () => {
    if (cached.connection) {
        return cached.connection;
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then((mongoose) => {
                // https://github.com/Automattic/mongoose/issues/6890
                mongoose.models = {
                    BrandModel,
                    CategoryModel,
                    ProductModel,
                    ReviewModel,
                    VendorModel,
                    VariantModel
                };
                mongoose.model('Product', ProductModel);
                mongoose.model('Variant', VariantModel);
                mongoose.model('Category', CategoryModel);
                mongoose.model('Brand', BrandModel);
                mongoose.model('Review', ReviewModel);
                mongoose.model('Vendor', VendorModel);
                return mongoose;
            })
            .catch((error) => {
                // console.error(
                //   'MongoDB connection error. Please make sure MongoDB is running.',
                //   error.message,
                // );
            });
    }

    return cached.promise;
};
