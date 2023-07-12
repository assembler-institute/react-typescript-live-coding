import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const AppRoutes = () => {
	const OPTIONS: EmblaOptionsType = {};
	const SLIDE_COUNT = 10;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={<EmblaCarousel slides={SLIDES} options={OPTIONS} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
