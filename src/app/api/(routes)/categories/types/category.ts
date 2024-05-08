import { ObjectId } from 'mongoose';
export default interface ICategory {
    name: string;
    categorySlug: string;
    subCategoryId: ObjectId[];
    subSlug: string;
    imd: string;
    imdSlug: string;
}
