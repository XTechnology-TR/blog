import Image from "next/image";
import "../pages/dev";
import Link from "next/link";

export default function Alert({}) {
	return (
		<>
			<div className="mega-xtech-logo-wrap">
				<Link href={`/`} className="hover:underline">
					<Image
						src="/xtechnology-logo.svg"
						loading="lazy"
						alt="xtechnology-logo"
						className="mega-xtech-logo"
						width={100}
						height={100}
					/>
				</Link>
			</div>
			<div
				data-animation="default"
				className="navbar w-nav background-color: rgb(255, 255, 255)"
				data-easing2="linear"
				data-easing="linear"
				data-collapse="medium"
				role="banner"
				data-no-scroll="1"
				data-duration="250"
				data-doc-height="1"
			>
				<div className="nav-container w-container">
					<div className="brand homepage w-nav-brand">
						<Link href={`/`} className="hover:underline">
							<Image
								src="/xtechnology-logo.svg"
								loading="lazy"
								alt="xtechnology-logo"
								className="mega-xtech-logo"
								width={100}
								height={100}
							/>
						</Link>
					</div>

					<nav role="navigation" className="nav-menu w-nav-menu centered">
						<a
							href="https://xtechnology.co/giris"
							className="nav-link
						hidden-login w-inline-block"
						>
							<div className="nav-link-text">Müşteri Girişi</div>
						</a>
						<a
							data-w-id="kayit-ol"
							href="https://xtechnology.co/kayit"
							className="nav-link hidden-sign-up w-inline-block"
						>
							<div className="nav-link-text">Kayıt Ol</div>
						</a>
						<a
							data-w-id="hizmetler"
							href="https://xtechnology.co/hizmetlerimiz"
							className="nav-link
						w-inline-block"
						>
							<div className="nav-link-text">Hizmetlerimiz</div>
							<div className="nav-link-underline"></div>
						</a>
						<a
							data-w-id="referans"
							href="https://xtechnology.co/referanslar"
							className="nav-link
						w-inline-block"
						>
							<div className="nav-link-text">Referanslar</div>
							<div className="nav-link-underline"></div>
						</a>
						<a
							data-w-id="xakademi"
							href="https://xtechnology.co/akademi"
							className="nav-link w-inline-block"
						>
							<div className="nav-link-text">X-Akademi</div>
							<div className="nav-link-underline"></div>
						</a>
						<a
							id="blog-link"
							data-w-id="blogx"
							href="https://blog.xtechnology.co"
							className="nav-link
						w-inline-block"
						>
							<div className="nav-link-text">Blog</div>
							<div className="nav-link-underline"></div>
						</a>
						<a
							id="discover"
							data-w-id="kesif"
							href="https://xtechnology.co/kesfet"
							className="nav-link
						w-inline-block"
						>
							<div className="nav-link-text">Keşfetmek</div>
							<div className="nav-link-underline"></div>
						</a>
						<a
							id="iletisim"
							data-w-id="kesif"
							href="https://xtechnology.co/iletisim"
							className="nav-link
						w-inline-block"
						>
							<div className="nav-link-text">İletişim</div>
							<div className="nav-link-underline"></div>
						</a>
					</nav>
					<div className="nav-menu-secondary">
						<a
							href="https://xtechnology.co/giris"
							className="nav-link log-in
						w-inline-block"
						>
							<div>Müşteri Girişi</div>
						</a>
						<a
							href="https://xtechnology.co/kayit"
							className="nav-link sign-up
						w-inline-block"
						>
							<div>Kayıt Ol</div>
						</a>
					</div>
					<div
						data-w-id="menu-buton-icon"
						className="menu-button w-nav-button"
						aria-label="menu"
						role="button"
						aria-controls="w-nav-overlay-0"
						aria-haspopup="menu"
						aria-expanded="false"
					>
						<div className="menu-icon-wrap">
							<div className="menu-line top"></div>
							<div className="menu-line bottom"></div>
						</div>
					</div>
				</div>
				<div
					className="w-nav-overlay"
					data-wf-ignore
					id="w-nav-overlay-0"
				></div>
			</div>
		</>
	);
}