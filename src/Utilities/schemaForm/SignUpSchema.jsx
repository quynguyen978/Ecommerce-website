import * as z from 'zod';

// create validate for the signUp form
export const signUpSchema = z.object({
      full_name: z.string().min(1, 'Full nmae is requred').max(50),
      email: z.string().email('Invalid eamil address'),
      passWord: z.string().min(6, 'Password must be at least 6 characters'),
      phone: z.string().regex(/^\d+$/, 'Invalid phone number'),
});