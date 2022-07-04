import Link from 'next/link'

export default function Header() {
  return (
    <header className="header text-gray-600 body-font bg-blue-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} passHref>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl text-white">logo</span>
          </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="font-bold mr-6 text-black tracking-wide">HOME</a>
            <a className="font-bold mr-6 text-black tracking-wide">ABOUT</a>
            <a className="font-bold mr-6 text-black tracking-wide">BLOG</a>
            <a className="font-bold mr-6 text-black tracking-wide">CONTACT</a>
        </nav>
      </div>
    </header>
  )
}