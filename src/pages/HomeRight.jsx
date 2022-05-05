import React from 'react';
import HomeTitle from '../components/HomeTitle';

function HomeRight({ slider }) {
	return (
		<div
			className="right-container-home justify-center items-center font-bold text-center"
			style={slider === 1 ? { top: '0' } : { top: '-150vh' }}
		>
			<HomeTitle />
		</div>
	);
}

export default HomeRight;
