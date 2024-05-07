import { Schema, model, models } from 'mongoose';

const variantSchema = new Schema({
    code: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product' }
});

const VarientModel = models?.Varient ?? model('Varient', variantSchema);
export default VarientModel;