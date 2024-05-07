import { ObjectId } from 'mongoose';

export default interface IVarient {
    code: string;
    size: string;
    color: string;
    image: string;
    stock: number;
    productId: ObjectId;
}
