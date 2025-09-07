import { useState, useEffect } from "react";
import styles from "./Categories.module.css";
import { useTranslation } from "../../hooks/useTranslation";

// Types pour les costumes (à déplacer dans types.ts plus tard)
interface Costume {
	id: number;
	name: string;
	category: string;
	difficulty: string;
	price_range: string;
	description: string;
	image_url: string;
	tags: string[];
}

const Categories = () => {
	const { t } = useTranslation();
	const [costumes, setCostumes] = useState<Costume[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	useEffect(() => {
		// Ici tu feras l'appel API plus tard
		const fetchCostumes = async () => {
			try {
				const response = await fetch("http://localhost:3001/api/costumes");
				const data = await response.json();
				setCostumes(data);
			} catch (error) {
				console.error("Error fetching costumes:", error);
			}
		};

		fetchCostumes();
	}, []);

	const categories = [
		"all",
		"fantasy",
		"horror",
		"movie",
		"animal",
		"professional",
		"historical",
	];
	const filteredCostumes =
		selectedCategory === "all"
			? costumes
			: costumes.filter((costume) => costume.category === selectedCategory);

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
							className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ""}`}
						>
							{category === "all" ? "All" : category}
						</button>
					))}
				</div>
			</div>

			<div className={styles.costumesGrid}>
				{filteredCostumes.map((costume) => (
					<div key={costume.id} className={styles.costumeCard}>
						<h3>{costume.name}</h3>
						<p className={styles.category}>{costume.category}</p>
						<p className={styles.difficulty}>
							Difficulty: {costume.difficulty}
						</p>
						<p className={styles.price}>Price: {costume.price_range}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
