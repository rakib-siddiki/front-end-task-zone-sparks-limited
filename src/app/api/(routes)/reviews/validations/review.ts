import { z } from 'zod';
export const ReviewsSchemaValidation = z.object({
    user: z.string({ required_error: 'user is required' }).min(1),
    title: z
        .string({ required_error: 'title is required' })
        .min(1)
        .max(100)
        .min(1),
    product: z.string({ required_error: 'product is required' }).min(1),
    rating: z.number().min(0).max(5)
});
export default ReviewsSchemaValidation;
