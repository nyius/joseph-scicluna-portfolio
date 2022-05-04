import React from 'react';

function HomeRight({ slider }) {
	return (
		<div
			className="right-container-home justify-center items-center font-bold text-center"
			style={slider === 1 ? { top: '0' } : { top: '-100vh' }}
		>
			<div className="right-container-home-text bg-base-100 border-4 border-primary-content">
				<p className="text-4xl pixel-font">Hi!</p>
				<p className="text-2xl">I'm Joey Scicluna</p>
				<p className="text-xl">I Do Full-Stack Web Development</p>
			</div>
		</div>
	);
}

export default HomeRight;
