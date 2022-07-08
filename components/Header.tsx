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
            <a className="items font-bold mr-6 text-black tracking-wide">HOME</a>
            <a className="items font-bold mr-6 text-black tracking-wide">ABOUT</a>
            <a className="items font-bold mr-6 text-black tracking-wide">BLOG</a>
            <a className="items font-bold mr-6 text-black tracking-wide">CONTACT</a>
        </nav>
        <span className="group inline-flex items-center text-xl font-medium pl-2 pr-3 py-2">
          <ChangeThemeButton />
        </span>
      </div>
    </header>
  )
}