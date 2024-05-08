import { Schema, model, models } from 'mongoose';
const { ObjectId } = Schema.Types;

const productSchema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        category: { type: ObjectId, ref: 'Category' },
        brand: { type: ObjectId, ref: 'Brand' },
        Vendor: { type: ObjectId, ref: 'Vendor' },
        variants: [{ type: ObjectId, ref: 'Variant' }],
        tags: { type: [String] },
        reviews: [{ type: ObjectId, ref: 'Review' }],
        warranty: { type: String },
        sellingPrice: { type: Number, required: true },
        markedPrice: { type: Number, required: true },
        numReviews: { type: Number, required: true },
        rating: { type: Number, required: true, decimal: true },
        newArrival: { type: Boolean, required: true }
    },
    { timestamps: true }
);

const Product = models?.Product ?? model('Product', productSchema);
export default Product;
