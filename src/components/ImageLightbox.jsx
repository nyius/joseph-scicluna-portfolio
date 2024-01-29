import React, { useEffect, useState } from 'react';
import ButtonLeft from '../assets/tv-button-left.png';
import ButtonRight from '../assets/tv-button-right.png';

function ImageLightbox({ artworkSelected }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	useEffect(() => {
		setCurrentSlide(0);
	}, [artworkSelected]);

	return (
		<>
			<input type="checkbox" id="image-lightbox" className="modal-toggle" />
			<div className="modal">
				<div
					className="modal-box bg-[#0c0c0c] justify-center relative scrollbar !w-[90vw] !max-w-[100vw] !min-h-[80vh] bg-contain bg-no-repeat bg-center "
					style={{ backgroundImage: `url('${artworkSelected?.project?.images[currentSlide]}')` }}
				>
					<label htmlFor="image-lightbox" className="z-50 absolute right-2 top-2 btn btn-circle btn-primary">
						X
					</label>
					<img
						src={ButtonLeft}
						className="absolute top-1/2 left-[5%] h-8 lg:h-14 cursor-pointer shadow-lg"
						onClick={() => {
							setCurrentSlide(prevState => {
								if (prevState === 0) {
									return artworkSelected?.project?.images?.length - 1;
								} else {
									return prevState - 1;
								}
							});
						}}
					/>
					<img
						src={ButtonRight}
						className="absolute top-1/2 right-[5%] h-8 lg:h-14 cursor-pointer shadow-lg"
						onClick={() => {
							setCurrentSlide(prevState => {
								if (prevState === artworkSelected?.project?.images?.length - 1) {
									return 0;
								} else {
									return prevState + 1;
								}
							});
						}}
					/>
					<div className="absolute flex flex-row gap-4 w-fit b-0 left-1/2 -translate-x-1/2">
						{artworkSelected?.project?.images.map((image, i) => {
							return (
								<div
									className={`w-4 h-4 z-50 ${currentSlide === i ? 'bg-zinc-100' : ' border-[1px] border-solid border-zinc-100'} cursor-pointer`}
									onClick={() => {
										setCurrentSlide(i);
									}}
								></div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default ImageLightbox;
