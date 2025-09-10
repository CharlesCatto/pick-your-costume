import { useState, useMemo, useEffect } from "react";
import Card from "../../components/Card/Card";
import { useTranslation } from "../../hooks/useTranslation";
import { useCostumeHelpers } from "../../utils/Helpers";
import type {
	Costume,
	CostumeCategory,
	PriceRange,
} from "../../data/costumeTypes";
import styles from "./Costumes.module.css";
import LoadingEmoji from "../../components/LoadingEmoji/LoadingEmoji";

const Costumes = () => {
	const { t } = useTranslation();
	const { costumes, loading, getAllCategories, getCategoryDisplayName } =
		useCostumeHelpers();

	// --- États des filtres et modes ---
	const [selectedCategories, setSelectedCategories] = useState<
		CostumeCategory[]
	>([]);
	const [isRandomMode, setIsRandomMode] = useState(false);
	const [currentCostumeIndex, setCurrentCostumeIndex] = useState(0);
	const [isBlurred, setIsBlurred] = useState(false);
	const [priceFilter, setPriceFilter] = useState<PriceRange | "all">("all");

	// --- Récupération des catégories ---
	const categories = useMemo(() => getAllCategories(), [getAllCategories]);

	// --- Filtrage des costumes ---
	const filteredCostumes: Costume[] = useMemo(() => {
		let filtered = costumes;

		// Filtre par catégorie
		if (selectedCategories.length > 0) {
			filtered = filtered.filter((costume) =>
				selectedCategories.includes(costume.category),
			);
		}

		// Filtre par prix
		if (priceFilter !== "all") {
			filtered = filtered.filter(
				(costume) => costume.price_range === priceFilter,
			);
		}

		return filtered;
	}, [selectedCategories, priceFilter, costumes]);

	// --- Réinitialiser l'index quand les filtres changent ---
	useEffect(() => {
		setCurrentCostumeIndex(0);
		if (filteredCostumes.length === 0) {
			setIsRandomMode(false);
			setIsBlurred(false);
		}
	}, [filteredCostumes]);

	// --- Gestion des catégories ---
	const selectAllCategories = () => {
		setSelectedCategories(categories as CostumeCategory[]);
		setIsRandomMode(false);
	};

	const deselectAllCategories = () => {
		setSelectedCategories([]);
		setIsRandomMode(false);
	};

	const toggleSelectAll = () => {
		if (selectedCategories.length === categories.length) {
			deselectAllCategories();
		} else {
			selectAllCategories();
		}
	};

	const toggleCategory = (category: CostumeCategory) => {
		setSelectedCategories((prev) =>
			prev.includes(category)
				? prev.filter((c) => c !== category)
				: [...prev, category],
		);
		setIsRandomMode(false);
	};

	// --- Navigation en mode aléatoire ---
	const nextCostume = () => {
		if (filteredCostumes.length === 0) {
			setIsRandomMode(false);
			return;
		}
		const randomIndex = Math.floor(Math.random() * filteredCostumes.length);
		setCurrentCostumeIndex(randomIndex);
	};

	const toggleRandomMode = () => {
		if (filteredCostumes.length === 0) return;
		setIsRandomMode((prev) => !prev);
		if (!isRandomMode) {
			nextCostume();
		}
	};

	const toggleBlindMode = () => {
		if (filteredCostumes.length === 0) return;
		setIsBlurred((prev) => !prev);
		if (!isRandomMode) {
			toggleRandomMode();
		}
	};

	// --- Affichage du chargement ---
	if (loading) {
		return (
			<div className={styles.loadingWrapper}>
				<LoadingEmoji text={t("costumes.loading")} />
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h1>{t("costumes.title")}</h1>

			{/* --- Section des filtres et actions --- */}
			<div className={styles.controls}>
				{/* --- Filtres par catégorie --- */}
				<div className={styles.filterGroup}>
					<div className={styles.filterHeader}>
						<h3>{t("costumes.filterByCategory")}</h3>
						<button
							type="button"
							onClick={toggleSelectAll}
							className={styles.selectAllButton}
						>
							{selectedCategories.length === categories.length
								? t("costumes.deselectAll")
								: t("costumes.selectAll")}
						</button>
					</div>

					<div className={styles.filterButtons}>
						{categories.map((category) => (
							<button
								type="button"
								key={category}
								onClick={() => toggleCategory(category as CostumeCategory)}
								className={`${styles.filterButton} ${
									selectedCategories.includes(category as CostumeCategory)
										? styles.active
										: ""
								}`}
							>
								{getCategoryDisplayName(category)}
							</button>
						))}
					</div>
				</div>

				{/* --- Filtre par prix --- */}
				<div className={styles.filterGroup}>
					<h3>{t("costumes.priceRange")}</h3>
					<select
						value={priceFilter}
						onChange={(e) =>
							setPriceFilter(e.target.value as PriceRange | "all")
						}
						className={styles.priceSelect}
					>
						<option value="all">{t("costumes.allPrices")}</option>
						<option value="low">{t("costumes.priceLow")}</option>
						<option value="medium">{t("costumes.priceMedium")}</option>
						<option value="high">{t("costumes.priceHigh")}</option>
						<option value="luxury">{t("costumes.priceLuxury")}</option>
					</select>
				</div>

				{/* --- Boutons Random & Blind Mode --- */}
				<div className={styles.actionGroup}>
					<button
						type="button"
						onClick={toggleRandomMode}
						disabled={filteredCostumes.length === 0}
						className={`${styles.actionButton} ${
							isRandomMode ? styles.active : ""
						} ${filteredCostumes.length === 0 ? styles.disabled : ""}`}
					>
						{isRandomMode
							? t("costumes.randomModeOn")
							: t("costumes.randomMode")}
					</button>

					<button
						type="button"
						onClick={toggleBlindMode}
						disabled={filteredCostumes.length === 0}
						className={`${styles.actionButton} ${
							isBlurred ? styles.active : ""
						} ${filteredCostumes.length === 0 ? styles.disabled : ""}`}
					>
						{isBlurred ? t("costumes.seeAnswer") : t("costumes.guessMode")}
					</button>

					{/* --- Navigation aléatoire --- */}
					{isRandomMode && filteredCostumes.length > 0 && (
						<>
							<button
								type="button"
								onClick={nextCostume}
								className={styles.actionButton}
							>
								{t("costumes.next")}
							</button>
							<span className={styles.counter}>
								{currentCostumeIndex + 1} / {filteredCostumes.length}
							</span>
						</>
					)}
				</div>
			</div>

			{/* --- Aucun résultat --- */}
			{filteredCostumes.length === 0 && !loading && (
				<div className={styles.noResults}>
					<h3>{t("costumes.noResults")}</h3>
					<p>{t("costumes.noResultsHint")}</p>
				</div>
			)}

			{/* --- Galerie ou affichage unique --- */}
			<div className={styles.costumesContainer}>
				{filteredCostumes.length > 0 && isRandomMode ? (
					<div className={styles.singleCostume}>
						<Card
							costume={filteredCostumes[currentCostumeIndex]}
							isBlurred={isBlurred}
							blurContentOnly
						/>
					</div>
				) : filteredCostumes.length > 0 ? (
					<div className={styles.costumesGrid}>
						{filteredCostumes.map((costume) => (
							<Card key={costume.id} costume={costume} />
						))}
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Costumes;
