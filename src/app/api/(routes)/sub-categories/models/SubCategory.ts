import { Schema, model, models } from 'mongoose';
const { ObjectId } = Schema.Types;

const subCategorySchema = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        imd: { type: String, required: true },
        imdSlug: { type: String, required: true },
        catId: { type: ObjectId, ref: 'Category' }
    },
    { timestamps: true }
);

const SubCategoryModel =
    models?.SubCategory ?? model('SubCategory', subCategorySchema);
export default SubCategoryModel;
