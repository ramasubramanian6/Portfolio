import React from 'react'
import img from "../assets/vecteezy_developing-programming-ai-generative_31607092.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";




function Home() {
  return (
    <section className="flex justify-between pt-10 md:pt-20  font-namedis rounded-md">
     
    <div className='text-3xl  md:text-5xl sm:text-5xl pl-3  text-black md: text-blue-50'>
        <div className=''>I'm Rama Subramanian</div>
        <div className='pt-8 pl-14 md:pl-20 '>Full Stack <span className= 'text-blue-500'>Developer</span></div>
        <div className="flex space-x-8 pt-10 md:pl-56 pl-28">

                <a href='https://www.linkedin.com/in/ramasubramanian6/' target='_blank'>
                <FaLinkedin className=' hover:bg-blue-800 size-10 rounded'></FaLinkedin></a>

                <a href='https://github.com/ramasubramanian6' target='_blank'>
                <FaGithubSquare className=' hover:bg-black size-10 rounded' ></FaGithubSquare></a>
      </div>
       
        
    </div>
    <div className='hidden md:block '><img className='mt-[-3.5rem] pl-[-10px] mr-3 size-[23rem] ' src={img} alt="Fullstack_icon" /></div>
    </section>
  )
}

export default Home