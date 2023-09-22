export default function Container({ children }) {
	return <div className="container mx-auto px-5">
		<div className="w-dyn-list">{children}</div></div>;
}
