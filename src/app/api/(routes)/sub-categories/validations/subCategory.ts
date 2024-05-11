import { z } from 'zod';

const SubCategorySchemaValidation = z.object({
    title: z.string({ required_error: 'Title is required' }).min(1),
    slug: z.string({ required_error: 'Slug is required' }).min(1),
    imd: z.string({ required_error: 'IMD is required' }).min(1),
    imdSlug: z.string({ required_error: 'IMD slug is required' }).min(1),
    categoryId: z.string({ required_error: 'Category is required' }).min(1)
});
export default SubCategorySchemaValidation;
