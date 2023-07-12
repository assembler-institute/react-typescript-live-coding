import { useEffect, useState } from "react";
import { Datum } from "../types/giphyTypes";

const useFetch = () => {
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

	const handleChange = ({ target }: any) => {
		const { value } = target;
		setSearchTerm(value);
	};
	return {
		searchTerm,
		gifs,
		loading,
		handleChange,
	};
};

export default useFetch;
