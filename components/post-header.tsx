import Avatar from "./avatar";
import Categories from "./categories";
import CoverImage from "./cover-image";
// rome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
import Date from "./date";
import PostTitle from "./post-title";

export default function PostHeader({
																		 title,
																		 coverImage,
																		 date,
																		 author,
																		 categories,
																	 }) {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="hidden md:block md:mb-12">
				<Avatar author={author}/>
			</div>
			<div className="mb-8 md:mb-16 sm:mx-0">
				<CoverImage title={title} coverImage={coverImage}/>
			</div>
			<div className="max-w-2xl mx-auto">
				<div className="block md:hidden mb-6">
					<Avatar author={author}/>
				</div>
				<div className="mb-6 text-lg">
					Gönderi Tarihi: <Date dateString={date}/>
					<Categories categories={categories}/>
				</div>
			</div>
		</>
	);
}
