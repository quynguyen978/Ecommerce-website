import * as z from 'zod';

// create validate
export const checkoutSchema = z.object( {
      fullName: z.string().min(1, 'Full name is required.'),
      email: z.string().email('Invalid email address.'),
      phone: z.string().regex(/^\d+$/, 'Invalid phone number'),
      address: z.string().min(1, 'Address is required.'),
});