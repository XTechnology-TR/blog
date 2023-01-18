import {AppProps} from 'next/app'
import {Inter} from '@next/font/google'
import '../styles/index.css'


const inter = Inter({subsets: ['latin']})


function MyApp({Component, pageProps}: AppProps) {
	return <Component {...pageProps} />
}

(

	<>

		<style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

	</>
)
export default MyApp
