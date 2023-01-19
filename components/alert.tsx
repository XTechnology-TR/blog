import Container from "./container";
import cn from "classnames";
import "../pages/dev";
import Link from "next/link";

export default function Alert({ preview }) {
	return (
		<div
			className={cn("border-b", {
				"bg-black text-white": preview,
				"border-accent-2 bg-black": !preview,
			})}
		>
			<Container>
				<div className="py-2 text-center text-sm text-white">
					{preview ? (
						<>
							Bu Blog geliştirme aşamasında.{" "}
							<Link
								href="/api/exit-preview"
								className="underline transition-colors duration-200 hover:text-cyan"
							>
								Bu blog aktif geliştirme aşamasında
							</Link>{" "}
							Detaylı Bilgi İçin..
						</>
					) : (
						<>
							Bu blog aktif geliştirme aşamasında{" "}
							<Link
								href="/dev"
								className="underline transition-colors duration-200 hover:text-success"
							>
								Detaylı Bilgi İçin..
							</Link>
							.
						</>
					)}
				</div>
			</Container>
		</div>
	);
}
