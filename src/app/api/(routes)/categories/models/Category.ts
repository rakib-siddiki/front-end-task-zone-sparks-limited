import { Model, Schema, model, models } from 'mongoose';
import { ICategory } from '../types';
const { ObjectId } = Schema.Types;

const categorySchema = new Schema<ICategory>(
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
const CategoryModel =
    (models?.Category as Model<Document & ICategory>) ||
    model('Category', categorySchema);
export default CategoryModel;
