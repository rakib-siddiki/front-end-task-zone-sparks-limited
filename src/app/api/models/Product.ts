import { Schema, model, models } from 'mongoose';
const { ObjectId } = Schema.Types;

const productSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: ObjectId, ref: 'Category' },
    brand: { type: ObjectId, ref: 'Brand' },
    variants: [{ type: ObjectId, ref: 'Variant' }],
    sellingPrice: { type: Number, required: true, decimal: true },
    markedPrice: { type: Number, required: true, decimal: true },
    numReviews: { type: Number, required: true },
    rating: { type: Number, required: true, decimal: true },
    newArrival: { type: Boolean, required: true }
});

export const Product = models?.Product ?? model('Product', productSchema);
