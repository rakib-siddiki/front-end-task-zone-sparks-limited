import { Schema, model, models } from 'mongoose';
import { ISubCategory } from '../types';
const { ObjectId } = Schema.Types;

const subCategorySchema = new Schema<ISubCategory>(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true },
        imd: { type: String, required: true },
        imdSlug: { type: String, required: true },
        categoryId: { type: ObjectId, ref: 'Category', required: true }
    },
    { timestamps: true }
);

const SubCategoryModel =
    models?.SubCategory ?? model('SubCategory', subCategorySchema);
export default SubCategoryModel;
