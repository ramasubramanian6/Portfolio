import React from 'react'
import myself from '../assets/myphoto-removebg-preview.png';

function About() {
  return (
    <div className='flex  md:flex-row-reverse flex-col  bg-gradient-to-r from-white to to-blue-500 ' id='about'  >
      <div className='pt-9 pr-16 text-left pl-5 md:pl-2'>
        <div className='text-xl w-16 md:text-5xl md:text-center md:w-36 border-b-4 border-yellow-500'>About</div>
          <div className='pt-4 w-full text-sm md:text-[18px] font-logodis'>
            <div className='pt-2.5'>Aspiring software developer with expertise in Java, MySQL, HTML, CSS, Javascript, UNIDATA, and MERN stack.</div>
            <div className='pt-2.5'>Proven track record of improving deployment efficiency, user satisfaction, and reducing application downtime.</div>
            <div className='pt-2.5'>Recognized for strategic database management, effective team coordination, and rapid ticket resolution.</div>
            <div className='pt-2.5 pb-2'>Acknowledged for vocational excellence and community service contributions by the Rotary Club of Tirunelveli.</div>

          </div>
      </div>
          <div>
            <img src={myself} alt='Rama Subramanian'className='ml-4 ' ></img>
          </div>
    </div>
  )
}

export default About