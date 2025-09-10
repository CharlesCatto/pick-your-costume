import styles from "./LoadingEmoji.module.css";
import { useTheme } from "../../contexts/useTheme";

export interface LoadingEmojiProps {
	text: string;
}

const LoadingEmoji = ({ text }: LoadingEmojiProps) => {
	const { theme, themes } = useTheme();

	const currentTheme = themes.find((t) => t.id === theme);

	console.log(
		"Rendering LoadingEmoji with theme:",
		theme,
		"emoji:",
		currentTheme?.emoji,
	);

	return (
		<div className={styles.container}>
			<p className={styles.loadingText}>{text}</p>
			<div className={styles.emojiWrapper}>
				<span className={styles.emoji}>{currentTheme?.emoji || "🎭"}</span>
			</div>
		</div>
	);
};

export default LoadingEmoji;
