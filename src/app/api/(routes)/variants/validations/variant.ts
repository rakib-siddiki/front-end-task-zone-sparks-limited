import { z } from 'zod';

const VariantSchemaValidation = z.object({
    code: z.string({ required_error: 'Code is required' }).min(1),
    size: z.string({ required_error: 'Size is required' }).min(1),
    color: z.string({ required_error: 'Color is required' }).min(1),
    image: z.string({ required_error: 'Image is required' }).min(1),
    stock: z
        .number({ required_error: 'Stock is required' })
        .int('Stock must be an integer')
        .positive('Stock must be a positive number'),
    productId: z.string({ required_error: 'Product Id is required' }).min(1)
});

export default VariantSchemaValidation;
