import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useTranslation } from "../../hooks/useTranslation";

const Home = () => {
	const { t } = useTranslation();

	const features = [
		{
			icon: "🔍",
			title: t("home.features.explore.title"),
			description: t("home.features.explore.description"),
			to: "/costumes",
		},
		{
			icon: "🎲",
			title: t("home.features.randomize.title"),
			description: t("home.features.randomize.description"),
			to: "/costumes?mode=random",
		},
		{
			icon: "🙈",
			title: t("home.features.guess.title"),
			description: t("home.features.guess.description"),
			to: "/costumes?mode=guess",
		},
		{
			icon: "📱",
			title: t("home.features.mobile.title"),
			description: t("home.features.mobile.description"),
			to: "/about",
		},
	];

	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h1>{t("home.title")}</h1>
				<p>{t("home.subtitle")}</p>
				<Link to="/costumes" className={styles.ctaButton}>
					{t("home.cta")}
				</Link>
			</section>

			<section className={styles.features}>
				<div className={styles.featureGrid}>
					{features.map((f) => (
						<Link key={f.title} to={f.to} className={styles.featureCard}>
							<div className={styles.featureIcon}>{f.icon}</div>
							<h3>{f.title}</h3>
							<p>{f.description}</p>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
};

export default Home;
