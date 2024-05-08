import { Model, Schema, model, models } from 'mongoose';
import { IProduct } from '../types';
const { ObjectId } = Schema.Types;

const productSchema = new Schema<IProduct>(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        tags: { type: [String] },
        warranty: { type: String },
        sellingPrice: { type: Number, required: true },
        markedPrice: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        rating: { type: Number, required: true, decimal: true },
        newArrival: { type: Boolean, required: true },
        category: { type: ObjectId, ref: 'Category' },
        brand: { type: ObjectId, ref: 'Brand' },
        vendor: { type: ObjectId, ref: 'Vendor' },
        variants: [{ type: ObjectId, ref: 'Variant' }],
        reviews: [{ type: ObjectId, ref: 'Review' }]
    },
    { timestamps: true }
);

const Product =
    (models?.Product as Model<Document & IProduct>) ??
    model('Product', productSchema);
export default Product;
