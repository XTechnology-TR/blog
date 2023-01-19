import Avatar from "./avatar";
import CoverImage from "./cover-image";
// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Date from "./date";
import Link from "next/link";

export default function PostPreview({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<div>
			<div className="mb-5">
				{coverImage && (
					<CoverImage title={title} coverImage={coverImage} slug={slug} />
				)}
			</div>
			<h3 className="mb-3 text-3xl leading-snug">
				<Link
					href={`/posts/${slug}`}
					className="hover:underline"
					// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			</h3>
			<div className="mb-4 text-lg">
				<Date dateString={date} />
			</div>
			<div
				className="mb-4 text-lg leading-relaxed"
				// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
			<Avatar author={author} />
		</div>
	);
}
