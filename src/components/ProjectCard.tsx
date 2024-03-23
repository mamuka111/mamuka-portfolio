import {
  Card,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription
} from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  image: string
  link: string
  children: React.ReactNode
}

const ProjectCard = ({ title, image, link, children }: ProjectCardProps) => {
  return (
    <Card className='max-w-[400px] space-y-2 py-4'>
      <CardContent>
        <Link href={link} target='_blank' className='text-xl'>
          <Image src={image} height={500} width={500} alt={title} />
        </Link>
      </CardContent>
      <CardFooter className='flex flex-col items-start gap-5'>
        <CardTitle>
          <Link href={link} target='_blank' className='text-xl'>
            {title}
          </Link>
        </CardTitle>
        <CardDescription className='text-muted-foreground text-lg'>
          {children}
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
