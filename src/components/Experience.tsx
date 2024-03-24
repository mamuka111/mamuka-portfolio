import CardComponent from '@/components/CardComponent'

const Experience = () => {
  return (
    <section className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Work Experience
          </div>
          <div className='space-y-10'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              My Work Experience
            </h2>
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
