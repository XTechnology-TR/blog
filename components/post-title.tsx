export default function PostTitle({ children }) {
	return (
		<h1
			className="mb-12 text-center text-2md font-bold  leading-tight tracking-tighter md:text-left md:text-2xl md:leading-none lg:text-2xl"
			dangerouslySetInnerHTML={{ __html: children }}
		/>
	);
}
