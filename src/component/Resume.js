import React, { useState } from 'react';
import Skills from './Skills';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'DESIGN', level: 70 },
];

const additionalSkills = [
  { name: 'Bootstrap', level: 70 },
  { name: 'React', level: 70 },
  { name: 'TailwindCSS', level: 70 },
];
export default function Resume() {
  const [Education, Seteductaion] = useState(true);
  const [ProfessionalSkills, SetProfessionalSkills] = useState(false);
  const [Experience, SetExperience] = useState(false);
  const [Achievements, SetAchievements] = useState(false);
  
 
  return (
    <section id='resume' className='w-full flex flex-col gap-6 items-center justify-center py-20 px-10 border-b-[1px] border-b-black'>
      <h4 className='text-designColor'>7+ YEARS OF EXPERIENCE</h4>
      <h1 className='text-lightText font-bold text-6xl pb-5'>My Resume</h1>
      <div className='w-full'>
      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-center  text-lightText'>
        <li
           onClick={() => {
            Seteductaion(true);
            SetProfessionalSkills(false);
            SetExperience(false);
            SetAchievements(false);
          }} 
          className={`${Education ? 'resumeli:active' : 'border-transparent'} resumeli`}
        >
        Education
        </li>
        <li
          onClick={() => {
            Seteductaion(false);
            SetProfessionalSkills(true);
            SetExperience(false);
            SetAchievements(false);
          }}
          className={`${ProfessionalSkills? 'resumeli:active' : 'border-transparent'} resumeli`}
        > 

          Professional Skills
        </li>
        <li
          onClick={() => {
            Seteductaion(false);
            SetProfessionalSkills(false);
            SetExperience(true);
            SetAchievements(false);
          }}
          className={`${Experience ? 'resumeli:active' : 'border-transparent'} resumeli`}
        >

          Experience
        </li>
        <li
          onClick={() => {
            Seteductaion(false);
            SetProfessionalSkills(false);
            SetExperience(false);
            SetAchievements(true);
          }}
          className={`${Achievements ? 'resumeli:active' : 'border-transparent'} resumeli`}
        >
          Achievements
        </li>
      </ul>
      </div>
      
      {Education && (
        <div className='w-full h-auto '>
          <div className='flex flex-col lg:flex-row justify-evenly items-center text-center '>
          <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
            <h2 className='text-3xl md:text-4xl font-bold  text-lightText'>Education Quality</h2>
          </div>
          <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
            <p className='text-sm text-designColor tracking-[4px]'>2010 - 2022</p>
            <h2 className='text-3xl md:text-4xl font-bold  text-lightText'>Job Experience</h2>
          </div>
          </div>
         
          <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20 '>
            <div className='flex'>
              <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                  <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
              </div>
              <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                  <div className='p-3'>
                    <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                      BSc in Computer Science
                    </h3>
                    <span>University of DVI (2006 - 2010)</span>
                  </div>
                  <div className='p-3'>
                    <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                      3.90/4
                    </span>
                  </div>
                </div>
                <p className='font-bold text-md text-lightText'>
                  The training provided by universities in order to prepare people to work in various
                  sectors of the economy or areas of culture.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                  <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
              </div>
              <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                  <div className='p-3'>
                    <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                      BSc in Computer Science
                    </h3>
                    <span>University of DVI (2006 - 2010)</span>
                  </div>
                  <div className='p-3'>
                    <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                      3.90/4
                    </span>
                  </div>
                </div>
                <p className='font-bold text-md text-lightText'>
                  The training provided by universities in order to prepare people to work in various
                  sectors of the economy or areas of culture.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                  <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
              </div>
              <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                  <div className='p-3'>
                    <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                      BSc in Computer Science
                    </h3>
                    <span>University of DVI (2006 - 2010)</span>
                  </div>
                  <div className='p-3'>
                    <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                      3.90/4
                    </span>
                  </div>
                </div>
                <p className='font-bold text-md text-lightText'>
                  The training provided by universities in order to prepare people to work in various
                  sectors of the economy or areas of culture.
                </p>
              </div>
            </div>
            </div>
            <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20  '>
            <div className='flex'>
              <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                  <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
              </div>
              <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                  <div className='p-3'>
                    <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                      BSc in Computer Science
                    </h3>
                    <span>University of DVI (2006 - 2010)</span>
                  </div>
                  <div className='p-3'>
                    <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                      3.90/4
                    </span>
                  </div>
                </div>
                <p className='font-bold text-md text-lightText'>
                  The training provided by universities in order to prepare people to work in various
                  sectors of the economy or areas of culture.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                  <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
              </div>
              <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                  <div className='p-3'>
                    <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                      BSc in Computer Science
                    </h3>
                    <span>University of DVI (2006 - 2010)</span>
                  </div>
                  <div className='p-3'>
                    <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                      3.90/4
                    </span>
                  </div>
                </div>
                <p className='font-bold text-md text-lightText'>
                  The training provided by universities in order to prepare people to work in various
                  sectors of the economy or areas of culture.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
                <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                  <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
                </span>
              </div>
              <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
                <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                  <div className='p-3'>
                    <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                      BSc in Computer Science
                    </h3>
                    <span>University of DVI (2006 - 2010)</span>
                  </div>
                  <div className='p-3'>
                    <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                      3.90/4
                    </span>
                  </div>
                </div>
                <p className='font-bold text-md text-lightText'>
                  The training provided by universities in order to prepare people to work in various
                  sectors of the economy or areas of culture.
                </p>
              </div>
            </div>
            </div>
          </div>
          </div>
        
      )}
      {ProfessionalSkills&&
      <div className='w-full h-auto py-10'>
        <div className='w-full flex flex-col lg:flex-row  lg:items-center gap-10  '>
          <div className='w-[50%]'>
          <p className=' text-sm text-designColor tracking-[4px]'>FEATURES</p>
          <h2 className='text-3xl md:text-4xl font-bold text-lightText'>Design Skill</h2>
          <div>
          <Skills skillsList={skills} />
          </div>
          </div>
         
          <div className='w-[50%]' >
          <p className='text-sm text-designColor tracking-[4px]'>FEATURES</p>
          <h2 className='text-3xl md:text-4xl font-bold text-lightText'>Development Skill
          </h2>
          <div>
          <Skills skillsList={additionalSkills} />
          </div>
          </div>
          
        </div>
      </div>

      }
      {Experience&&(
       <div className='w-full h-auto '>
       <div className='flex flex-col lg:flex-row justify-evenly  text-center '>
       <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
         <p className='text-sm text-designColor tracking-[4px]'>2010 - 2020</p>
         <h2 className='text-3xl md:text-4xl font-bold  text-lightText'>Job Experience</h2>
       </div>
       <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
         <p className='text-sm text-designColor tracking-[4px]'>2001 - 2020</p>
         <h2 className='text-3xl md:text-4xl font-bold  text-lightText'>Trainer Experience</h2>
       </div>
       </div>
      
       <div className='grid grid-cols-1 md:grid-cols-2'>
       <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20 '>
         <div className='flex'>
           <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
               <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
             </span>
           </div>
           <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
             <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
               <div className='p-3'>
                 <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                   BSc in Computer Science
                 </h3>
                 <span>University of DVI (2006 - 2010)</span>
               </div>
               <div className='p-3'>
                 <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                   3.90/4
                 </span>
               </div>
             </div>
             <p className='font-bold text-md text-lightText'>
               The training provided by universities in order to prepare people to work in various
               sectors of the economy or areas of culture.
             </p>
           </div>
         </div>
         <div className='flex'>
           <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
               <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
             </span>
           </div>
           <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
             <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
               <div className='p-3'>
                 <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                   BSc in Computer Science
                 </h3>
                 <span>University of DVI (2006 - 2010)</span>
               </div>
               <div className='p-3'>
                 <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                   3.90/4
                 </span>
               </div>
             </div>
             <p className='font-bold text-md text-lightText'>
               The training provided by universities in order to prepare people to work in various
               sectors of the economy or areas of culture.
             </p>
           </div>
         </div>
         <div className='flex'>
           <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
               <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
             </span>
           </div>
           <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
             <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
               <div className='p-3'>
                 <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                   BSc in Computer Science
                 </h3>
                 <span>University of DVI (2006 - 2010)</span>
               </div>
               <div className='p-3'>
                 <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                   3.90/4
                 </span>
               </div>
             </div>
             <p className='font-bold text-md text-lightText'>
               The training provided by universities in order to prepare people to work in various
               sectors of the economy or areas of culture.
             </p>
           </div>
         </div>
         </div>
         <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20  '>
         <div className='flex'>
           <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
               <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
             </span>
           </div>
           <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
             <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
               <div className='p-3'>
                 <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                   BSc in Computer Science
                 </h3>
                 <span>University of DVI (2006 - 2010)</span>
               </div>
               <div className='p-3'>
                 <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                   3.90/4
                 </span>
               </div>
             </div>
             <p className='font-bold text-md text-lightText'>
               The training provided by universities in order to prepare people to work in various
               sectors of the economy or areas of culture.
             </p>
           </div>
         </div>
         <div className='flex'>
           <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
               <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
             </span>
           </div>
           <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
             <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
               <div className='p-3'>
                 <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                   BSc in Computer Science
                 </h3>
                 <span>University of DVI (2006 - 2010)</span>
               </div>
               <div className='p-3'>
                 <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                   3.90/4
                 </span>
               </div>
             </div>
             <p className='font-bold text-md text-lightText'>
               The training provided by universities in order to prepare people to work in various
               sectors of the economy or areas of culture.
             </p>
           </div>
         </div>
         <div className='flex'>
           <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
             <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
               <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
             </span>
           </div>
           <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
             <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
               <div className='p-3'>
                 <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                   BSc in Computer Science
                 </h3>
                 <span>University of DVI (2006 - 2010)</span>
               </div>
               <div className='p-3'>
                 <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                   3.90/4
                 </span>
               </div>
             </div>
             <p className='font-bold text-md text-lightText'>
               The training provided by universities in order to prepare people to work in various
               sectors of the economy or areas of culture.
             </p>
           </div>
         </div>
         </div>
       </div>
       </div>
        
      )}
      {Achievements&&(
        <div className='w-full h-auto '>
        <div className='flex flex-col lg:flex-row justify-evenly  text-center '>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2010 - 2020</p>
          <h2 className='text-3xl md:text-4xl font-bold  text-lightText'>Job Experience</h2>
        </div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2001 - 2020</p>
          <h2 className='text-3xl md:text-4xl font-bold  text-lightText'>Trainer Experience</h2>
        </div>
        </div>
       
        <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20 '>
          <div className='flex'>
            <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
              </span>
            </div>
            <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
              <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                <div className='p-3'>
                  <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                    BSc in Computer Science
                  </h3>
                  <span>University of DVI (2006 - 2010)</span>
                </div>
                <div className='p-3'>
                  <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                    3.90/4
                  </span>
                </div>
              </div>
              <p className='font-bold text-md text-lightText'>
                The training provided by universities in order to prepare people to work in various
                sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
              </span>
            </div>
            <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
              <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                <div className='p-3'>
                  <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                    BSc in Computer Science
                  </h3>
                  <span>University of DVI (2006 - 2010)</span>
                </div>
                <div className='p-3'>
                  <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                    3.90/4
                  </span>
                </div>
              </div>
              <p className='font-bold text-md text-lightText'>
                The training provided by universities in order to prepare people to work in various
                sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
              </span>
            </div>
            <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
              <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                <div className='p-3'>
                  <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                    BSc in Computer Science
                  </h3>
                  <span>University of DVI (2006 - 2010)</span>
                </div>
                <div className='p-3'>
                  <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                    3.90/4
                  </span>
                </div>
              </div>
              <p className='font-bold text-md text-lightText'>
                The training provided by universities in order to prepare people to work in various
                sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          </div>
          <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-20  '>
          <div className='flex'>
            <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
              </span>
            </div>
            <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
              <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                <div className='p-3'>
                  <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                    BSc in Computer Science
                  </h3>
                  <span>University of DVI (2006 - 2010)</span>
                </div>
                <div className='p-3'>
                  <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                    3.90/4
                  </span>
                </div>
              </div>
              <p className='font-bold text-md text-lightText'>
                The training provided by universities in order to prepare people to work in various
                sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
              </span>
            </div>
            <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
              <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                <div className='p-3'>
                  <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                    BSc in Computer Science
                  </h3>
                  <span>University of DVI (2006 - 2010)</span>
                </div>
                <div className='p-3'>
                  <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                    3.90/4
                  </span>
                </div>
              </div>
              <p className='font-bold text-md text-lightText'>
                The training provided by universities in order to prepare people to work in various
                sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          <div className='flex'>
            <div className='w-10 h-[6px] bg-black opacity-30 mt-16 relative'>
              <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60'>
                <span className='resume-rounded w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor duration-300'></span>
              </span>
            </div>
            <div className='resume-content p-5 bg-black bg-opacity-20 group-hover:bg-opacity-30 duration-500 rounded-lg w-[500px] shadow-shadowOne text-lightText flex flex-col gap-5 group'>
              <div className='flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center'>
                <div className='p-3'>
                  <h3 className='text-xl md:text-2xl group-hover:text-white duration-300'>
                    BSc in Computer Science
                  </h3>
                  <span>University of DVI (2006 - 2010)</span>
                </div>
                <div className='p-3'>
                  <span className='bg-black bg-opacity-40 text-designColor rounded-lg shadow-shadowOne p-2'>
                    3.90/4
                  </span>
                </div>
              </div>
              <p className='font-bold text-md text-lightText'>
                The training provided by universities in order to prepare people to work in various
                sectors of the economy or areas of culture.
              </p>
            </div>
          </div>
          </div>
        </div>
        </div>
      )}
    </section>
  );
}
