import React, { useState } from 'react';
import RemoteButton from '../assets/remote-button.png';
import RemoteButtonPressed from '../assets/remote-button-pressed.png';

function CreativeRight({ artworkSelected, creativeProjects, setArtworkSelected, slider }) {
	const [clicked, setClicked] = useState(false);
	const buttons = Array.from({ length: 10 });

	//---------------------------------------------------------------------------------------------------//
	return (
		<div className={`right-container-creative h-screen lg:h-full ${slider !== 5 ? '-z-50' : 'z-30'}`} style={slider === 5 ? { top: '0' } : { top: '-150vh' }}>
			<div className={`remote bg-zinc-800`} style={{ width: artworkSelected ? `90%` : `50%` }}>
				<div className={`remote-light ${clicked === 0 || clicked ? 'bg-[#ff295e]' : 'bg-zinc-900'}  `}></div>
				<div className="remote-buttons">
					{buttons.map((button, i) => {
						return (
							<div className="button-group" id="remote-button">
								<div className="pixel-font text-zinc-200">{i + 1}</div>
								<img
									key={i}
									src={clicked === i ? RemoteButtonPressed : RemoteButton}
									onMouseDown={() => setClicked(i)}
									onMouseUp={() => setClicked(false)}
									onClick={() => setArtworkSelected(creativeProjects[i])}
									className="button cursor-pointer"
									alt=""
								/>
							</div>
						);
					})}
				</div>
				<div className="remote-bottom bg-zinc-900"></div>
			</div>
		</div>
	);
}

export default CreativeRight;
