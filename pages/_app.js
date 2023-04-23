import { useEffect } from 'react';
import Aos from 'aos';
import '../styles/globals.css'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }) {

  useEffect(()=>{
    Aos.init({
      duration: 2000
    });
    },[])

  return <Component {...pageProps} />
}
