import Link from 'next/link'
export default function Footer() {
    return (
      
      <footer className="dark:bg-gray-800 bg-white text-gray-600 body-font bg-blue-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={'/'} passHref>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-3 text-xl text-white">KONERU-CHILDCARE</span>
            </a>
          </Link>
          <nav className="dark:text-white md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="mr-5" target={"_blank"}>Twitter</a></Link>
            <Link href={'https://www.facebook.com/w3cdpmori'}><a className="mr-5" target={"_blank"}>Facebook</a></Link>
            <Link href={'https://dribbble.com/w3cdp6084'}><a className="mr-5" target={"_blank"}>Dribbble</a></Link>
            <Link href={'https://github.com/w3cdp6084-dev'}><a className="mr-5" target={"_blank"}>GitHub</a></Link>
          </nav>
        </div>
      </footer>
    )
  }