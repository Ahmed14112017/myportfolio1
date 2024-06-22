import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <section id='home' className='pt-10 w-full pb-20 flex flex-col gap-10 lg:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black '>
      <div className='leftside lgl:w-1/2 gap-20 flex flex-col  text-titleFont'>
      <div className='flex flex-col gap-5'>
      <h3 className='text-lightText text-lg font-normal'>WELCOME TO MY WORLD</h3>
        <h1 className='text-6xl font-bold text-white'>Hi, I'm <span className='text-designColor'>ahmed arafa</span></h1>
        <h2 style={{ fontSize: '2.25rem',lineHeight:"2.5rem",fontWeight:"bold", display: 'inline-block', color:"white" }}>a {""}
            <span>
            <TypeAnimation
      sequence={[
        'Professional Coder.', // Types 'One'
        1000, // Waits 1s
        'Front End Developer.', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'UI Designer.', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2.25rem',lineHeight:"2.5rem",fontWeight:"bold", display: 'inline-block', color:"white" }}
    />
            </span>
            
        </h2>
        <p className='text-lightText text-lg'>
        I use animation as a third dimension by which to simplify experiences
         and kuiding thro each and every interaction.
         I'm not adding motion just to spruce things up, but doing it in ways that.
        </p>
      </div>
       <div className='flex flex-col gap-6 lgl:gap-0 lgl:flex-row justify-between '>
       <div>
        <h2 className='uppercase text-base font-titleFont text-lightText mb-4'>
        Find me in
        </h2>
        <div className='flex gap-4'>
        <span className='home-icon'> <Link to="https://www.facebook.com/legendof.ahmed"><FaFacebook className='icon-1'/></Link></span>
        <span className='home-icon'><Link to="https://www.linkedin.com/in/ahmed-arafa-155768188/?trk=public_profile-settings_edit-profile-content&original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=eg"><FaLinkedin className='icon-1'/></Link></span>
        <span className='home-icon'> <FaTwitter className='icon-1'/></span>
        </div>
      </div>
      <div >
        <h2 className='uppercase text-base font-titleFont text-lightText mb-4'>  BEST SKILL ON</h2>
      <div className='flex gap-4'>
      <span className='home-icon'><FaReact className='icon-1'/></span>
            <span className='home-icon'><RiTailwindCssFill className='icon-1'/></span>
            <span className='home-icon'><FaBootstrap className='icon-1'/></span>
      </div>
      </div>
       </div>
      
      </div>
      <div className='right-side'> 

      </div>
    </section>
  )
}
