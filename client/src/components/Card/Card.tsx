import type { Costume } from "../../data/costumeTypes";
import styles from "./Card.module.css";
import { useTranslation } from "../../hooks/useTranslation";
import { useCostumeHelpers } from "../../utils/Helpers";

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
				className={`${styles.cardBody} ${isBlurred ? (blurContentOnly ? styles.blurredContent : styles.blurred) : ""}`}
			>
				{/* Image du costume */}
				{costume.image_url && (
					<div className={styles.imageContainer}>
						<img
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

					<p className={styles.description}>
						<strong>{t("common.description")}:</strong> {costume.description}
					</p>

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

					{/* Popularité (optionnel) */}
					{costume.popularity !== undefined && (
						<p className={styles.popularity}>
							<strong>Popularité:</strong> {costume.popularity} ★
						</p>
					)}
				</div>
			</div>
		</article>
	);
};

export default Card;
