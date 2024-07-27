import React, { useState } from 'react';
import { Bars3Icon} from '@heroicons/react/24/solid';


function Header() {
    const [menu,setmenu]=useState(false);

    const MenuHandler=()=>{
        setmenu(!menu);
    }

  return (
    <header className='rounded-xl'>
        <div className='flex justify-between font-bold text-lg text-purple-50 pt-2  ' >
            <div className='text-3xl pl-7 pt-0.5 font-logodis '> PortFolio</div>
            <nav className='hidden md:block'>
                <ul className='flex pt-1 pl-4 '>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>About</li>
                </ul>
            </nav>
            
            <button onClick={MenuHandler} className='md:hidden block pr-3' ><Bars3Icon className='h-7 text-white'/></button>
            
            {menu && <nav className='block md:hidden menu'>
                <ul className='text-white'>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>About</li>
                </ul>
            </nav>}
        
        
        </div>
       
    </header>
  )
}

export default Header