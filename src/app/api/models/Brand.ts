import { Schema, model, models } from 'mongoose';

const brandSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true }
});

export const Brand = models?.Brand ?? model('Brand', brandSchema);
