import { Schema, model, models } from 'mongoose';
const { ObjectId } = Schema.Types;

const categorySchema = new Schema(
    {
        cat: { type: String, required: true },
        catSlug: { type: String, required: true },
        sub: [{ type: ObjectId, required: true }],
        subSlug: { type: String, required: true },
        imd: { type: String, required: true },
        imdSlug: { type: String, required: true }
    },
    { timestamps: true }
);

const CategoryModel = models?.Category ?? model('Category', categorySchema);
export default CategoryModel;
