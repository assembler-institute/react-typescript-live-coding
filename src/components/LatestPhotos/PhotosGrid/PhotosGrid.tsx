import { FC } from "react";
import { CardDetailsProps } from "../../../types/latestPhotos.js";
import { cardInfo } from "../../../assets/db/db.js";
import { PhotoDetailView } from "../PhotoDetailView";
import PhotoStyles from "../PhotoStyles/PhotoStyles.js";

export const PhotosGrid: FC<CardDetailsProps> = () => {
	return (
		<div className="container-fluid tm-container-content tm-mt-60">
			<div className="row mb-4">
				<h2 className="col-6 tm-text-primary">Latest Photos</h2>
				<div className="col-6 d-flex justify-content-end align-items-center">
					<form action="" className="tm-text-primary">
						Page{" "}
						<input type="text" className="tm-input-paging tm-text-primary" /> of
						200
					</form>
				</div>
			</div>
			{cardInfo && cardInfo.length > 0 ? (
				cardInfo?.map(({ id, title, img, date, views }: CardDetailsProps) => {
					return (
						<PhotoStyles key={id}>
							<PhotoDetailView
								title={title}
								img={img}
								date={date}
								views={views}
							/>
						</PhotoStyles>
					);
				})
			) : (
				<p>There is no information currently available</p>
			)}
		</div>
	);
};
