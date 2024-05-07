import { Schema, model, models } from 'mongoose';
const { ObjectId } = Schema.Types;

const subCategorySchema = new Schema(
    {
        id: { type: Number, required: true },
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        imd: { type: String, required: true },
        imdSlug: { type: String, required: true },
        catId: { type: ObjectId, ref: 'Category' }
    },
    { timestamps: true }
);

export const SubCategory =
    models?.SubCategory ?? model('SubCategory', subCategorySchema);
