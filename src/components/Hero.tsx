'use client'
import { Button } from './ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <section className='w-full py-6 flex items-center justify-center md:py-12 lg:py-20 xl:py-24'>
      <div className='container grid items-center gap-5 px-4 md:px-6'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Introduction
          </div>
          <div className='space-y-2'>
          <h5 className='text-xl text-muted-foreground'>Hi I&apos;m</h5>
          <motion.div initial="hidden" animate="visible"variants={{
     hidden: {
    scale: .8,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .1
    }
  },
}}>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-3xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              Mamuka Avsajanishvili
            </h1>
            </motion.div>
            <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              A <strong>Software Engineer</strong> based in Tbilisi, Georgia.
            </p>
          </div>
          <div>
            <Link href='#contact'>
              <Button >Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero