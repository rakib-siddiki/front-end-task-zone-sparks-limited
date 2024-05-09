import { z } from 'zod';

const requiredString = z
    .string({ required_error: 'This field is required' })
    .min(1);
const positiveNumber = z.number().positive();
const slugRegex = /^[a-z0-9-]+$/;

const productSchemaValidation = z.object({
    title: requiredString,
    slug: requiredString.regex(slugRegex),
    vendor: requiredString,
    sellingPrice: positiveNumber,
    markedPrice: positiveNumber,
    numReviews: positiveNumber,
    rating: positiveNumber.min(0).max(5),
    newArrival: z.boolean()
});

interface ICategoryResponse {
    _id: string;
    name: string;
    slug: string;
    subCategoryId: string[];
    imd: string;
    imdSlug: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface IBrandResponse {
    _id: string;
    name: string;
    slug: string;
    __v: number;
}

interface IVendorResponse {
    _id: string;
    shopLogo: string;
    shopName: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface IVariantResponse {
    _id: string;
    title: string;
    slug: string;
    price: number;
}

interface IReviewResponse {
    _id: string;
    user: string;
    title: string;
    product: string;
    rating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface IProductResponse {
    _id?: string;
    title: string;
    slug: string;
    image: string;
    tags?: string[];
    warranty: string;
    sellingPrice: number;
    markedPrice: number;
    numReviews: number;
    rating: number;
    newArrival: 'Yes' | 'No';
    category: ICategoryResponse;
    brand: IBrandResponse;
    vendor: IVendorResponse;
    variants?: IVariantResponse[];
    reviews?: IReviewResponse[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}
export { productSchemaValidation };
type ProductValidation = z.infer<typeof productSchemaValidation>;
export type {
    IProductResponse,
    ICategoryResponse,
    IBrandResponse,
    IVendorResponse,
    IVariantResponse,
    IReviewResponse,
    ProductValidation
};
