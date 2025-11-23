// ScriptLoader.tsx
import { useEffect, useState } from "react";

interface ScriptLoaderProps {
	src: string;
	protocol?: string;
}

export default function ScriptLoader({ src, protocol }: ScriptLoaderProps) {
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = `${protocol}//${src}`;
		script.async = true;
		script.onload = () => setIsLoaded(true);
		script.onerror = (e) => setError(e);
		const el = document.getElementsByTagName("script")[0];
		el.parentNode.insertBefore(script, el);
		return () => {
			el.parentNode.removeChild(script);
		};
	}, [src, protocol]);

	if (error) {
		return <div>Error loading script: {error.message}</div>;
	}

	if (!isLoaded) {
		return <div>Loading script...</div>;
	}

	return null;
}
