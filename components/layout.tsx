import Alert from "./alert";
import Footer from "./footer";


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="tr">
			<>
				<div className="min-h-screen">
					<Alert />
					<main>{children}</main>
				</div>
			</>
			<Footer />
		</html>
	)
}

