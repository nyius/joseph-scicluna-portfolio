import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { BsBadge4KFill, BsBadgeHd, BsFillPinMapFill } from 'react-icons/bs';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import downArrow from '../assets/down_arrow.png';
import DPad from '../assets/d-pad.png';
import circleButton from '../assets/circle-button.png';

function Dashboard() {
	// retro feel website (pixelated things, blocky, few rounded corners)
	// Portfolio pieces are gameboy cartridges
	// Inspiration from retro games UI/menus
	const [powerLED, setPowerLED] = useState(false);
	const [letters, setLetters] = useState({
		intro: {
			word: '',
			done: false,
		},
		name: {
			word: '',
			done: false,
		},
		whatIdo: {
			word: '',
			done: false,
		},
	});

	// Typing Effect ---------------------------------------------------------------------------------------------------//
	const sentenceType = async (sentence, row, delay = 150) => {
		const lettersToSplit = sentence.split('');
		for (let i = 0; i < lettersToSplit.length; i++) {
			await waitForMs(delay);
			setLetters(prevState => ({
				...prevState,
				[row]: { ...prevState[row], word: prevState[row].word + lettersToSplit[i] },
			}));

			if (i === lettersToSplit.length - 1) {
				setLetters(prevState => ({ ...prevState, [row]: { ...prevState[row], done: true } }));
			}
		}

		return;
	};

	const waitForMs = ms => {
		return new Promise(resolve => setTimeout(resolve, ms));
	};

	useEffect(() => {
		let screenEl;

		const typeWords = async () => {
			if (letters.intro.done !== true) {
				setTimeout(async () => {
					await sentenceType('Hi,', 'intro');
					await sentenceType(`I'm Joey.`, 'name');
					await sentenceType(`I Do Full-stack Web Development`, 'whatIdo', 100);
				}, 1000);
			}
		};

		// Set up screen observer for typing effect
		const screenObserver = () => {
			const hasWindow = typeof window !== 'undefined';

			const windowH = hasWindow ? window.innerHeight : null;

			console.log(`-${Math.floor(0.24 * windowH)}px`);
			let options = {
				root: null,
				rootMargin: `0px 0px -${Math.floor(0.24 * windowH)}px 0px`,
				threshold: 0.9,
			};

			let callback = (entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setPowerLED(true);
						typeWords();
						observer.disconnect(screenEl);
					}
				});
			};

			let observer = new IntersectionObserver(callback, options);
			screenEl = document.querySelector('#deviceScreen');

			observer.observe(screenEl);
		};

		screenObserver();
	}, []);

	//---------------------------------------------------------------------------------------------------//
	return (
		<div className="openingBg">
			<div id="stars"></div>
			<div id="stars2"></div>
			<div id="stars3"></div>
			{/* Cartridge */}
			<div className="grid hoverCartridge grid-cols-12 z-10 max-w-3xl mt-0 sm:mt-44 mx-auto w-10/12 md:w-10/12 lg:w-8/12 xl:w-1/2 shadow-xl sticky top-10 sm:top-32 left-0 ">
				<div className="h-6 sm:h-10 col-span-11 rounded-t-xl bgTexture1 border-t-2 sm:border-t-8 border-l-2 sm:border-l-8 border-l-zinc-100/90 border-t-zinc-100/90 border-r-8 border-r-zinc-400/80"></div>
				<div className="h-fit pb-3 sm:pb-10 sm:pb-0 sm:h-800 col-span-12 rounded-tr-xl rounded-b-xl bgTexture1 border-l-2 cartridgeShadow sm:border-l-8 border-l-zinc-100/90 border-r-2 sm:border-r-8 border-b-2 sm:border-b-8 border-r-zinc-400/80 border-b-zinc-400/80">
					<div className=" bgTexture6 w-full h-2 sm:h-3 mt-3 sm:mt-8 innerShadowLines1 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture6 w-full h-2 sm:h-3 mt-1 sm:mt-3 innerShadowLines1 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture6 w-full h-2 sm:h-3 mt-1 sm:mt-3 innerShadowLines1 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture6 w-full h-2 sm:h-3 mt-1 sm:mt-3 innerShadowLines1 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture6 w-full h-2 sm:h-3 mt-1 sm:mt-3 innerShadowLines1 border-t-2 border-t-zinc-100"></div>
					<div className="w-11/12 lg:w-3/4 bgTexture5 shadow-xl h-fit sm:h-500 grid mx-auto mt-5 sm:mt-12 rounded-xl sm:border-4 border-l-zinc-400/70 border-t-zinc-400/70 border-r-zinc-100/50 border-b-zinc-100/50">
						<div className="grid grid-cols-12 shadow-xl justify-center items-center bg-gradient-to-l from-purple-500 to-indigo-500 m-4 rounded-xl relative bgTexture4">
							<div className="hidden sm:block col-span-1 h-full rounded-l-xl bgTexture3"></div>
							<div className="col-span-12 sm:col-span-10 shadow-lg border-4 border-primary-content/60 rounded-xl sm:m-4 font-bold ">
								<div className="w-full h-full bg-secondary/50 border-4 border-accent/60 p-2 sm:p-4 rounded-xl flex flex-col sm:gap-3 justify-center ">
									<div className="relative">
										<p className="pixelFont text-primary-content text-center text-4xl md:text-5xl font-bold tracking-widest bg-secondary -skew-y-2 shadow-lg textShadow">
											JOSEPH SCICLUNA
										</p>
									</div>
									<div className="flex flex-row justify-center items-center my-3 sm:my-8 gap-3 relative px-1 md:text-2xl">
										<p className="pixelFont tracking-wider text-center text-primary-content text-4xl ">
											FULL-STACK WEB DEV
										</p>
									</div>

									<div className="flex flex-row gap-2 sm:gap-4 w-full justify-between">
										<HiOutlineBadgeCheck className="h-8 w-8 md:h-12 md:w-12 text-secondary z-10" />
										<BsBadge4KFill className="h-8 w-8 md:h-12 md:w-12 text-secondary z-10" />
										<BsBadgeHd className="h-8 w-8 md:h-12 md:w-12 text-secondary z-10" />
										<DiGithubBadge className="h-8 w-8 md:h-12 md:w-12 text-secondary cursor-pointer z-10" />
									</div>
								</div>
							</div>
							<div className="hidden sm:block col-start-12 h-full rounded-r-xl bgTexture3"></div>
						</div>
					</div>
				</div>
				<div className="hidden sm:block col-start-2 col-end-12 col-span-10 rounded-b-xl h-10 cartridgeShadowBottom bgTexture6 grid grid-cols-12 shadow-xl border-l-4 border-l-base-300 "></div>
			</div>

			{/* MIDDLE TEXT  */}
			<div className="w-full flex justify-center items-center mt-12 sm:mt-20 sm:mt-44 arrowBob-sm sm:arrowBob -z-10">
				<img src={downArrow} className="w-20 h-30 sm:w-fit sm:h-fit" />
			</div>
			<div className="flex flex-col sm:font-bold text-center tracking-wides pixelFont gap-2 sm:gap-5 mt-5 sm:mt-10 mx-2 text-2xl sm:text-5xl mb-44 sm:mb-96">
				<p className="text-secondary">STEP 1: BLOW ON BOTTOM OF CARTRIDGE</p>
				<p className="text-secondary">STEP 2: INSERT TO CONTINUE...</p>
			</div>

			{/* Handheld Device */}
			<div className="max-w-7xl h-screen mx-auto w-full md:w-11/12 lg:w-10/12 xl:w-3/4 shadow-xl deviceShadowUp z-10 sticky top-0 left-0">
				<div className="deviceShadow h-full">
					<div className="rounded-2xl sm:rounded-4xl bgTexture7 h-fit pb-20 sm:pb-0 sm:h-full w-full border-4 sm:border-8 border-l-zinc-100 border-t-zinc-100/70 border-r-zinc-400/50 border-b-zinc-400/50">
						{/* Lines */}
						<div className="w-full grid grid-cols-12 h-8 sm:h-20 rounded-t-2xl">
							<div className="col-start-2 col-span-1 w-3 sm:w-4 h-full bgTexture6 innerShadowLines1 border-r-1 sm:border-r-4 border-r-zinc-100"></div>
							<div className="col-start-12 col-span-1 w-3 sm:w-4 h-full bgTexture6 innerShadowLines1 border-r-1 sm:border-r-4 border-r-zinc-100"></div>
						</div>
						<div className=" bgTexture6 w-full h-3 sm:h-4 innerShadowLines2 border-b-1 sm:border-b-4 border-b-zinc-100"></div>

						{/* Screen Box */}
						<div className="grid grid-cols-12 shadow-xl justify-center bgTexture1 z-20 items-center mt-8 sm:mt-20 h-80 sm:h-1000 bg-zinc-900 mx-auto rounded-2xl w-11/12">
							{/* Power LED */}
							<div className="col-span-1 h-full flex justify-center items-center z-20">
								<div
									className={`rounded-full ${
										powerLED ? 'bg-error powerLED' : 'bg-zinc-400'
									}  h-4 w-4 sm:h-8 sm:w-8`}
								></div>
							</div>

							{/* Screen Black */}
							<div className="h-11/12 w-full rounded-xl col-span-10 mx-auto bg-gradient-to-l from-zinc-900 to-zinc-1100">
								{/* Screen Content */}
								<div
									id="deviceScreen"
									className={`mx-auto rounded-xl z-20 text-primary-content h-full w-full ${
										powerLED ? `deviceScreenOn sm:deviceScreenOn` : ``
									} p-4 flex flex-col justify-center items-center`}
								>
									<div className="flex flex-row ">
										<span className="text-3xl sm:text-8xl font-bold">{letters.intro.word}</span>
										<span
											className={`input-cursor ${
												letters.intro.done ? 'hidden !important' : 'block'
											} `}
										/>
									</div>
									<div className="flex flex-row">
										<span className="text-2xl sm:text-6xl font-bold">{letters.name.word}</span>
										<span
											className={`input-cursor ${
												letters.name.done ? 'hidden !important' : 'block'
											} `}
										/>
									</div>
									<div className="flex flex-row">
										<span className="text-xl sm:text-4xl text-center font">
											{letters.whatIdo.word}
										</span>
										<span className={`input-cursor`} />
									</div>
								</div>
							</div>
						</div>

						{/* Buttons */}
						<div className="grid grid-cols-12 h-fit w-full mt-16 sm:mt-44 mx-2 sm:mx-10">
							<div className="col-span-4 flex justify-center items-center cursor-pointer z-10">
								<img src={DPad} className="h-28 sm:h-fit " />
							</div>
							<div className="col-start-7 col-span-4 flex justify-center gap-5 sm:gap-20 items-center cursor-pointer z-10 relative">
								<img src={circleButton} className="h-20  sm:h-fit self-end z-20" />
								<img src={circleButton} className=" h-20 sm:h-fit self-start z-20" />
								<div className="absolute top-4 sm:top-10 left-0 h-20 sm:h-44 w-full rounded-2xl sm:rounded-5xl bg-zinc-300 -skew-y-12"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="w-full h-96 starsToAtmostphereGrad border-b-8 border-base-300 absolute left-0"></div> */}
			<div className="w-full h-full bg-secondary sticky -z-10"></div>
		</div>
	);
}

export default Dashboard;
