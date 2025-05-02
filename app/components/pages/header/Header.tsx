"use client"

import React from 'react'
import { MiniTopHeader } from './MiniTopHeader'
import Link from 'next/link'
import Image from 'next/image'
import { SearchInput } from './Search/SearchInput'
import { HeaderProfileButton } from './header-profile-button'
import { HamburgerMenu } from './hamburger-menu'

export const Header = () => {
  return (
    <>
      <MiniTopHeader />
      <header className='w-full bg-white h-[90px]'>
        <nav className="container md:flex h-full items-center justify-between md:visible  hidden invisible">
          <div className='flex items-center gap-8'>
            <Link href={'/'} className='flex items-center justify-center'>
              <Image src={'/images/logo.png'} alt='لوگو وبسایت' width={96} height={0} />
            </Link>
            <SearchInput />
          </div>
          <div className='flex child:px-4 child-hover:bg-opacity-90 child:duration-150 child:h-12 child:rounded-md child:flex child:items-center child:justify-center child:gap-2 text-sm items-center gap-4'>
            <HeaderProfileButton />
            <Link className='bg-primary text-white' href={'/'}>
              ایجاد شغل
            </Link>
          </div>
        </nav>

        {/* Mobile navbar */}
        <nav className=' w-full px-5 flex items-center justify-between h-full md:hidden md:invisible'>
          <Link href={'/'} className='flex items-center justify-center'>
            <Image src={'/images/logo.png'} alt='لوگو وبسایت' width={96} height={0} />
          </Link>
          <HamburgerMenu />
        </nav>

      </header>
    </>
  )
}
