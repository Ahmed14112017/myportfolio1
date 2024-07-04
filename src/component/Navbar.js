import React from 'react'
import { Link } from 'react-scroll'
import { logo } from '../Assets/images'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";




export default function Navbar() {
    const [open,Setopen]=useState(false)
    const showmenu=()=>{
        Setopen(!open)
    }
  return (
    <nav className='w-full sticky  bg-bodyColor z-20 top-0 h-24 text-lightText flex justify-between items-center border-b-[1px] border-b-gray-600 '>
        <Link to='home' smooth={true} duration={500}>
        <img src={logo} alt='logo' className='w-[50px] object-fill rounded-full' />
        </Link>
      <ul className='hidden items-center gap-6 mdl:flex  cursor-pointer'>
        <li className='nav-list'>
            <Link to='home' smooth={true} duration={500} >Home</Link>
        </li>
        <li >
            <Link to='features'smooth={true} duration={500}>Features</Link>
        </li>
        <li >
            <Link to='projects'smooth={true} duration={500}>Projects</Link>
        </li>
        <li >
            <Link to='resume'smooth={true} duration={500}>Resume</Link>
        </li>
        <li >
            <Link to='contact'smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
      <span onClick={showmenu} className=' cursor-pointer w-10 h-10 mdl:hidden text-xl bg-black rounded-3xl flex justify-center items-center text-designColor'>
      <MdMenu />
      </span>
      {open&&(
        <div className='w-[80%] h-screen absolute top-0 left-0 bg-gray-900 p-4 '>
          <div className='flex flex-col gap-5 relative'>
          <img className="w-32" src={logo} alt="logo" />
          <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum soluta perspiciatis molestias enim cum repellat, magnam
                  exercitationem distinctio aliquid nam.</p>
          </div>
          <div>
            <ul className='flex flex-col gap-5 cursor-pointer'>
              <li>
                <Link to='home'smooth={true} duration={500} onClick={showmenu}>Home</Link>
                
              </li>
              <li >
            <Link to='Features'smooth={true} duration={500} onClick={showmenu}>Features</Link>
        </li>
        <li >
            <Link to='Projects'smooth={true} duration={500} onClick={showmenu}>Projects</Link>
        </li>
        <li >
            <Link to='Resume'smooth={true} duration={500} onClick={showmenu}>Resume</Link>
        </li>
        <li >
            <Link to='Testmonial'smooth={true} duration={500} onClick={showmenu}>Testmonial</Link>
        </li>
        <li >
            <Link to='Contact'smooth={true} duration={500} onClick={showmenu}>Contact</Link>
        </li>
            </ul>
          </div>
          <div>
            <h3 className='my-5'>FIND ME IN</h3>
            
            <div className='flex  gap-4'>
        <span className='home-icon'> <a href="https://www.facebook.com/legendof.ahmed"><FaFacebook className='icon-1'/></a></span>
        <span className='home-icon'><a href="https://www.linkedin.com/in/ahmed-arafa-155768188/?trk=public_profile-settings_edit-profile-content&original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=eg"><FaLinkedin className='icon-1'/></a></span>
        <span className='home-icon'> <FaTwitter className='icon-1'/></span>
            </div>
            <sapn onClick={showmenu}>
              <IoMdClose className='text-3xl absolute top-8 right-4 cursor-pointer'/>
            </sapn>
          </div>
        </div>
      )}
    </nav>
  )
}