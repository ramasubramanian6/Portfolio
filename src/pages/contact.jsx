import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Contact() {
  return (
    <div className='md:h-[19rem] bg-gray-700 text-white flex flex-col' id='contact'>
    <div className='text-5xl font-namedis pt-5' >Contact</div>
    <div className='md:pt-10 pt-5 flex-col  md:flex-row align-middle'>
        <div className='md:text-2xl  font-logodis md:pl-[5rem]'>Email:<a href='mailto:ramasubramanianponni37@gmail.com' className='pl-2 underline hover:text-blue-400'>ramasubramanianponni37@gmail.com</a></div>
        <div className='md:text-2xl pt-4 font-logodis md:pl-[3rem]' >Phone no:<a href='tel:+91 7449085120' className='pl-2 underline hover:text-blue-400'>+91 7449085120</a>  </div>
    </div>
        <div className="flex justify-center space-x-8 md:pt-11 pt-6 pb-6">

                <a href='https://www.linkedin.com/in/ramasubramanian6/' target='_blank'>
                <FaLinkedin className=' bg-blue-800 hover:bg-black size-10 rounded'></FaLinkedin></a>

                <a href='https://github.com/ramasubramanian6' target='_blank'>
                <FaGithubSquare className='bg-orange-600  hover:bg-black size-10 rounded' ></FaGithubSquare></a>
        </div>
    </div>
  )
}

export default Contact