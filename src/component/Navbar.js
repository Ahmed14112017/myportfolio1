import React from 'react'
import { Link } from 'react-scroll'
import { logo } from '../Assets/images'

export default function Navbar() {
  return (
    <nav className='w-full sticky  bg-bodyColor z-20 top-0 h-24 text-lightText flex justify-between items-center border-b-[1px] border-b-gray-600 '>
        <Link to='/'>
        <img src={logo} alt='logo' />
        </Link>
      <ul className='hidden items-center gap-6 mdl:flex  '>
        <li >
            <Link to='/Home'>Home</Link>
        </li>
        <li >
            <Link to='/Features'>Features</Link>
        </li>
        <li >
            <Link to='Projects'>Projects</Link>
        </li>
        <li >
            <Link to='Resume'>Resume</Link>
        </li>
        <li >
            <Link to='Testmonial'>Testmonial</Link>
        </li>
        <li >
            <Link to='Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}
