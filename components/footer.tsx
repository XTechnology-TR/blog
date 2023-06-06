import Container from "./container";

export default function Footer() {
	return (
		<footer className="border-t border-accent-2 bg-black">
			<Container>
				<div className="flex flex-col items-center py-28 lg:flex-row">
					<h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter text-white lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
						Sizde Artık Dijital Dünyanın Nimetlerinden Faydalanın.
					</h3>
					<div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
						<a
							href="https://xtechnology.co/hizmetlerimiz"
							className="mx-3 mb-6 border border-black bg-black py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
						>
							Hizmetlerimiz
						</a>
						<a
							href={"https://xtechnology.co/iletisim"}
							className="mx-3 border border-black  bg-black font-bold text-white hover:bg-white hover:text-black hover:underline"
						>
							İletişim
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
