import React from "react";
import Alert from "./alert";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="tr">
			<body>
				{/* Layout UI */}
				{/*Çocukları sayfayı veya iç içe düzeni oluşturmak istediğiniz yere yerleştirin */}
				<div className="min-h-screen">
					<Alert />
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
