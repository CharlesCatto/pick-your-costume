import { useState, useEffect } from "react";
import type { Costume } from "../data/costumeTypes";
import { useTranslation } from "./useTranslation";

// URL de l'API selon l'environnement
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const useCostumeData = () => {
	const [costumes, setCostumes] = useState<Costume[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { language } = useTranslation(); // ← Utilise 'language' au lieu de 'currentLanguage'

	useEffect(() => {
		const fetchCostumes = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`${API_URL}/api/costumes?lang=${language}`,
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
