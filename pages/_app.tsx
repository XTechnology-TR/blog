import '../styles/index.css'
import { Inter } from '@next/font/google'
import Meta from '../components/meta'



const inter = Inter({ subsets: ['latin'] })


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
