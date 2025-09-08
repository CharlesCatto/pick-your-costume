import { useState, useEffect } from "react";
import type { Costume } from "../data/costumeTypes";
import { useLanguage } from "./useLanguage";

export const useCostumeData = () => {
	const [costumes, setCostumes] = useState<Costume[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { language } = useLanguage();

	useEffect(() => {
		const fetchCostumes = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`http://localhost:3001/api/costumes?lang=${language}`,
				);

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = await response.json();
				setCostumes(data);
				setError(null);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
				console.error("Error fetching costumes:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchCostumes();
	}, [language]);

	return { costumes, loading, error };
};
