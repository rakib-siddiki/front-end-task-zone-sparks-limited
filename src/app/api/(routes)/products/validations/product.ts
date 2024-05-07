import { z } from 'zod';
const productSchemaValidation = z.object({
    title: z.string().min(1),
    slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9-]+$/),
    category: z.object({
        type: z.literal('ObjectId'),
        ref: z.literal('Category')
    }),
    brand: z.object({
        type: z.literal('ObjectId'),
        ref: z.literal('Brand')
    }),
    variants: z.array(
        z.object({
            type: z.literal('ObjectId'),
            ref: z.literal('Variant')
        })
    ),
    sellingPrice: z.number().int().positive(),
    markedPrice: z.number().int().positive(),
    numReviews: z.number().int().positive(),
    rating: z.number().int().positive().min(0).max(5),
    newArrival: z.boolean()
});
export default productSchemaValidation;
