import { useParams } from "react-router-dom";
import products from "../../db/data.json";
import { FC } from "react";
import { ProductType } from "../../types/products";

export const ProductDetailView: FC<ProductType> = () => {
	const { id: productId } = useParams();

	const productDetails = productId
		? products.find((product) => product.id === parseInt(productId))
		: undefined;

	if (!productDetails) return null;
	const { id, name, category } = productDetails;

	console.log({ id, name, category });
	return (
		<div>
			<h2>{name}</h2>
			<p>{category}</p>
			<span>{id}</span>
		</div>
	);
};
