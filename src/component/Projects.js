import React from 'react'
import { projectOne } from '../Assets/images'
import { projectTwo } from '../Assets/images'
import { projectThree } from '../Assets/images'

export default function Projects() {
  return (
    <section id='Projects' className='w-full py-20  border-b-[1px] border-b-black'>
      <div className='flex flex-col gap-6'>
        <div className='text-center'>
        <h4 className='text-designColor pb-6'>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
        <h1 className='text-lightText text-6xl font-bold pb-4'>My Projects</h1>
        </div>
      
      <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
      <div className='flex  flex-col  gap-6 w-full shadow-shadowOne p-4 xl:px-12  xl:py-10 rounded-lg '>
      <div className='h-[80%] w-full overflow-hidden rounded-lg object-cover'>
      <img src={projectOne} alt='projectOne' className='h-60 project-img duration-300 rounded-lg object-cover'  />
      </div>
      <h4 className='text-designColor'>SOCIAL MEDIA CLONE</h4>
      <p className='text-lightText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem</p>

      
      </div>
      <div className='flex  flex-col  gap-6 w-full shadow-shadowOne p-4 xl:px-12  xl:py-10 rounded-lg '>
      <div className='h-[80%] w-full overflow-hidden rounded-lg object-cover'>
      <img src={projectTwo} alt='projectOne' className='h-60 project-img duration-300 rounded-lg object-cover'  />
      </div>
      <h4 className='text-designColor'>SOCIAL MEDIA CLONE</h4>
      <p className='text-lightText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem</p>

      
      </div>
      <div className='flex  flex-col  gap-6 w-full shadow-shadowOne p-4 xl:px-12  xl:py-10 rounded-lg '>
      <div className='h-[80%] w-full overflow-hidden rounded-lg object-cover'>
      <img src={projectThree} alt='projectOne' className='h-60 project-img duration-300 rounded-lg object-cover'  />
      </div>
      <h4 className='text-designColor'>SOCIAL MEDIA CLONE</h4>
      <p className='text-lightText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem</p>

      
      </div>
      <div className='flex  flex-col  gap-6 w-full shadow-shadowOne p-4 xl:px-12  xl:py-10 rounded-lg '>
      <div className='h-[80%] w-full overflow-hidden rounded-lg object-cover'>
      <img src={projectThree} alt='projectOne' className='h-60 project-img duration-300 rounded-lg object-cover'  />
      </div>
      <h4 className='text-designColor'>SOCIAL MEDIA CLONE</h4>
      <p className='text-lightText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem</p>

      
      </div>
      <div className='flex  flex-col  gap-6 w-full shadow-shadowOne p-4 xl:px-12  xl:py-10 rounded-lg '>
      <div className='h-[80%] w-full overflow-hidden rounded-lg object-cover'>
      <img src={projectOne} alt='projectOne' className='h-60 project-img duration-300 rounded-lg object-cover'  />
      </div>
      <h4 className='text-designColor'>SOCIAL MEDIA CLONE</h4>
      <p className='text-lightText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem</p>

      
      </div>
      <div className='flex  flex-col  gap-6 w-full shadow-shadowOne p-4 xl:px-12  xl:py-10 rounded-lg '>
      <div className='h-[80%] w-full overflow-hidden rounded-lg object-cover'>
      <img src={projectTwo} alt='projectOne' className='h-60 project-img duration-300 rounded-lg object-cover'  />
      </div>
      <h4 className='text-designColor'>SOCIAL MEDIA CLONE</h4>
      <p className='text-lightText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Explicabo quibusdam voluptate sapiente voluptatibus harum quidem</p>

      
      </div>
      </div>
      </div>
      
    </section>
  )
}
