import { z } from 'zod';

const VariantValidationSchema = z.object({
    code: z.string().min(1, 'Code is required'),
    size: z.string().min(1, 'Size is required'),
    color: z.string().min(1, 'Color is required'),
    image: z.string().min(1, 'Image is required'),
    stock: z
        .number()
        .int('Stock must be an integer')
        .positive('Stock must be a positive number'),
    productId: z.object({
        type: z.literal('ObjectId'),
        ref: z.literal('Product')
    })
});

export default VariantValidationSchema;
