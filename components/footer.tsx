import Container from './container'


export default function Footer() {
	return (
		<footer className="bg-black border-t border-accent-2">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3
						className="text-4xl text-white lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						Sizde Artık Dijital Dünyanın Nimetlerinden Faydalanın.
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href="https://xtechnology.co/hizmetlerimiz"
							className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Hizmetlerimiz
						</a>
						<a
							href={"https://xtechnology.co/iletisim"}
							className="mx-3 font-bold hover:underline  bg-black hover:bg-white hover:text-black border border-black text-white"
						>
							İletişim
						</a>
					</div>
				</div>
			</Container>
		</footer>
	)
}
