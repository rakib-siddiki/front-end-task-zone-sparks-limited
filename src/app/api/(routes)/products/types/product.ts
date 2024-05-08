import { ObjectId } from 'mongoose';

export default interface IProduct {
    title: string;
    slug: string;
    category: ObjectId;
    brand: ObjectId;
    variants: ObjectId[];
    vendor: ObjectId;
    warranty: string;
    tags: string[];
    reviews: ObjectId[];
    sellingPrice: number;
    markedPrice: number;
    numReviews: number;
    rating: number;
    newArrival: boolean;
}
