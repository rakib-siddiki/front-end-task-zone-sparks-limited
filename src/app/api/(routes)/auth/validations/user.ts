// user.validation.ts
import { z } from 'zod';

const userValidationSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email').min(1, 'Email is required'),
    image: z.string().optional(),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .optional()
});

export default userValidationSchema;
