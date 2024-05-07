import { z } from 'zod';

const CategoryValidationSchema = z.object({
    cat: z.string().min(1, 'Category is required'),
    catSlug: z.string().min(1, 'Category slug is required'),
    sub: z
        .array(
            z.object({
                type: z.literal('ObjectId'),
                ref: z.literal('SubCategory')
            })
        )
        .min(1, 'Subcategory is required'),
    subSlug: z.string().min(1, 'Subcategory slug is required'),
    imd: z.string().min(1, 'IMD is required'),
    imdSlug: z.string().min(1, 'IMD slug is required')
});
export default CategoryValidationSchema;
