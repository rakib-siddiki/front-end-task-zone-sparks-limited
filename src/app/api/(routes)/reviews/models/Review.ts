import { Schema, model, models } from 'mongoose';
import { IReviews } from '../types';
const reviewSchema = new Schema<IReviews>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            minlength: 1,
            maxlength: 100,
            required: true
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        }
    },
    { timestamps: true }
);

const ReviewModel = models?.Review ?? model('Review', reviewSchema);
export default ReviewModel;
