import styles from "./LoadingEmoji.module.css";
import { useTheme } from "../../contexts/useTheme";

export interface LoadingEmojiProps {
	text: string;
}

const LoadingEmoji = ({ text }: LoadingEmojiProps) => {
	const { theme, themes } = useTheme();

	const currentTheme = themes.find((t) => t.id === theme);

	return (
		<div className={styles.loadingContainer}>
			<p className={styles.loadingText}>{text}</p>
			<div className={styles.emojiWrapper}>
				<span className={styles.emoji}>{currentTheme?.emoji || "🎭"}</span>
			</div>
		</div>
	);
};

export default LoadingEmoji;
