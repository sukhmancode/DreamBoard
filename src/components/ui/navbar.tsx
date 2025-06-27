import Image from 'next/image'
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6";
import { ToggleThemeSwitch } from '../theme-button';
import { Button } from './button';

const Navbar = () => {
  return (
    <nav className='sticky w-full top-4  flex items-center justify-between place-self-center
    flex-wrap gap-2 p-2 px-4 mt-4 rounded-xl  backdrop-blur-sm bg-neutral-200/50 dark:bg-neutral-50/10 h-full'>
       <Image
       src={'/logo.png'}
       alt='logo'
       width={80}
       height={80}
       className='rounded-xl'/>

       <div>
            <div className='flex flex-row items-center gap-5'>
                    <div className="bg-primary flex flex-row items-center gap-2 pt-2 pb-1.5 px-4 justify-center rounded-md cursor-pointer transition hover:bg-primary/80">
            <FaPhoneVolume className="text-secondary" /> {/* Use text color for icon */}
            <Button variant="ghost" className="text-secondary hover:bg-transparent">
                Book a call
            </Button>
            </div>
                <ToggleThemeSwitch />
            </div>
       </div>
    </nav>
  )
}

export default Navbar