import { ObjectId } from 'mongoose';

export default interface IVariant {
    save(): unknown;
    _id?: ObjectId;
    code: string;
    size: string;
    color: string;
    image: string;
    stock: number;
    productId: ObjectId;
}
