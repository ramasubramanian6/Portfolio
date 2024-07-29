import React from 'react';
import logo from '../assets/download-removebg-preview.png'
import { FaFileDownload, FaFile  } from "react-icons/fa";


function Resume() {
  return (
    <div className='flex md:flex-row justify-between w-full h-76 flex-col bg-gradient-to-r from-white to to-blue-500 ' id='Resume'>
      <div className='pt-12  pr-16 text-left '>
        <div className='text-xl w-16 md:text-5xl md:text-center md:w-48 border-b-4 border-yellow-500'>Resume</div>
          <div className='pt-6 pl-3 flex md:font-semibold text-sm md:text-[25px] font-logodis '>
            <div className='md:pt-6 md:pl-16'> To view the resume in online </div>
            <div className='md:pt-[1.5rem]'><button  className='flex pl-3 font-medium md:text-[27px] text-blue-600 '><a href='https://drive.google.com/file/d/15OKwiL-cDtSfJOoctUmIYuFvsgjFuojD/view' target="_blank" className='flex  hover:text-purple-700 underline'> view <FaFile/> </a> </button></div>
          </div>
          <div className='pt-4 flex pl-6 md:font-semibold text-sm  md:text-[25px] font-logodis '>
            <div className='md:pt-8 md:pl-[9rem]'> To Download the resume </div>
            <div className='md:pt-[2.1rem]'><button  className='flex pl-3  font-medium md:text-[25px] text-blue-600 '> <a href='https://drive.google.com/uc?export=download&id=15OKwiL-cDtSfJOoctUmIYuFvsgjFuojD' className='flex hover:text-purple-700  underline' download>Download <FaFileDownload/> </a></button></div>
          </div>
      </div>
          <div>
            <img src={logo} alt='Resume Logo'className='pt-5 pl-11 md:pt-16 md:pr-[6rem] ' ></img>
          </div>
    </div>
  )
}

export default Resume