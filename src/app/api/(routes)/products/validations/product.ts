import { z } from 'zod';
const productSchemaValidation = z.object({
    title: z.string({ required_error: 'Title is required' }).min(1),
    slug: z
        .string()
        .min(1)
        .regex(/^[a-z0-9-]+$/),
    vendor: z.string({ required_error: 'please choose Vendor' }).min(1),
    sellingPrice: z
        .number({ required_error: 'Selling price is required' })
        .positive(),
    markedPrice: z.number().positive(),
    numReviews: z.number().positive(),
    rating: z.number().positive().min(0).max(5),
    newArrival: z.boolean()
});
export default productSchemaValidation;
