import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

export default function Tags({ tags }) {
	return (
		<div className="mx-auto max-w-2xl">
			<p className="text-sl mt-8  font-bold">
				İçerik Etiketleri:
				{tags.edges.map((tag: { node: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode>; }; }, index: Key) => (
					<span key={index} className="ml-4 font-normal">
						{tag.node.name}
					</span>
				))}
			</p>
		</div>
	);
}
