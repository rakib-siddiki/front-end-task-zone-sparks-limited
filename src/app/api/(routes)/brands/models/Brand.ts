import { Model, Schema, model, models } from 'mongoose';
import { IBrand } from '../types';

const brandSchema = new Schema<IBrand>({
    name: { type: String, required: true },
    slug: { type: String, required: true }
});

const BrandModel =
    (models?.Brand as Model<Document & IBrand>) ?? model('Brand', brandSchema);
export default BrandModel;
