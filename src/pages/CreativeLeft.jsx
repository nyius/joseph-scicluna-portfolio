import React from 'react';
import { useEffect } from 'react';
import Static from '../assets/static.gif';
import { useState } from 'react';

function CreativeLeft({ artworkSelected, slider }) {
	const [changing, setChanging] = useState(false);
	const dots = Array.from({ length: 500 });

	useEffect(() => {
		if (artworkSelected) {
			setChanging(true);

			setTimeout(() => {
				setChanging(false);
			}, 300);
		}
	}, [artworkSelected]);

	//---------------------------------------------------------------------------------------------------//
	return (
		<div className={`left-container-creative h-screen lg:h-full ${slider !== 5 ? '-z-50' : 'z-30'}`} style={slider === 5 ? { top: '0vh' } : { top: '150vh' }}>
			<div className="tv-container bg-[#d1a281]" style={{ width: artworkSelected ? `96%` : `75%` }}>
				<div className="tv-left-side bg-zinc-900">
					<div className="screen-container bg-zinc-100">
						<div className="screen-container-inside overflow-hidden bg-[#070707]">
							{artworkSelected ? (
								<div className="h-full w-full flex flex-col items-center justify-center gap-2">
									{changing ? <img src={Static} className="h-[150%]" alt="" /> : <img className="w-full" src={artworkSelected?.project?.images[0]} alt="" />}
								</div>
							) : (
								''
							)}
						</div>
					</div>
				</div>
				<div className="tv-right-side">
					<div className="speaker">
						{dots.map(dot => {
							return <div className="dot bg-zinc-400"></div>;
						})}
					</div>

					<div className="controls bg-zinc-200 border-solid border-4 border-zinc-400">
						<div className="knob bg-zinc-400 border-2 border-solid border-zinc-100">
							<div className="knob-inside border-2 border-solid border-zinc-100">
								<div className="knob-handle bg-zinc-900" style={{ transform: `rotate(${artworkSelected ? `${Number(artworkSelected.project.order)}0deg` : '45deg'}) translateY(-30%)` }}></div>
							</div>
						</div>
						<div className="knob bg-zinc-400 border-2 border-solid border-zinc-100">
							<div className="knob-inside border-2 border-solid border-zinc-100">
								<div className="knob-handle bg-zinc-900" style={{ transform: `rotate(-24deg) translateY(-30%)` }}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CreativeLeft;
