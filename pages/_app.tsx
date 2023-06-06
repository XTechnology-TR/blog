import type { AppProps } from "next/app"
import { Analytics } from '@vercel/analytics/react';
import "../styles/index.css"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
			<Analytics debug={false} />;
		</>
	);
}

// Manually disable console.log() in production (simpler/arguably more elegant than libs)
if (process.env.NODE_ENV === "production") {
  console.log = function () {}
}