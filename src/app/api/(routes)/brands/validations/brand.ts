import { z } from 'zod';

const BrandValidationSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    slug: z.string().min(1, 'Slug is required')
});

export default BrandValidationSchema;
