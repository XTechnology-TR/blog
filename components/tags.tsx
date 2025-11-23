
import {
	ReactNode,
	Key,
} from "react";

export default function Tags({ tags }) {

	return (
		<div className="mx-auto max-w-2xl">
			<p className="text-sl mt-8  font-bold">
				İçerik Etiketleri:
				{tags.edges.map(
					(
						tag: {
							node: {
								name: ReactNode;
							};
						},
						index: Key,
					) => (
						<span key={index} className="ml-4 font-normal">
							{tag.node.name}
						</span>
					),
				)}
			</p>
		</div>
	);
}
