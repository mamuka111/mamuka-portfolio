import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme/mode-toggle'

const Footer = () => {
  return (
    <footer className='mx-5 flex flex-col justify-between border-t py-5 items-center md:flex-row '>
      <p className='text-sm text-muted-foreground flex'>
        &copy; {new Date().getFullYear()}, Davit Tavadze Portfolio
        <Link
          href='https://charlses.com/'
          className='flex items-center text-muted-foreground hover:text-foreground ml-2'
        >
          Charlses
        </Link>
      </p>

      <nav>
        <menu className='flex gap-2 '>
          <li>
            <Link href='https://github.com/mamuka111' target='_blank'>
              <Button variant='outline' size='icon'>
                <Github className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <Link href='https://www.linkedin.com/in/mamuka-avsajanishvili-47ab6b269/' target='_blank'>
              <Button variant='outline' size='icon'>
                <Linkedin className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <Link href='https://www.instagram.com/mamuka_avsajanishvili/' target='_blank'>
              <Button variant='outline' size='icon'>
                <Instagram className='h-5 w-5 font-light text-primary' />
              </Button>
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </menu>
      </nav>
    </footer>
  )
}

export default Footer
