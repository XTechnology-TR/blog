import { NextUIProvider } from '@nextui-org/react';
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
