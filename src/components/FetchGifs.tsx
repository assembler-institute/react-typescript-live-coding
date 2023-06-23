import { useEffect, useState } from "react";
import { Ring } from "react-awesome-spinners";
import { Datum } from "../types/giphyTypes";

const FetchGifs = () => {
	const [searchTerm, setSearchTerm] = useState<string>("thor");
	const [gifs, setGifs] = useState<Datum[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const url = `https://api.giphy.com/v1/gifs/search?api_key=qbJze5GSpd3UhrOIouNn80kXmkE3OEhN&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

	useEffect(() => {
		const fetchGifs = async (): Promise<void> => {
			try {
				setLoading(true);
				const response = await fetch(url);
				if (!response) throw new Error("El fetch no se pudo realizar");
				const { data }: { data: Datum[] } = await response.json();
				setGifs(data as Datum[]);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchGifs();
	}, [searchTerm]);

	// const fetchGifs = async () => {
	// 	const response = await fetch(url);
	// 	const { data, meta, pagination } = await response.json();

	// 	const gifts = () => {
	// 		data?.map((gif: any) => {
	// 			return <img src={gif.images.downsized.url} alt={gif.title} />;
	// 		});
	// 	};
	// 	return gifts;
	// };

	// fetchGifs();

	const handleChange = ({ target }) => {
		const { value } = target;
		setSearchTerm(value);
	};

	return (
		<div>
			<input
				type="text"
				value={searchTerm}
				placeholder="search"
				onChange={handleChange}
			/>
			{loading && <Ring size={200} />}
			{gifs
				? gifs?.map(({ id, title, images }) => (
						<article key={id}>
							<h6>{title}</h6>
							<img src={images.original.url} alt={title} />
						</article>
				  ))
				: "No hay gifs para mostra"}
		</div>
	);
};

export default FetchGifs;
