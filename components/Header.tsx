import Link from 'next/link'
import React, { VFC } from 'react'
import { ChangeThemeButton } from '../pages/ChangeThemeButton'

export default function Header() {
  return (
    <header className="dark:bg-gray-800 header text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-8 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">logo</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={'/'} passHref><a className="dark:text-white items font-bold mr-6 tracking-wide">HOME</a></Link>
          <Link href={'/about'} passHref><a className="dark:text-white items font-bold mr-6 tracking-wide">ABOUT</a></Link>
          <Link href={'/list'} passHref><a className="dark:text-white items font-bold mr-6 tracking-wide">BLOG</a></Link>
            <a className="dark:text-white items font-bold mr-6 tracking-wide">CONTACT</a>
        </nav>
        <span className="dark:text-white group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
          <ChangeThemeButton />
        </span>
      </div>
    </header>
  )
}