import { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import type { Costume } from "../../data/costumeTypes";
import { getCategoryEmoji } from "../../utils/Helpers";
import LazyImage from "../../components/LazyImage/LazyImage";

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

				if (!response.ok)
					throw new Error(`HTTP error! status: ${response.status}`);

				const data = await response.json();
				setCostumes(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
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

	const getCostumeCount = (category: string) => {
		return category === "all"
			? costumes.length
			: costumes.filter((c) => c.category === category).length;
	};

	if (loading)
		return <div className={styles.loading}>{t("common.loading")}</div>;
	if (error)
		return (
			<div className={styles.error}>
				{t("common.error")}: {error}
			</div>
		);

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>{t("categories.title")}</h1>
				<p className={styles.subtitle}>
					Discover {costumes.length} amazing costumes across all categories
				</p>
			</header>

			{/* Filtres de catégories */}
			<section className={styles.categorySection}>
				<h2>{t("categories.filterBy")}</h2>
				<div className={styles.categoryGrid}>
					{categories.map((category) => (
						<button
							type="button"
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`${styles.categoryCard} ${
								selectedCategory === category ? styles.active : ""
							}`}
						>
							<span className={styles.categoryEmoji}>
								{category === "all" ? "🎭" : getCategoryEmoji(category)}
							</span>
							<span className={styles.categoryName}>
								{category === "all"
									? t("categories.all")
									: t(`category.${category}`)}
							</span>
							<span className={styles.categoryCount}>
								({getCostumeCount(category)})
							</span>
						</button>
					))}
				</div>
			</section>

			{/* Résultats */}
			<section className={styles.resultsSection}>
				<div className={styles.resultsHeader}>
					<h2>
						{selectedCategory === "all"
							? t("categories.all")
							: t(`category.${selectedCategory}`)}{" "}
						<span className={styles.resultsCount}>
							({filteredCostumes.length})
						</span>
					</h2>
				</div>

				{filteredCostumes.length === 0 ? (
					<div className={styles.emptyState}>
						<p>🎭</p>
						<p>{t("categories.noCostumes")}</p>
					</div>
				) : (
					<div className={styles.costumesGrid}>
						{filteredCostumes.map((costume) => (
							<article key={costume.id} className={styles.costumeCard}>
								{costume.image_url && (
									<div className={styles.imageContainer}>
										<LazyImage
											src={costume.image_url}
											alt={costume.name}
											className={styles.costumeImage}
										/>
									</div>
								)}

								<div className={styles.costumeContent}>
									<h3 className={styles.costumeName}>{costume.name}</h3>

									<div className={styles.costumeMeta}>
										<span className={styles.categoryBadge}>
											{getCategoryEmoji(costume.category)}{" "}
											{t(`category.${costume.category}`)}
										</span>

										<div className={styles.stats}>
											<span className={styles.difficulty}>
												⚡{t(`difficulty.${costume.difficulty}`)}
											</span>
											<span className={styles.price}>
												💰{t(`price.${costume.price_range}`)}
											</span>
										</div>
									</div>

									<p className={styles.description}>{costume.description}</p>

									{costume.tags && costume.tags.length > 0 && (
										<div className={styles.tags}>
											{costume.tags.slice(0, 3).map((tag) => (
												<span key={tag} className={styles.tag}>
													#{tag}
												</span>
											))}
										</div>
									)}
								</div>
							</article>
						))}
					</div>
				)}
			</section>
		</div>
	);
};

export default Categories;
