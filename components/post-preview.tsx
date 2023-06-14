import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
	title,
	coverImage,
	excerpt,
	author,
	slug,
}) {
	return (
		<div className="separator">
			<div>
				<div className="mb-5">
					{coverImage && (
						<CoverImage title={title} coverImage={coverImage} slug={slug} />
					)}
				</div>
				<h3 className="text-2xl mb-3 leading-snug">
					<Link
						href={`/posts/${slug}`}
						className="hover:underline"
						dangerouslySetInnerHTML={{ __html: title }}
					></Link>
				</h3>

				<div
					className="text-sl leading-relaxed mb-4"
					dangerouslySetInnerHTML={{ __html: excerpt }}
				/>
				<Avatar author={author} />
			</div>
		</div>
	)
}
