import { ObjectId } from 'mongoose';

export default interface IReviews {
    user: ObjectId;
    title: string;
    product: ObjectId;
    rating: number;
}
