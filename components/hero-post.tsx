import Avatar from './avatar'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function HeroPost({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug,
}) {
	return (
		<section>
			<div className="mb-8 md:mb-16">
				{coverImage && (
					<CoverImage title={title} coverImage={coverImage} slug={slug} />
				)}
			</div>
			<div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
				<div>
					<h3 className="mb-4 text-2xl lg:text-2xl leading-tight">
						<Link
							href={`/posts/${slug}`}
							className="hover:underline"
							dangerouslySetInnerHTML={{ __html: title }}
						></Link>
					</h3>
				</div>
				<div>
					<div
						className="text-lg leading-relaxed mb-4"
						dangerouslySetInnerHTML={{ __html: excerpt }}
					/>
					<Avatar author={author} />
				</div>
			</div>
		</section>
	)
}
