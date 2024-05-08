import { ObjectId } from 'mongoose';

export default interface ISubCategory {
    _id?: ObjectId;
    title: string;
    slug: string;
    imd: string;
    imdSlug: string;
    categoryId: ObjectId;
}
