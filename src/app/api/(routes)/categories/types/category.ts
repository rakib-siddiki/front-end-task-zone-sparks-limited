import { ObjectId } from 'mongoose';
export default interface ICategory {
    cat: string;
    catSlug: string;
    sub: ObjectId[];
    subSlug: string;
    imd: string;
    imdSlug: string;
}
