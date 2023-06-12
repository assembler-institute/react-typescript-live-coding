import { FC } from "react";
import { MdOutlineManageSearch } from "react-icons/md";

export const SearchBar: FC = (): any => {
	return (
		<div
			className="tm-hero d-flex justify-content-center align-items-center"
			data-parallax="scroll"
			data-image-src=""
		>
			<form className="d-flex tm-search-form">
				<input
					className="form-control tm-search-input"
					type="search"
					placeholder="Search"
					aria-label="Search"
				/>
				<button className="btn btn-outline-success tm-search-btn" type="submit">
					<MdOutlineManageSearch />
				</button>
			</form>
		</div>
	);
};
