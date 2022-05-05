import React from 'react';
import Selfie from '../assets/selfie.png';
import HomeTitle from '../components/HomeTitle';

function HomeLeft({ slider }) {
	return (
		<div
			className="left-container-home h-full justify-center items-center"
			style={slider === 1 ? { top: '0' } : { top: '150vh' }}
		>
			{/* Selfie Logo */}
			<div className="avatar mb-4 lg:mb-0">
				<div className="selfie mask mask-hexagon bg-base-100">
					<img src={Selfie} />
				</div>
			</div>

			{/* Me Text */}
			{/* Visible on the left when in mobile view */}
			<div className="block lg:hidden flex flex-col justify-center items-center text-center">
				<HomeTitle />
			</div>
		</div>
	);
}

export default HomeLeft;
