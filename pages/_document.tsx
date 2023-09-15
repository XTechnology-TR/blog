import Document, { Head, Html, Main, NextScript } from "next/document";
import Meta from "../components/meta";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="tr">
				<Head>
					<Meta />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
