import { useState, useEffect } from "react";

interface LazyImageProps {
	src: string;
	alt: string;
	className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
	const [imageSrc, setImageSrc] = useState<string>("");
	const [error, setError] = useState<boolean>(false);

	useEffect(() => {
		const finalSrc = `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

		console.log("🔎 LazyImage final src:", finalSrc);

		const img = new Image();
		img.src = finalSrc;

		img.onload = () => setImageSrc(finalSrc);
		img.onerror = () => {
			console.error("❌ Failed to load image:", finalSrc);
			setError(true);
		};
	}, [src]);

	if (error) {
		return <div className="text-red-500">Image not found</div>;
	}

	return (
		<img
			src={imageSrc}
			alt={alt}
			className={className || "w-48 h-auto object-cover"}
		/>
	);
};

export default LazyImage;
