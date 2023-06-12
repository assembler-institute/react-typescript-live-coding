import { FC } from "react";
import { CardDetailsProps } from "../../../types/latestPhotos";
// import * as photos from "../../../assets/img";

export const PhotoDetailView: FC<CardDetailsProps> = ({
	title,
	date,
	views,
	img,
}: CardDetailsProps) => {
	// const photo = photos[`photo${img}`]; // This is a way to dynamically import images using a computed property name

	return (
		<div className="row tm-mb-90 tm-gallery">
			<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
				<figure className="effect-ming tm-video-item">
					<img src={img} alt="Image" className="img-fluid" />
					<figcaption className="d-flex align-items-center justify-content-center">
						<h2>{title}</h2>
						<a href="photo-detail.html">View more</a>
					</figcaption>
				</figure>
				<div className="d-flex justify-content-between tm-text-gray">
					<span className="tm-text-gray-light">{date}</span>
					<span>{views} views</span>
				</div>
			</div>
		</div>
	);
};
