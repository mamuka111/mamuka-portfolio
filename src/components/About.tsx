import { Badge } from '@/components/ui/badge'
import { FileJson, Hexagon } from 'lucide-react'
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { SiSass } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className='w-full py-6 md:py-12 lg:py-20 border-t'>
      <div className='container grid items-center gap-4 px-4 md:px-4'>
        <div className='space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            About me
          </div>
          <div className='space-y-2'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-primary'>
              My skills
            </h2>
            <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              amet, assumenda quis sit eaque pariatur odit, eligendi atque
              mollitia ut minus deleniti reprehenderit id voluptate, aspernatur
              explicabo blanditiis culpa dignissimos.
            </p>
          </div>
          <div className='flex gap-5 flex-wrap '>
            <Badge className='text-white font-light'>
              <IoLogoJavascript className='text-yellow-500 w-5 h-5 mr-2' />
              JavaScript
            </Badge>
            <Badge className='text-white font-light'>
              <BiLogoTypescript className='text-black w-6 h-6 mr-2' />
              TypeScript
            </Badge>
            <Badge className='text-white font-light'>
              <FaReact className='text-black w-6 h-6 mr-2' /> React.js
            </Badge>
            <Badge className='text-white font-light'>
              <SiNextdotjs className='text-black w-6 h-6 mr-2' /> Next.js
            </Badge>
            <Badge className='text-white font-light'>
              <FaBootstrap className='text-green-500 w-6 h-6 mr-2'  /> Bootstrap
            </Badge>
            <Badge className='text-white font-light'>
              <SiSass className='text-red-500 w-6 h-6 mr-2'  /> Sass
            </Badge>
            <Badge className='text-white font-light'>
              <SiRedux className='text-purple-500 w-6 h-6 mr-2'  /> Redux
            </Badge>
            <Badge className='text-white font-light'>
              <FaGitAlt className='text-black w-6 h-6 mr-2'  /> Git
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About