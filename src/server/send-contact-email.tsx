'use server'
import * as z from 'zod'
import { contactSchema } from '@/schemas/contact-schema'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactEmail = async (
  values: z.infer<typeof contactSchema>
) => {
  const validatedFields = contactSchema.safeParse(values)
  if (!validatedFields.success) return { error: 'Error validating fields!' }
  const { name, lastname, email, message } = validatedFields.data
  console.log(name, lastname, email, message)
  try {
    await resend.emails.send({
      from: 'Mamuka Avsajanishvili Portfolio <onboarding@resend.dev>',
      to: 'mavsajanishvili61@gmail.com',
      subject: 'Contact Form',
      html: `<h1>Hello, Mamuka</h1><br>
            <p>You recieved a new email from your portfolio from:</p> 
            <strong>Name:</strong> ${name}<br>
            <strong>Lastname:</strong> ${lastname}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Strong:</strong> ${message}`
    })
    return {
      success: 'Your email was sent successfully! I will contact you soon!'
    }
  } catch (err) {
    return { error: 'Something went wrong! Please try again!' }
  }
}
