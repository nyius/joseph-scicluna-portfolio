import React from 'react';
import Selfie from '../assets/selfie.png';

function HomeLeft({ slider }) {
	return (
		<div
			className="left-container-home h-full justify-center"
			style={slider === 1 ? { top: '0' } : { top: '100vh' }}
		>
			<div class="avatar">
				<div class="selfie mask mask-hexagon bg-base-100">
					<img src={Selfie} />
				</div>
			</div>
		</div>
	);
}

export default HomeLeft;
