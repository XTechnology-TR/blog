import Alert from "./alert";
import Footer from "./footer";


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<div className="min-h-screen">
				<Alert />
				<main>{children}</main>
			</div>
			<Footer />
		</>
	)
}

