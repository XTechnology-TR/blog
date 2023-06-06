import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
	return (
		<>
			<meta	name="keywords" content={`${CMS_NAME} blog teknoloji, bilim, blog posts, posts, yazılım, web tasarım, seo, dijital pazarlama`}	/>
			<link rel="shortcut icon" href="/favicon/favicon.ico" />
			<meta name="msapplication-TileColor" content="#000000" />
			<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
			<link rel="canonical" href="https://blog.xtechnology.co/" />
			<meta name="theme-color" content="#000" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta name="format-detection" content="telephone=no" />
			<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			<meta name="description" content="XTechnology Blog, yazılım geliştirme, web ve mobil teknolojiler, siber güvenlik, yapay zeka, veri analizi ve sosyal medya yönetimi alanlarında tecrübe paylaşımı ve yeni teknolojilerin analizi yapar." />
			<meta property="og:image" content={HOME_OG_IMAGE_URL} />
			<meta property="og:url" content="https://blog.xtechnology.co" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={CMS_NAME} />
			<meta property="og:image" content={HOME_OG_IMAGE_URL} />
			<meta property="og:image:alt" content="XTechnology Blog, yazılım geliştirme, web ve mobil teknolojiler, siber güvenlik, yapay zeka, veri analizi ve sosyal medya yönetimi alanlarında tecrübe paylaşımı ve yeni teknolojilerin analizi yapar." />
			<meta	property="og:description" content="XTechnology Blog, yazılım geliştirme, web ve mobil teknolojiler, siber güvenlik, yapay zeka, veri analizi ve sosyal medya yönetimi alanlarında tecrübe paylaşımı ve yeni teknolojilerin analizi yapar."	/>
			<meta property="og:site_name" content={CMS_NAME} />
			<meta property="og:locale" content="tr_TR" />
			<meta property="article:author" content="XTechnology" />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link
				rel="mask-icon"
				href="/favicon/safari-pinned-tab.svg"
				color="#000000"
			/>

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@xtechnology7" />
			<meta name="twitter:creator" content="@xtechnology7" />
			<meta name="twitter:url" content="https://blog.xtechnology.co" />
			<meta name="twitter:title" content="{post_title}" />
			<meta name="twitter:description"	content="XTechnology Blog, yazılım geliştirme, web ve mobil teknolojiler, siber güvenlik, yapay zeka, veri analizi ve sosyal medya yönetimi alanlarında tecrübe paylaşımı ve yeni teknolojilerin analizi yapar."		/>
			<meta name="twitter:image" content="{HOME_OG_IMAGE_URL}" />
			<meta	name="twitter:image:alt" content="XTechnology Blog, yazılım geliştirme, web ve mobil teknolojiler, siber güvenlik, yapay zeka, veri analizi ve sosyal medya yönetimi alanlarında tecrübe paylaşımı ve yeni teknolojilerin analizi yapar."
			/>
		</>
	);
}
