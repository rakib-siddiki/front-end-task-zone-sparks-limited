import { z } from 'zod';

const BrandSchemaValidation = z.object({
    name: z.string({ required_error: 'Name is required' }).min(1),
    slug: z.string({ required_error: 'Slug is required' }).min(1)
});

export default BrandSchemaValidation;
