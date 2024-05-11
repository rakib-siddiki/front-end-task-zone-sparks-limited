import { Model, Schema, model, models } from 'mongoose';
import { IVariant } from '../types';

const variantSchema = new Schema<IVariant>({
    code: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' }
});

const VariantModel =
    (models?.Variant as Model<Document & IVariant>) ??
    model('Variant', variantSchema);
export default VariantModel;
