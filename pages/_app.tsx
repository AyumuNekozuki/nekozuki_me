import 'tailwindcss/tailwind.css';
import 'swiper/css/bundle'
import '../styles/global.scss'

import '../styles/pages_about.scss'

import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComingSoonbox from '../components/ComingSoonbox';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <Header />
      <div className='py-5 bg-themepurple_bg'>
        <Component {...pageProps} />
      </div>
      <Footer /> */}
			<ComingSoonbox />
			<Component {...pageProps} />
    </div>
  )
}

export default MyApp
