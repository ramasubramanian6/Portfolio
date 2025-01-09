import React from 'react';
import logo from '../assets/agenda_514776.png'
import { FaFileDownload, FaFile  } from "react-icons/fa";
import { CgPlayButtonO } from "react-icons/cg";



function Resume() {
  return (
    <div className='flex md:flex-row justify-between w-full h-80 flex-col bg-sky-950 ' id='Resume'>
      <div className='pl-5 pt-12  pr-16 text-left  text-white '>
        <div className='font-namedis text-xl w-16 md:text-5xl md:text-center md:w-48 border-b-4 border-yellow-500'>Resume</div>
          <div className='pt-6 pl-3 flex md:font-semibold text-sm md:text-[25px] font-logodis '>
            <div className='md:pt-6 md:pl-16'> To View the Resume </div>
            <div className='md:pt-[1.5rem] pl-3'><button  className='flex  font-medium md:text-[27px] text-blue-600 '><a href='https://drive.google.com/file/d/15OKwiL-cDtSfJOoctUmIYuFvsgjFuojD/view' target="_blank" className='flex  hover:text-purple-700 underline'> View <CgPlayButtonO className=' pl-1'/> </a> </button></div>
          </div>
          <div className='pt-4 flex pl-6 md:font-semibold text-sm  md:text-[25px] font-logodis '>
            <div className='md:pt-8 md:pl-[5rem] '> To Download the Resume </div>
            <div className='md:pt-[2.1rem]'><button  className='flex pl-3  font-medium md:text-[25px] text-blue-600 '> <a href='https://drive.google.com/uc?export=download&id=15OKwiL-cDtSfJOoctUmIYuFvsgjFuojD' className='flex hover:text-purple-700  underline' download>Download <FaFileDownload className=' pl-1'/> </a></button></div>
          </div>
      </div>
          <div className='md:w-96  flex md:justify-center justify-end'>
            <img src={logo} alt='Resume Logo'className=' pb-2 pr-6 size-[8rem] md:size-[18rem] md:pt-11 md:pr-[4rem] ' ></img>
          </div>
    </div>
  )
}

export default Resume