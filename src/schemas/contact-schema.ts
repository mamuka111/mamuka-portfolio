import * as z from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name is required' }),
  lastname: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Email is required' }),
  message: z.string()
})
