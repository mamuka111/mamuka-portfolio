'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CardComponent from '@/components/CardComponent';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('scrolled-down-section2');
      if (section) {
        const { top } = section.getBoundingClientRect();
        const isVisible = top >= 0 && top <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section id='scrolled-down-section2' className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Work Experience
          </div>
          <div className='space-y-10'>
          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={{
              hidden: {
                scale: .8,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: .2
                }
              },
            }}>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              My Work Experience
            </h2>
            </motion.div>
            <div className='flex gap-5 items-center justify-center flex-wrap'>
              <CardComponent
                title='Making Freelance projects'
                companyName='UpWork'
                dateFrom='2024/01'
                dateTo='Current'
                locationCity='Tbilisi'
                locationCountry='Georgia'
              >
                <p className='text-muted-foreground'>
                I&apos;ve Undertaken freelance projects on Upwork, refining my web development skills through diverse collaborations.
                 Prioritizing quality and meeting deadlines, I&apos;ve garnered valuable experience in client communication and project management, enriching both my technical proficiency and remote work capabilities.
                </p>
              </CardComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
