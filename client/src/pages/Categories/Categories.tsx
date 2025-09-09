import { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import type { Costume } from "../../data/costumeTypes";

// URL de l'API selon l'environnement
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

const Categories = () => {
	const { t, language } = useTranslation();
	const [costumes, setCostumes] = useState<Costume[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

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

	const categories = [
		"all",
		"fantasy",
		"horror",
		"movie",
		"animal",
		"professional",
		"historical",
		"funny",
		"holiday",
	];

	const filteredCostumes =
		selectedCategory === "all"
			? costumes
			: costumes.filter((costume) => costume.category === selectedCategory);

	if (loading) {
		return <div className={styles.loading}>{t("common.loading")}</div>;
	}

	if (error) {
		return (
			<div className={styles.error}>
				{t("common.error")}: {error}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h1>{t("categories.title")}</h1>

			<div className={styles.categoryFilter}>
				<h2>{t("categories.filterBy")}</h2>
				<div className={styles.categoryButtons}>
					{categories.map((category) => (
						<button
							type="button"
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`${styles.categoryButton} ${
								selectedCategory === category ? styles.active : ""
							}`}
						>
							{category === "all"
								? t("categories.all")
								: t(`category.${category}`)}
						</button>
					))}
				</div>
			</div>

			<div className={styles.costumesGrid}>
				{filteredCostumes.length === 0 ? (
					<p className={styles.noResults}>{t("categories.noCostumes")}</p>
				) : (
					filteredCostumes.map((costume) => (
						<div key={costume.id} className={styles.costumeCard}>
							<h3>{costume.name}</h3>
							<p className={styles.category}>
								{t("common.category")}: {t(`category.${costume.category}`)}
							</p>
							<p className={styles.difficulty}>
								{t("common.difficulty")}:{" "}
								{t(`difficulty.${costume.difficulty}`)}
							</p>
							<p className={styles.price}>
								{t("common.price")}: {t(`price.${costume.price_range}`)}
							</p>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default Categories;
