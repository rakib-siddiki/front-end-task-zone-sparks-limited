import { z } from 'zod';
const productSchemaValidation = z.object({
    title: z.string({ required_error: 'Title is required' }).min(1),
    slug: z
        .string({ required_error: 'Slug is required' })
        .min(1)
        .regex(/^[a-z0-9-]+$/),
    vendor: z.string({ required_error: 'please choose Vendor' }).min(1),
    sellingPrice: z
        .number({ required_error: 'Selling price is required' })
        .positive(),
    // image: z.string({ required_error: 'Image is required' }).min(1),
    markedPrice: z.number().positive(),
    rating: z.number().positive().min(0).max(5),
    newArrival: z.enum(['yes', 'no']).default('no')
});
export const productUpdateSchema = z.object({
    _id: z.string(),
    title: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    warranty: z.string(),
    image: z.string().url(),
    sellingPrice: z.number(),
    markedPrice: z.number(),
    rating: z.number(),
    newArrival: z.enum(['yes', 'no']).default('no'),
    category: z.object({
        _id: z.string(),
        name: z.string(),
        slug: z.string(),
        subCategoryId: z.array(z.string()),
        imd: z.string(),
        imdSlug: z.string(),
        createdAt: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        updatedAt: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        __v: z.number(),
        subSlug: z.string()
    }),
    brand: z.object({
        _id: z.string(),
        name: z.string(),
        slug: z.string(),
        __v: z.number()
    }),
    vendor: z.object({
        _id: z.string(),
        shopLogo: z.string().url(),
        shopName: z.string(),
        createdAt: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        updatedAt: z
            .string()
            .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
        __v: z.number()
    }),
    variants: z.array(
        z.object({
            _id: z.string(),
            code: z.string(),
            size: z.string(),
            color: z.string(),
            image: z.string().url(),
            stock: z.number(),
            productId: z.string(),
            __v: z.number()
        })
    ),
    reviews: z.array(z.unknown()),
    createdAt: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
    updatedAt: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/),
    __v: z.number()
});
export default productSchemaValidation;
