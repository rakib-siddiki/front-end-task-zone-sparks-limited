import { z } from 'zod';

const CategorySchemaValidation = z.object({
    name: z.string({ required_error: 'Name is required' }).min(1),
    slug: z.string({ required_error: 'Category slug is required' }).min(1),
    imd: z.string({ required_error: 'IMD is required' }).min(1),
    imdSlug: z.string({ required_error: 'IMD slug is required' }).min(1)
});
export default CategorySchemaValidation;
