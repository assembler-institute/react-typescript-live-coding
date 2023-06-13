import "./App.css";
import { Navbar, ProductsContainer } from "./components";

function App(props: any) {
	return (
		<>
			<Navbar />
			<ProductsContainer {...props} />
		</>
	);
}

export default App;
