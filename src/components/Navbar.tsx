'use client';

import Link from "next/link"
import Image from "next/image"
import { Button } from '@/components'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-8">
        <Link href='/' className="flex justify-center items-center">
          <Image 
           src='/logo.svg'
           alt='Car Hub Logo'
           width='118'
           height='18'
           className="object-contain" />
        </Link>
        <Button 
         title='Sign In'
         btnType="button"
         customStyles="xl:text-primary rounded-full bg-primary xl:bg-white text-white min-w-[130px]"/>
      </nav>
    </header>
  )
}

export default Navbar