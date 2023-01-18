import Footer from "./footer"
import Meta from "./meta"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"



export default function Layout({ children }) {
	return (
		<>
			<Head>
			 	<Meta />
			</Head>
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}
