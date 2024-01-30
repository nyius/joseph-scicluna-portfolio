import React from 'react';
import { useEffect } from 'react';
import Static from '../assets/static.gif';
import { useState } from 'react';
import ButtonLeft from '../assets/tv-button-left.png';
import ButtonRight from '../assets/tv-button-right.png';
import ButtonFs from '../assets/tv-button-fs.png';
import KnobBg from '../assets/tv-knob.png';
import KnobHandle from '../assets/tv-knob-handle.png';

function CreativeLeft({ artworkSelected, slider }) {
	const [changing, setChanging] = useState(false);
	const [slideTimer, setSlideTimer] = useState([0]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const dots = Array.from({ length: 500 });

	useEffect(() => {
		if (artworkSelected) {
			setChanging(true);

			setTimeout(() => {
				setChanging(false);
			}, 300);
		}
	}, [artworkSelected]);

	useEffect(() => {
		if (artworkSelected) {
			setSlideTimer([0]);
			setCurrentSlide(0);

			const goToNextSlide = setInterval(() => {
				setSlideTimer(prevState => {
					if (prevState.length > 9) {
						setCurrentSlide(prevState => {
							if (prevState === artworkSelected?.project?.images?.length - 1) {
								return 0;
							} else {
								return prevState + 1;
							}
						});
						return [0];
					} else {
						return [...prevState, 0];
					}
				});
			}, 500);

			return () => {
				clearInterval(goToNextSlide);
			};
		}
	}, [artworkSelected]);

	//---------------------------------------------------------------------------------------------------//
	return (
		<div className={`left-container-creative h-screen lg:h-full ${slider !== 5 ? '-z-50 !top-[150vh]' : 'z-30 top-0 lg:top-[10vh]'}`}>
			<div className={`tv-container bg-[#d1a281] ${artworkSelected ? `w-[40rem] h-[26rem] xl:w-[60rem] xl:h-[40rem] 2k:w-[80rem] 2k:h-[50rem]` : `w-[40rem] h-[26rem] xl:w-[40rem] xl:h-[26rem] 2k:w-[60rem] 2k:h-[40rem]`}`}>
				<div className="tv-left-side bg-zinc-900">
					<div className="screen-container bg-zinc-100">
						<div className="screen-container-inside overflow-hidden bg-[#070707]">
							{artworkSelected ? (
								<div className="h-full w-full flex flex-col items-center justify-center ">
									<label
										htmlFor="image-lightbox"
										className={`h-[150%] cursor-pointer w-full bg-cover bg-no-repeat bg-center relative`}
										style={{ backgroundImage: `url('${changing ? Static : artworkSelected?.project?.images[currentSlide]}')` }}
									>
										<div className="absolute w-[30%] bottom-[2%] left-1/2 -translate-x-1/2  h-[5%]">
											<div className="grid grid-cols-10 w-full">
												{slideTimer.map(timer => {
													return <div className="w-[50%] aspect-square bg-zinc-200"></div>;
												})}
											</div>
										</div>
									</label>
								</div>
							) : (
								<div className={`h-[150%] w-full bg-cover bg-no-repeat bg-center relative`} style={{ backgroundImage: `url('${Static}')` }}></div>
							)}
						</div>
					</div>
				</div>

				{/* --------------------------------------- TV RIGHT SIDE --------------------------------------- */}
				<div className="tv-right-side">
					<div className="speaker">
						{dots.map(dot => {
							return <div className="dot bg-zinc-400"></div>;
						})}
					</div>

					<div className="controls bg-zinc-200 border-solid border-8 border-zinc-400 place-content-between">
						<div className="knob h-fit w-full">
							<img src={KnobBg} alt="" />
							<img src={KnobHandle} className="knob-handle" style={{ transform: `rotate(${artworkSelected ? `${Number(artworkSelected.project.order) + 1}0deg` : '45deg'})` }}></img>
						</div>

						<label htmlFor="image-lightbox" className="w-full flex items-center justify-center">
							<img src={ButtonFs} className="w-[40%] cursor-pointer" />
						</label>

						<div className="grid grid-cols-2 items-center justify-center">
							<img
								src={ButtonLeft}
								className="w-[80%] justify-self-center cursor-pointer"
								onClick={() => {
									setCurrentSlide(prevState => {
										if (prevState === 0) {
											return artworkSelected?.project?.images?.length - 1;
										} else {
											return prevState - 1;
										}
									});

									setSlideTimer([0]);
								}}
							/>
							<img
								src={ButtonRight}
								className="w-[80%] justify-self-center cursor-pointer"
								onClick={() => {
									setCurrentSlide(prevState => {
										if (prevState === artworkSelected?.project?.images?.length - 1) {
											return 0;
										} else {
											return prevState + 1;
										}
									});
									setSlideTimer([0]);
								}}
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Project Text */}
			<div className="w-full mt-[4%] px-[10%] mb-20" style={{ width: artworkSelected ? `96%` : `75%` }}>
				{artworkSelected ? (
					<>
						<div className="text-xl 2k:text-2xl text-white font-bold">{artworkSelected.project?.name}</div>
						<div className="text-md 2k:text-xl text-white mr-[5%]">{artworkSelected.project?.description}</div>
						<div className="flex flex-row gap-2 text-xl 2k:text-2xl text-white italic">
							{artworkSelected.project?.technology.map((tech, i) => {
								return (
									<p className="mt-4">
										{tech}
										{i === artworkSelected.project?.technology.length - 1 ? '' : ','}
									</p>
								);
							})}
						</div>
						{artworkSelected.project?.link ? (
							<a href={artworkSelected.project?.link} target="_blank" className="btn btn-sm btn-secondary">
								Visit
							</a>
						) : (
							''
						)}
					</>
				) : (
					''
				)}
			</div>
		</div>
	);
}

export default CreativeLeft;
