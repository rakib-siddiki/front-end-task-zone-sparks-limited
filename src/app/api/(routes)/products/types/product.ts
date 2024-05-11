import { ObjectId } from 'mongoose';

export default interface IProduct {
    title: string;
    slug: string;
    category: ObjectId;
    brand: ObjectId;
    image: string;
    variants: ObjectId[];
    vendor: ObjectId;
    warranty: string;
    tags: string[];
    reviews: ObjectId[];
    sellingPrice: number;
    markedPrice: number;
    rating: number;
    newArrival: 'Yes' | 'No';
}
