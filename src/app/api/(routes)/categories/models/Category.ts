import { Schema, model, models } from 'mongoose';
const { ObjectId } = Schema.Types;

const categorySchema = new Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, required: true },
        subCategoryId: [{ type: ObjectId }],
        subSlug: { type: String },
        imd: { type: String, required: true },
        imdSlug: { type: String, required: true }
    },
    { timestamps: true }
);
const CategoryModel = models?.categories ?? model('Category', categorySchema);
export default CategoryModel;
