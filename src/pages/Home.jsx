import React from 'react'
import img from "../assets/vecteezy_developing-programming-ai-generative_31607092.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";




function Home() {
  return (
    <section className="flex justify-center md:justify-between pt-10 md:pt-20  font-namedis rounded-md" id='home'>
     
    <div className='text-3xl  md:text-5xl sm:text-5xl pl-1  text-black md: text-blue-50'>
        <div className='md:pl-11'>I'm Rama <span className='text-blue-500'>Subramanian</span></div>
        <div className='pt-8 pl-18 md:pl-32 '>Full Stack <span className= 'text-blue-500'>Developer</span></div>
        <div className="flex space-x-8 pt-10 md:pt-7 md:pl-56 pl-20">

                <a href='https://www.linkedin.com/in/ramasubramanian6/' target='_blank'>
                <FaLinkedin className=' bg-blue-800 hover:bg-black size-10 rounded'></FaLinkedin></a>

                <a href='https://github.com/ramasubramanian6' target='_blank'>
                <FaGithubSquare className='bg-orange-600  hover:bg-black size-10 rounded' ></FaGithubSquare></a>
      </div>
       
        
    </div>
    <div className='hidden md:block '><img className='mt-[-3.5rem] pl-[-10px] mr-3 size-[23rem] ' src={img} alt="Fullstack_icon" /></div>
    </section>
  )
}

export default Home