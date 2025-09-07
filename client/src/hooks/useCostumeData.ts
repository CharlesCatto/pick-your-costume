import { useState, useEffect } from "react";
import type { Costume } from "../data/costumeTypes";

export const useCostumeData = () => {
	const [costumes, setCostumes] = useState<Costume[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCostumes = async () => {
			console.log("Fetching costumes from API...");
			try {
				const response = await fetch("http://localhost:3001/api/costumes");
				console.log("API response status:", response.status);
				if (!response.ok) {
					throw new Error("Failed to fetch costumes");
				}
				const data = await response.json();
				console.log("Costumes data received:", data);
				setCostumes(data);
			} catch (err) {
				console.error("Error fetching costumes:", err);
				setError(err instanceof Error ? err.message : "An error occurred");
				setCostumes([]);
			} finally {
				setLoading(false);
				console.log("Loading completed");
			}
		};

		fetchCostumes();
	}, []);

	return { costumes, loading, error };
};
