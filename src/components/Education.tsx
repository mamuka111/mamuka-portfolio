import CardComponent from '@/components/CardComponent'

const Education = () => {
  return (
    <section className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Education and certifications
          </div>
          <div className='space-y-10'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              My Education and certifications
            </h2>
            <div className='flex gap-5 flex-wrap'>
              <CardComponent
                title='Front-End development with react'
                companyName='Digital Institute'
                dateFrom='2024/01'
                dateTo='Current'
                locationCity='Tbilisi'
                locationCountry='Georgia'
              >
                <p className='text-muted-foreground'>
                Engaged in my frontend web development studies at the Digital Institute, I'm delving into the realms of React, TypeScript, and JavaScript. This curriculum equips me with the prowess to construct dynamic and adaptable user interfaces. 
                Through these courses, I'm honing my craft in developing contemporary web applications that seamlessly blend functionality with visual appeal.
                 Exploring an array of essential tools and methodologies, I'm cultivating expertise in building scalable and easily maintainable projects.
                </p>
              </CardComponent>
              <CardComponent
                title='Computer Science'
                companyName='Tbilisi State University'
                dateFrom='2022/09'
                dateTo='2028/06'
                locationCity='Tbilisi'
                locationCountry='Georgia'
              >
                <p className='text-gray-700 dark:text-gray-400'>
                My computer science expertise encompasses fundamental concepts such as algorithms, data structures, and object-oriented programming principles.
                 I excel in problem-solving and algorithmic thinking, enabling efficient resolution of complex challenges. Additionally, I am proficient in software engineering methodologies and technologies, facilitating the development of scalable and maintainable software solutions.
                </p>
              </CardComponent>
              <CardComponent
                title='My Certifications'
                companyName='Udemy,'
                dateFrom='2023/01'
                dateTo='current'
              >
                <p className='text-gray-700 dark:text-gray-400'>
                Through Udemy, I've delved deep into JavaScript, TypeScript, and React. These courses have equipped me with an in-depth understanding of these technologies.
                 I've mastered JavaScript's core concepts, including its inner workings, allowing me to comprehend how it operates behind the scenes. With TypeScript, I've developed type-safe applications, and with React, I've built robust web applications.
                 These learning experiences have greatly enhanced my skills in frontend development.
                </p>
              </CardComponent>
              <CardComponent
                title='Front-End development with react'
                companyName='Tbilisi Bootcamp'
                dateFrom='2023/01'
                dateTo='2023/05'
                locationCity='Tbilisi'
                locationCountry='Georgia'
              >
                <p className='text-gray-700 dark:text-gray-400'>
                In addition to completing an intensive frontend boot camp at Tbilisi Bootcamp, where the primary focus was on mastering React and building real-world projects.
                 This hands-on experience provided me with practical insights into developing dynamic web applications using React.
                 Through the boot camp, I gained invaluable experience in project-based learning, honing my skills in building scalable and industry-relevant solutions.
                </p>
              </CardComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
