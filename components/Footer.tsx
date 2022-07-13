import Link from 'next/link'
import * as Icon from 'react-feather';

export default function Footer() {
    return (
      
      <footer className="footer dark:bg-gray-800 bg-white text-gray-600 body-font">
        <div className="container mx-auto">
          <Link href={'/'} passHref>
            <a className="logo-wrap title-font font-medium text-gray-900 md:mb-0">
              <span className="text-xl text-white">logo</span>
            </a>
          </Link>
          <nav className="py-6 sns-links dark:text-white flex flex-wrap items-center text-base justify-center">
            <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="mr-4 text-white" target={"_blank"}><Icon.Twitter /></a></Link>
            <Link href={'https://www.facebook.com/w3cdpmori'}><a className="mr-4 text-white " target={"_blank"}><Icon.Facebook /></a></Link>
            <Link href={'https://dribbble.com/w3cdp6084'}><a className="mr-4 text-white " target={"_blank"}><Icon.Dribbble /></a></Link>
            <Link href={'https://github.com/w3cdp6084-dev'}><a className="mr-4 text-white" target={"_blank"}><Icon.GitHub /></a></Link>
            <Link href={'https://github.com/w3cdp6084-dev'}><a className="mr-4 text-white" target={"_blank"}><Icon.Linkedin /></a></Link>
          </nav>
          <div className='links py-6'>
            <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="font-bold mr-10 text-white dark:text-white" target={"_blank"}>koneru</a></Link>
            <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="font-bold mr-10 text-white dark:text-white" target={"_blank"}>koneru</a></Link>
            <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="font-bold mr-10 text-white dark:text-white" target={"_blank"}>koneru</a></Link>
            <Link href={'https://twitter.com/w3cdp6084w3cdp'}><a className="font-bold text-white dark:text-white" target={"_blank"}>koneru</a></Link>
          </div>
          <p className='copy text-white dark:text-white text-xs'>&copy; konekone.</p>
        </div>
      </footer>
    )
  }