import React, { useState } from 'react';
import { Bars3Icon} from '@heroicons/react/24/solid';


function Header() {
    const [menu,setmenu]=useState(false);

    const MenuHandler=()=>{
        setmenu(!menu);
    }

  return (
    <header className='rounded-xl '>
        <div className='flex justify-between font-bold text-lg text-purple-50 pt-2  ' >
            <div className='text-3xl pl-6 pt-0.5 font-logodis '> PortFolio</div>
            <nav className='hidden md:block '>
                <ul className='flex pt-1 pl-4 '>
                    <li><a href="#home" className='hover:text-fuchsia-500'> Homepage</a></li>
                    <li><a href='#project' className='hover:text-fuchsia-500'>Projects</a></li>
                    <li><a href='#Resume' className='hover:text-fuchsia-500'>Resume</a></li>
                    <li><a href='#about' className='hover:text-fuchsia-500'>About</a></li>
                    <li><a href='#contact' className='hover:text-fuchsia-500'>Contact us</a></li>
                </ul>
            </nav>
            
            <button onClick={MenuHandler} className='md:hidden block pr-3' ><Bars3Icon className='h-7 text-white'/></button>
            
            {menu && <nav className='block md:hidden menu'>
                <ul className='text-white'>
                <li onClick={MenuHandler}><a href="#/"> Homepage</a></li>
                    <li onClick={MenuHandler}><a href='#project'>Projects</a></li>
                    <li onClick={MenuHandler}><a href='#resume'>Resume</a></li>
                    <li onClick={MenuHandler}><a href='#about'>About</a></li>
                    <li onClick={MenuHandler}><a href='#contact'>Contact us</a></li>
                </ul>
            </nav>}
        
        
        </div>
       
    </header>
  )
}

export default Header