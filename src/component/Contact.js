import React from 'react'
import { contactImg } from '../Assets/images'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-scroll';
import { useState } from 'react';


export default function Contact() {
  const [data, setdata] = useState({
    firstname:"",
    phonenumber:null,
    email:"",
    subject:""

  });
  const [errormassege,Seterrormassege]=useState("")
  const [successmassege,Setsuccessmassege]=useState("")
 
  const inputEvent = (event) => {
    const{name,value}=event.target
   setdata((prevsate)=>({
    ...prevsate,
    [name]:value
   }))
  }
console.log(data)
const cleardata=()=>{
  setdata({
    firstname:"",
    phonenumber:'',
    email:"",
    subject:"",
    massege:""
  })
}
const submit=(e)=>{
  e.preventDefault()
  if(!data.firstname||!data.phonenumber||!data.email){
    Seterrormassege("Please fill all the fields");
    Setsuccessmassege("");
  }else{
    
    cleardata()
    Setsuccessmassege("Message sent successfully!");
    Seterrormassege("");
  }
 
}


  return (
    <section id='contact' className='w-full h-full py-20 px-10 border-b-black border-b-[1px]'>
      <div className='flex flex-col justify-center items-center gap-5'>
      <h4 className='text-lg text-designColor '>CONTACT</h4>
      <h1 className='text-6xl text-lightText font-bold'>Contact With Me</h1>
      <div className='w-full h-auto flex flex-col gap-6 lg:flex-row lg:gap-6 items-center text-lightText'> 
      <div className='w-[40%] h-full flex flex-col gap-5 shadow-shadowOne p-8'>
        <img src={contactImg} alt='contactImg' className='object-cover rounded-lg'/>
        <h2 className='text-white text-2xl font-bold'>John Doe</h2>
        <h4>MERN Stack Developer</h4>
        <p className='tracking-wide text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Facilis ipsam autem cumque, accusantium dicta odio.</p>
           <h4>Phone:+968 97859628</h4>
           <h4>Email:noor.jsdivs@gmail.com</h4>
           <h2>FIND ME IN</h2>
            <div className='flex justify-start gap-4 items-center'>
            <span className='home-icon'> <Link to="https://www.facebook.com/legendof.ahmed"><FaFacebook className='icon-1'/></Link></span>
        <span className='home-icon'><Link to="https://www.linkedin.com/in/ahmed-arafa-155768188/?trk=public_profile-settings_edit-profile-content&original_referer=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2F&originalSubdomain=eg"><FaLinkedin className='icon-1'/></Link></span>
        <span className='home-icon'> <FaTwitter className='icon-1'/></span>
        
            </div>
      </div>
      <div className='w-[60%] h-full flex flex-col gap-1 p-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] lgl:p-8 rounded-lg shadow-shadowOne text-lightText'>
        <form onSubmit={submit} className=" flex flex-col gap-4 ">  
        {errormassege && <p className="text-red-500">{errormassege}</p>}
        {successmassege && <p className="text-green-500">{successmassege}</p>}
          <div className='flex flex-col gap-5'> 
          <label htmlFor='firstname'>firstname</label>
          <input className='input-content' type='text' placeholder="First name" name="firstname" value={data.firstname} onChange={inputEvent} />
          </div>
      <div className='flex flex-col gap-5'>
      <label htmlFor='phone'>phone number</label>
      <input className='input-content' type='number' placeholder="phone number" name="phone" value={data.phone} onChange={inputEvent}/>
      </div>
      <div className='flex flex-col gap-5'>
      <label htmlFor='email'>email</label>
      <input className='input-content' type='email' placeholder="email" name='email' value={data.email} onChange={inputEvent}/>
      </div>
      <div className='flex flex-col gap-5'>
      <label htmlFor='subject'>subject</label>
      <input className='input-content' type='text' placeholder="subject" name='subject' value={data.subject} onChange={inputEvent}/>
      </div>
      <div className='flex flex-col gap-5'>
      <label htmlFor='subject'>massege</label>
      <textarea className='input-content'style={{ width: '100%', height: '150px' }} type='text' placeholder="massege" name='massege' value={data.massege} onChange={inputEvent}/>
      </div>
      <button className='w-full border border-designColor py-2 px-4 rounded-lg'>send massage</button>
        
       
       
        </form>
      </div>
      </div>
      </div>
    </section>
  )
}
