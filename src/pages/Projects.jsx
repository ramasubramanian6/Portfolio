import React from 'react'
import img from '../assets/bookticket.png';
import imdb from '../assets/movie-website-14.jpg';
import rf from '../assets/sRF.jpg';

function Projects() {
  return (
    <div className=' pt-10 bg-gradient-to-l from-white to-teal-400 '>
        <div className=' text-2xl w-28 font-semibold  md:text-4xl md:text-center md:w-52 border-b-4 border-yellow-500 font-logodis'>Projects</div>
        <div className='flex flex-col md:flex-row justify-evenly pl-20 md:pl-[5rem] pt-11 text-white  '>
            <div className=' md:w-[18rem] flex  md:flex-col pl-2 relative group' >
                <img src={rf} alt="Movie database"className='size-[13rem] md:size-[17rem] object-cover object-left rounded-2xl ' ></img>
                <p className='hidden h-[13rem] md:h-[17rem] w-[13rem] rounded-2xl md:pt-16 font-bold md:w-[17rem] absolute backdrop-blur group-hover:block '>Smart Speed Control in School Zones: Enhancing Road Safety with RF Tags and Li-Fi Technology </p>
            </div>
            
            <div className='pt-2 md:w-[18rem] flex md:flex-col pl-2 relative group' > 
                <img src={img} alt='Movie Booking Image'className=' md:pt-0  size-[13rem] md:size-[17rem] object-cover rounded-2xl' ></img>
                <p className='hidden h-[13rem] md:h-[17rem] w-[13rem] rounded-2xl md:pt-16 font-bold md:w-[17rem] absolute backdrop-blur group-hover:block' >MERN Stack Movie Reservation System: Simplifying Cinema Experiences</p>
            </div>


            <div className='pt-2 md:w-[18rem] flex md:flex-col pl-2 relative group'>
          <img src={imdb} alt="Movie database" className='h-[13rem] md:h-[17rem] object-cover object-center rounded-2xl' />
          <p className='hidden h-[13rem] md:h-[17rem] w-[13rem] rounded-2xl md:pt-16 font-bold md:w-[17.5rem] absolute backdrop-blur group-hover:block'>
            Movies & Watchlist Manager: Your Personalized Film Guide
          </p>
        </div>
     

           
        </div>
        
    </div>

  )
}

export default Projects