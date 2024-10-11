import * as z from 'zod';

// create validate for signIn Form
export const signInSchema = z.object({
      email: z.string().email('Invalid email address'),
      passWord: z.string().min(6, 'Password must be at least 6 characters'),
});