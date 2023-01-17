import Footer from "./footer"
import Meta from "./meta"
import Head from "next/head"
import { CMS_NAME } from "../lib/constants"
export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>
					Yeteri kadar iyi geliştirilmiş bir teknoloji, sihirden farksızdır.{" "}
					{CMS_NAME}
				</title>
				<Meta></Meta>
						</Head>
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}
