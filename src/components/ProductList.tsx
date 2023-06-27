import { useEffect, useState } from "react";
import { Ring } from "react-awesome-spinners";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	console.log(products);
	const [loading, setLoading] = useState<boolean>(false);

	const [searchTerm, setSearchTerm] = useState<string>("");
	console.log(searchTerm);

	const giphyApiKey = import.meta.env.VITE_GIPHY_KEY;
	console.log(giphyApiKey);

	const url = `http://localhost:3001/sofas?q=${searchTerm}`;
	// const url = `https://api.giphy.com/v1/gifs/search?api_key=${giphyApiKey}&q=thor&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

	useEffect(() => {
		const fetchProducts = async (): Promise<void> => {
			try {
				setLoading(true);
				const response = await fetch(url);
				if (!response.ok) throw new Error("Failed to fetch GIFs");
				const data = await response.json();
				console.log(data);
				setProducts(data);
			} catch (error) {
				console.log(error);
			} finally {
				setTimeout(() => {
					setLoading(false);
				}, 5000);
			}
		};
		fetchProducts();
	}, [searchTerm]);

	const handleInputChange = ({ target }) => {
		const { value } = target;
		setSearchTerm(value);
	};

	return (
		<>
			<h2>Fetch API</h2>
			<input type="text" onChange={handleInputChange} />
			{loading && <Ring />}
			{products &&
				products.map(({ id, name, desc, price, url }) => {
					return (
						<div key={id}>
							<h3>{name}</h3>
							<p>{desc}</p>
							<img src={url} alt={name} />
							<p>{price}</p>
						</div>
					);
				})}
		</>
	);
};

export default ProductList;
