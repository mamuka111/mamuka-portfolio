import ProjectCard from '@/components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Project 1 description',
    image: '/img/project-1.png',
    url: 'https://mamuka111.github.io/tip-calculator/'
  },
  {
    id: 2,
    title: 'Project 1',
    description: 'Project 2 description',
    image: '/img/project-1.png',
    url: 'https://country-app-umber.vercel.app/'
  },
  {
    id: 3,
    title: 'Project 1',
    description: 'Project 3 description',
    image: '/img/project-1.png',
    url: 'https://charlses.com'
  },
  {
    id: 4,
    title: 'Project 1',
    description: 'Project 4 description',
    image: '/img/project-1.png',
    url: 'https://charlses.com'
  },
  {
    id: 5,
    title: 'Project 1',
    description: 'Project 4 description',
    image: '/img/project-1.png',
    url: 'https://charlses.com'
  },
  {
    id: 6,
    title: 'Project 1',
    description: 'Project 4 description',
    image: '/img/project-1.png',
    url: 'https://charlses.com'
  }
]

const Projects = () => {
  return (
    <section className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Projects
          </div>
          <div className='space-y-10'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              My projects
            </h2>
            <div className='flex flex-wrap gap-5'>
              {projects &&
                projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    image={project.image}
                    link={project.url}
                    title={project.title}
                  >
                    {project.description}
                  </ProjectCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
