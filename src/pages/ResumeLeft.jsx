import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

function ResumeLeft({ slider }) {
	return (
		<div
			className={`left-container-resume h-screen lg:h-full justify-center items-center ${
				slider !== 3 ? '-z-50' : 'z-30'
			}`}
			style={slider === 3 ? { top: '0' } : { top: '150vh' }}
		>
			<div className="mb-4 lg:mb-0 pixel-font">This is my resume!</div>
		</div>
	);
}

export default ResumeLeft;
