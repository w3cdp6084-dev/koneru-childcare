import '../styles/globals.scss';
import '../styles/component.scss';
import '../styles/color.scss'
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='wrap'>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Header />
        <Component {...pageProps} />
        <Footer />  
      </ThemeProvider>
    </div>
  );
}

export default MyApp;