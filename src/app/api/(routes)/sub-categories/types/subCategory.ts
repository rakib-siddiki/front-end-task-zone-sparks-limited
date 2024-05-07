import { ObjectId } from 'mongoose';

export default interface ISubCategory {
    title: string;
    slug: string;
    imd: string;
    imdSlug: string;
    catId: ObjectId;
}
