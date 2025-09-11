import type { Costume } from "../../data/costumeTypes";
import styles from "./Card.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useMaterialTranslation } from "../../hooks/useMaterialTranslations";
import { useCostumeHelpers } from "../../utils/Helpers";
import LazyImage from "../LazyImage/LazyImage";

interface CardProps {
	costume: Costume;
	isBlurred?: boolean;
	blurContentOnly?: boolean;
}

const Card = ({
	costume,
	isBlurred = false,
	blurContentOnly = false,
}: CardProps) => {
	const { t } = useTranslation();
	const { translateMaterial } = useMaterialTranslation();
	const {
		getCategoryDisplayName,
		getDifficultyDisplayName,
		getPriceRangeDisplayName,
	} = useCostumeHelpers();

	return (
		<article className={styles.card}>
			<header className={styles.cardHeader}>
				<h2 className={styles.cardTitle}>{costume.name}</h2>
				<span className={styles.cardCategory}>
					{getCategoryDisplayName(costume.category)}
				</span>
			</header>

			<div
				className={`${styles.cardBody} ${
					isBlurred
						? blurContentOnly
							? styles.blurredContent
							: styles.blurred
						: ""
				}`}
			>
				{/* Image du costume avec Lazy Loading */}
				{costume.image_url && (
					<div className={styles.imageContainer}>
						{(() => {
							console.log(
								"Costume image_url avant traitement:",
								costume.image_url,
							);
							return null; // rien à afficher dans le DOM
						})()}
						<LazyImage
							src={costume.image_url}
							alt={costume.name}
							className={styles.costumeImage}
						/>
					</div>
				)}

				{/* Informations du costume */}
				<div className={styles.costumeInfo}>
					<p>
						<strong>{t("common.category")}:</strong>{" "}
						{getCategoryDisplayName(costume.category)}
					</p>

					<p>
						<strong>{t("common.difficulty")}:</strong>{" "}
						{getDifficultyDisplayName(costume.difficulty)}
					</p>

					<p>
						<strong>{t("common.price")}:</strong>{" "}
						{getPriceRangeDisplayName(costume.price_range)}
					</p>

					{costume.description && (
						<p className={styles.description}>
							<strong>{t("common.description")}:</strong> {costume.description}
						</p>
					)}

					{/* Tags du costume */}
					{costume.tags && costume.tags.length > 0 && (
						<div className={styles.tags}>
							<strong>{t("common.tags")}:</strong>
							<div className={styles.tagList}>
								{costume.tags.map((tag, index) => (
									<span
										key={`${costume.id}-${tag}-${index}`}
										className={styles.tag}
									>
										#{tag}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Materials du costume (avec traduction) */}
					{costume.materials && costume.materials.length > 0 && (
						<div className={styles.materials}>
							<strong>{t("common.materials")}:</strong>
							<ul className={styles.materialsList}>
								{costume.materials.map((material) => (
									<li
										key={`${costume.id}-${material.material}`}
										className={styles.materialItem}
									>
										{translateMaterial(material.material)}{" "}
										{material.quantity && `(${material.quantity})`}
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Popularité */}
					{costume.popularity !== undefined && costume.popularity > 0 && (
						<p className={styles.popularity}>
							<strong>{t("common.popularity")}:</strong>
							{"★".repeat(Math.max(0, Math.min(5, costume.popularity)))}
							{"☆".repeat(Math.max(0, 5 - Math.min(5, costume.popularity)))} (
							{costume.popularity}/5)
						</p>
					)}
				</div>
			</div>
		</article>
	);
};

export default Card;
