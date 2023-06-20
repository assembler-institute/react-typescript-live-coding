import "./App.css";
import BooksList from "./components/BooksList";
import { BookProvider } from "./context/BookProvider";

function App() {
	return (
		<>
			<BookProvider>
				<BooksList />
			</BookProvider>
		</>
	);
}

export default App;
