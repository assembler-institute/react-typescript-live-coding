import { PhotosGrid } from "./components/LatestPhotos/PhotosGrid";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import "./App.css";

function App() {
	return (
		<>
			<Navbar />
			<SearchBar />
			<PhotosGrid />
		</>
	);
}

export default App;
