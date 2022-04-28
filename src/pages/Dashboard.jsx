import React, { useState, useEffect } from 'react';
import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { BsBadge4KFill, BsBadgeHd, BsFillPinMapFill } from 'react-icons/bs';
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai';
import { DiGithubBadge } from 'react-icons/di';
import badge from '../assets/insignia.png';

function Dashboard() {
	// retro feel website (pixelated things, blocky, few rounded corners)
	// Portfolio pieces are gameboy cartridges
	// Inspiration from retro games UI/menus

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
		const typeWords = async () => {
			await sentenceType('Hi,', 'intro');
			await sentenceType(`I'm Joey.`, 'name');
			await sentenceType(`I Do Full-stack Web Development`, 'whatIdo', 100);
		};

		typeWords();
	}, []);

	//---------------------------------------------------------------------------------------------------//
	return (
		<div>
			{/* <div className="h-1000 border-8 border-base-content">
				<div className="typing-container border-8 w-full h-full flex flex-col justify-center items-center border-neutral-focus">
					<div className="flex flex-row">
						<span className="text-8xl font-bold">{letters.intro.word}</span>
						<span className={`input-cursor ${letters.intro.done ? 'hidden !important' : 'block'} `} />
					</div>
					<div className="flex flex-row">
						<span className="text-6xl font-bold">{letters.name.word}</span>
						<span className={`input-cursor ${letters.name.done ? 'hidden !important' : 'block'} `} />
					</div>
					<div className="flex flex-row">
						<span className="text-4xl font">{letters.whatIdo.word}</span>
						<span className={`input-cursor`} />
					</div>
				</div>
			</div>
			<div className="h-screen bg-base-200 w-full">hi</div> */}

			<div className="grid grid-cols-12 max-w-3xl mt-20 mx-auto w-full md:w-10/12 lg:w-8/12 xl:w-1/2 shadow-xl sticky top-0 left-0">
				<div className="h-10 col-span-11 rounded-t-xl bgTexture1 border-t-8 border-l-8 border-l-zinc-100/90 border-t-zinc-100/90 border-r-8 border-r-zinc-400/80"></div>
				<div className="h-800 col-span-12 rounded-tr-xl rounded-b-xl bgTexture1 border-l-8 border-l-zinc-100/90 border-r-8 border-b-8 border-r-zinc-400/80 border-b-zinc-400/80">
					<div className=" bgTexture2 w-full h-3 mt-8 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture2 w-full h-3 mt-3 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture2 w-full h-3 mt-3 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture2 w-full h-3 mt-3 border-t-2 border-t-zinc-100"></div>
					<div className=" bgTexture2 w-full h-3 mt-3 border-t-2 border-t-zinc-100"></div>
					<div className="w-3/4 bg-zinc-200 bgTexture2 h-500 grid mx-auto mt-12 rounded-xl border-4 border-l-zinc-400/70 border-t-zinc-400/70 border-r-zinc-100/50 border-b-zinc-100/50">
						<div className="grid grid-cols-12 justify-center items-center bg-gradient-to-l from-purple-500 to-indigo-500 m-4 rounded-xl relative">
							<div className="col-span-1 h-full rounded-l-xl bg-zinc-100"></div>
							<div className="col-span-10 border-4 border-primary-content/60 rounded-xl m-4 text-2xl font-bold ">
								<div className="w-full h-full bg-secondary/50 border-4 border-accent/60 p-4 rounded-xl flex flex-col gap-4 justify-center ">
									<p className="pixelFont text-primary-content text-center text-5xl font-bold tracking-widest">
										JOSEPH SCICLUNA
									</p>
									<div className="flex flex-row items-center gap-3 relative px-1">
										<BsFillPinMapFill className="z-10" />
										<p className="text-error/60">Elmvale, On</p>
									</div>
									<div className="flex flex-row items-center gap-3 relative px-1">
										<AiFillPhone className="z-10" />
										<p className="text-error/60">(705)-220-7676</p>
									</div>
									<div className="flex flex-row items-center gap-3 relative px-1">
										<AiTwotoneMail className="z-10" />
										<p className="text-error/60">josephdesigned@gmail.com</p>
									</div>
									<div className="flex flex-row gap-4 w-full justify-between">
										<HiOutlineBadgeCheck className="h-12 w-12 text-secondary" />
										<BsBadge4KFill className="h-12 w-12 text-secondary" />
										<BsBadgeHd className="h-12 w-12 text-secondary" />
										<DiGithubBadge className="h-12 w-12 text-secondary" />
									</div>
									<div className="absolute top-7 right-7 -rotate-12">
										<img className="h-20 w-20" src={badge} alt="" />
									</div>
								</div>
							</div>
							<div className="col-start-12 h-full rounded-r-xl bg-zinc-100"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Handheld Device */}
			<div className="max-w-7xl mx-auto w-full md:w-10/12 lg:w-8/12 xl:w-3/4 shadow-xl relative relCenterVert">
				<div className="rounded-4xl h-screen w-full p-4 bgTexture2 border-8 border-l-zinc-100/70 border-t-zinc-100/70 border-r-zinc-400/50 border-b-zinc-400/50">
					<div className="grid grid-cols-12 justify-center items-center mt-20 h-1000 bg-zinc-900 mx-auto rounded-2xl w-11/12">
						<div className="col-span-2 h-full flex justify-center items-center">
							<div className="rounded-full bg-zinc-400 h-8 w-8"></div>
						</div>
						<div className="mx-auto col-span-8 rounded-xl text-accent h-11/12 w-full bg-gradient-to-r from-zinc-800 to-zinc-900 p-4 flex flex-col justify-center items-center">
							<div className="flex flex-row ">
								<span className="text-8xl font-bold">{letters.intro.word}</span>
								<span
									className={`input-cursor ${letters.intro.done ? 'hidden !important' : 'block'} `}
								/>
							</div>
							<div className="flex flex-row">
								<span className="text-6xl font-bold">{letters.name.word}</span>
								<span
									className={`input-cursor ${letters.name.done ? 'hidden !important' : 'block'} `}
								/>
							</div>
							<div className="flex flex-row">
								<span className="text-4xl font">{letters.whatIdo.word}</span>
								<span className={`input-cursor`} />
							</div>
						</div>
						<div className="col-start-11 h-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
