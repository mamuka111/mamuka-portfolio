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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  inventore recusandae voluptates ab. Pariatur corrupti
                  inventore suscipit labore temporibus minus. Esse
                  exercitationem modi consequuntur repellendus sequi fugit dolor
                  dolores praesentium.
                </p>
              </CardComponent>
              <CardComponent
                title='Computer Science'
                companyName='Royal Institute of Technology'
                dateFrom='2019/09'
                dateTo='2020/09'
                locationCity='Stockholm'
                locationCountry='Sweden'
              >
                <p className='text-gray-700 dark:text-gray-400'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  quaerat, voluptates fugit molestias nemo eaque, voluptatem,
                  eum iure optio inventore praesentium aperiam reprehenderit
                  soluta quae vel doloremque non tempora. Rerum?
                </p>
              </CardComponent>
              <CardComponent
                title='My Certifications'
                companyName='Udemy, Meta, Google and more'
                dateFrom='2016/06'
                dateTo='current'
              >
                <p className='text-gray-700 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur cum nulla fuga dignissimos amet eos, iusto aliquam
                  neque laboriosam quaerat autem eligendi ut inventore,
                  asperiores magni placeat blanditiis quasi facilis.
                </p>
              </CardComponent>
              <CardComponent
                title='Information and Media Technology'
                companyName='Järfälla Gymnasium'
                dateFrom='2016/06'
                dateTo='2019/06'
                locationCity='Stockholm'
                locationCountry='Sweden'
              >
                <p className='text-gray-700 dark:text-gray-400'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora magni doloremque velit illo molestiae praesentium
                  dolorum delectus esse. Accusantium maxime eos ut deleniti
                  molestiae. Adipisci commodi sed eligendi quasi harum!
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
