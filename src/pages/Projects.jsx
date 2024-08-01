import React from 'react'
import img from '../assets/bookticket.png';
import imdb from '../assets/movie-website-14.jpg';
import rf from '../assets/sRF.jpg';

function Projects() {
  return (
    <div className='pl-5 pt-12 bottom-0  bg-gradient-to-r from-gray-400   to-white ' id='project'>
        <div className=' text-2xl w-24 font-semibold  md:text-4xl md:text-center md:w-52 border-b-4 border-yellow-500 font-logodis'>Projects</div>
        <div className='flex flex-col md:flex-row justify-evenly pl-16 md:pl-[4rem] pt-11 text-white  '>
            <div className='md:top-0 md:w-[18rem] md:pb-16 flex flex-col  md:flex-col pl-2 relative group' >
                <img src={rf} alt="Movie database"className='size-[13rem] md:size-[17rem] object-cover object-left rounded-2xl ' ></img>
                <p className='text-yellow-800 pt-5 font-logodis md:text-white md:hidden h-[13rem] md:h-[17rem] w-[13rem] rounded-2xl md:pt-16 font-bold md:w-[17rem] md:absolute md:backdrop-blur md:group-hover:block '>Smart Speed Control in School Zones: Enhancing Road Safety with RF Tags and Li-Fi Technology </p>
            </div>
            
            <div className='md:top-0 top-[-2rem]  md:w-[18rem] flex flex-col md:flex-col pl-2 relative group' > 
                <img src={img} alt='Movie Booking Image'className=' md:pt-0  size-[13rem] md:size-[17rem] object-cover rounded-2xl' ></img>
                <p className='text-pink-800 pt-5  md:text-white font-logodis md:hidden h-[13rem] md:h-[17rem] w-[13rem] rounded-2xl md:pt-16 font-bold md:w-[17rem] md:absolute md:backdrop-blur md:group-hover:block' >MERN Stack Movie Reservation System: Simplifying Cinema Experiences</p>
            </div>


            <div className='md:top-0 top-[-3rem]   md:w-[18rem] flex  flex-col md:flex-col pl-2 relative group'>
          <img src={imdb} alt="Movie database" className='size-[13rem] md:size-[16.5rem] h-[13rem] md:h-[17rem] object-cover object-center rounded-2xl' />
          <p className='text-yellow-800 pt-5 md:text-white md:hidden h-[13rem] md:h-[17rem] w-[13rem] rounded-2xl md:pt-16 font-bold md:w-[16.5rem] md:absolute backdrop-blur md:group-hover:block text-slate-800'>
            Movies & Watchlist Manager: Your Personalized Film Guide
          </p>
        </div>
     

           
        </div>
        
    </div>

  )
}

export default Projects