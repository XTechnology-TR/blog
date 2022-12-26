import Avatar from "./avatar"
import CoverImage from "./cover-image"
// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Date from "./date"
import Link from "next/link"

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
			<h3 className="text-3xl mb-3 leading-snug">
				<Link
					href={`/posts/${slug}`}
					className="hover:underline"
					// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
					dangerouslySetInnerHTML={{ __html: title }}
				/>
			</h3>
			<div className="text-lg mb-4">
				<Date dateString={date} />
			</div>
			<div
				className="text-lg leading-relaxed mb-4"
				// rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: excerpt }}
			/>
			<Avatar author={author} />
		</div>
	)
}
