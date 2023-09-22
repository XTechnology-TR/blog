export default function Categories({ categories }) {
	return (
		<span className="text-small first-line:ml-1">
			<br />
			İçerik Kategorisi:
			{categories.edges.length > 0 ? (
				categories.edges.map((category, index) => (
					<span key={index} className="ml-1">
						{category.node.name}
					</span>
				))
			) : (
				<span className="ml-1">{categories.edges.node.name}</span>
			)}
		</span>
	);
}
