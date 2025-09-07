import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.tsx";
import { LanguageProvider } from "./contexts/LanguageProvider.tsx";
import { ThemeProvider } from "./contexts/ThemeProvider";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<LanguageProvider>
				<App />
			</LanguageProvider>
		</ThemeProvider>
	</StrictMode>,
);
