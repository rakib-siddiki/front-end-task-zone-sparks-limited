import { z } from 'zod';
export const VendorValidationSchema = z.object({
    shopLogo: z.string({ required_error: 'shop_logo is required' }).min(1),
    shopName: z.string({ required_error: 'name is required' }).min(1)
});
export default VendorValidationSchema;
