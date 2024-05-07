import { z } from 'zod';

const SubCategoryValidationSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    slug: z.string().min(1, 'Slug is required').url('Slug must be a valid URL'),
    imd: z.string().min(1, 'IMD is required'),
    imdSlug: z.string().min(1, 'IMD slug is required'),
    catId: z.object({
        type: z.literal('ObjectId'),
        ref: z.literal('Category')
    })
});
export default SubCategoryValidationSchema;
