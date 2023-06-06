import Link from "next/link";


export default function Intro() {
	return (
		<section className="mt-16 mb-16 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">
			<h1 className="mb-40 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
				<Link href="/" className="hover:underline">
					XTechnology
				</Link>
				.
			</h1>
			<h4 className="mt-10 text-lg md:pl-8">
				Web ve Mobil Yazılımlar, Hack ve Siber Güvenlik, Analizler..
			</h4>
			<h4 className="mt-5  text-rg md:pl-8 md:text-right">
				Yeteri kadar iyi geliştirilmiş bir teknoloji, sihirden farksızdır. . .
			</h4>
		</section>
	);
}
