'use client'

import * as z from 'zod'
import { contactSchema } from '@/schemas/contact-schema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormField,
  FormControl,
  FormMessage,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { useTransition } from 'react'
import { Button } from './ui/button'
import { toast } from 'sonner'
import { sendContactEmail } from '@/server/send-contact-email'

const Contact = () => {
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      message: ''
    }
  })

  const handleContactSubmit = (values: z.infer<typeof contactSchema>) => {
    startTransition(() => {
      sendContactEmail(values).then((data) => {
        if (data.error) {
          toast.error(data.error)
        }
        if (data.success) {
          form.reset()
          toast.success(data.success)
        }
      })
    })
  }


  return (
    <section id='contact' className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Projects
          </div>
          <div className='space-y-10'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              Contact me
            </h2>

            <div className='mx-auto w-full max-w-[700px]'>
              <Form {...form}>
                <form
                  className='grid gap-4'
                  onSubmit={form.handleSubmit(handleContactSubmit)}
                >
                  <div className='grid sm:grid-cols-2 gap-4'>
                    <FormField
                      control={form.control}
                      name='name'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='John'
                              type='text'
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='lastname'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder='Doe'
                              type='text'
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='info@example.com'
                            type='email'
                            disabled={isPending}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder='Your message'
                            disabled={isPending}
                            rows={6}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    variant='secondary'
                    type='submit'
                    disabled={isPending}
                  >
                    Send
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
