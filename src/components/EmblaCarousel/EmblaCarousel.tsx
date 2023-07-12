import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { Thumb } from "./EmblaCarouselThumbsButton";

import "../../styles/base.css";
import "../../styles/embla.css";
import "../../styles/sandbox.css";

type PropType = {
	slides: number[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { slides, options } = props;

	const [selectedIndex, setSelectedIndex] = useState(0);
	const [images, setImages] = useState<string[]>([]);

	const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: "keepSnaps",
		dragFree: true,
	});

	const fetchPlanets = async () => {
		const API_KEY = import.meta.env.VITE_NASA_API_KEY;
		const response = await fetch(
			`https://api.nasa.gov/planetary/apod?start_date=2022-11-15&end_date=2022-11-30&api_key=${API_KEY}`
		);
		if (!response.ok) {
			throw new Error("Error while fetching users");
		}
		const data = await response.json();
		const limitedPlanets = data.slice(0, 10);
		const imagesOnly = limitedPlanets.map(
			(image: { hdurl: any }) => image.hdurl
		);
		return setImages(imagesOnly);

		// startTransition will set a lower priority to the render of the component. Sets
		// a normal priority vs higher priority.
		// startTransition(() => {
		//   setImages(imagesOnly);
		// });
	};

	useEffect(() => {
		fetchPlanets();
	}, []);

	const onThumbClick = useCallback(
		(index: number) => {
			if (!emblaMainApi || !emblaThumbsApi) return;
			emblaMainApi.scrollTo(index);
		},
		[emblaMainApi, emblaThumbsApi]
	);

	const onSelect = useCallback(() => {
		if (!emblaMainApi || !emblaThumbsApi) return;
		setSelectedIndex(emblaMainApi.selectedScrollSnap());
		emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
	}, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaMainApi) return;
		onSelect();
		emblaMainApi.on("select", onSelect);
		emblaMainApi.on("reInit", onSelect);
	}, [emblaMainApi, onSelect]);

	return (
		<div className="embla">
			<h2 className="embla__title">Embla Carousel Thumbs React</h2>
			<div className="embla__viewport" ref={emblaMainRef}>
				<div className="embla__container">
					{slides.map((index) => (
						// Suspense
						<div className="embla__slide" key={index}>
							<div className="embla__slide__number">
								<span>{index + 1}</span>
							</div>
							<img
								className="embla__slide__img"
								src={images[index]}
								alt="Your alt text"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="embla-thumbs">
				<div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
					<div className="embla-thumbs__container">
						{slides.map((index) => (
							// Suspense
							<Thumb
								onClick={() => onThumbClick(index)}
								selected={index === selectedIndex}
								index={index}
								imgSrc={images[index]}
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
