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
			    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  			  <meta http-equiv="x-ua-compatible" content="ie=edge">
					<meta name="viewport" content="width=device-width,
						minimum-scale=1.0, maximum-scale=1.0,
						user-scalable=no, shrink-to-fit=no">
					<meta name="format-detection" content="telephone=no">
			</Head>
			<Meta />
			<div className="min-h-screen">
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}
