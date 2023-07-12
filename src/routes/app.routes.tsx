import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import { EmblaOptionsType } from "embla-carousel-react";
import { Suspense, lazy } from "react";

// import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";

const LazyEmplaCarousel = lazy(
	() => import("../components/EmblaCarousel/EmblaCarousel")
);

const AppRoutes = () => {
	const OPTIONS: EmblaOptionsType = {};
	const SLIDE_COUNT = 10;
	const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={<p>Loading</p>}>
							<Login />
						</Suspense>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<LazyEmplaCarousel slides={SLIDES} options={OPTIONS} />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
