import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import styles from "./App.module.css";
import Costumes from "../pages/Costumes/Costumes";
import Categories from "../pages/Categories/Categories";
import NotFound from "../pages/NotFound/NotFound";
import Footer from "../components/Footer/Footer";

function App() {
	console.log("App component rendering");

	return (
		<Router>
			<div className={styles.app}>
				<NavBar />
				<main className={styles.mainContent}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/costumes" element={<Costumes />} />
						<Route path="/about" element={<About />} />
						<Route path="/categories" element={<Categories />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
