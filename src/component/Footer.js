import React from 'react'
import { Link } from 'react-scroll'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { logo } from '../Assets/images'
export default function Footer() {
  return (
    <section className='w-full py-20 px-10'>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-4'>
            <img src={logo} alt='logo' className='w-[100px] object-cover' />
        <div className='flex justify-start gap-4 items-center'>
            <span className='footer-icon'> <Link to="https://www.facebook.com/legendof.ahmed"><FaFacebook className='icon-1'/></Link></span>
        <span className='footer-icon'><Link to="https://www.linkedin.com/in/ahmed-arafa-155768188/?trk=public_profile-settings_edit-profile-content&original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=eg"><FaLinkedin className='icon-1'/></Link></span>
        <span className='footer-icon'> <FaTwitter className='icon-1'/></span>
        
            </div>
        </div>
        <div className='font-bold'>
            <h4 className='text-designColor mb-5' >QUICK LINK</h4>
            <ul className='flex flex-col gap-4 text-lightText cursor-pointer'>
                <li><Link to='home' smooth={true} duration={300}>About</Link></li>
                <li><Link to='projects' smooth={true} duration={300}>Portfolio</Link></li>
                <li><Link to='features' smooth={true} duration={300}>Services</Link></li>
                <li><Link to='Blog' smooth={true} duration={300}>Blog</Link></li>
                <li><Link to='Contact' smooth={true} duration={300}>Contact</Link></li>
            </ul>
        </div>
        <div className='font-bold'>
            <h4 className='text-designColor mb-5'>QUICK LINK</h4>
            <ul className='flex flex-col gap-4 text-lightText cursor-pointer'>
                <li><Link to='home' smooth={true} duration={300}>About</Link></li>
                <li><Link to='projects' smooth={true} duration={300}>Portfolio</Link></li>
                <li><Link to='features' smooth={true} duration={300}>Services</Link></li>
                <li><Link to='Blog' smooth={true} duration={300}>Blog</Link></li>
                <li><Link to='Contact' smooth={true} duration={300}>Contact</Link></li>
            </ul>
        </div>
        <div  className='font-bold'>
            <h4 className='text-designColor mb-5'>QUICK LINK</h4>
            <ul className='flex flex-col gap-4 text-lightText cursor-pointer'>
                <li><Link to='home' smooth={true} duration={300}>About</Link></li>
                <li><Link to='projects' smooth={true} duration={300}>Portfolio</Link></li>
                <li><Link to='features' smooth={true} duration={300}>Services</Link></li>
                <li><Link to='Blog' smooth={true} duration={300}>Blog</Link></li>
                <li><Link to='Contact' smooth={true} duration={300}>Contact</Link></li>
            </ul>
        </div>
      </div>
    </section>
  )
}
