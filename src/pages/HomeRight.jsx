import React from 'react';
import HomeTitle from '../components/HomeTitle';

function HomeRight({ slider, setSlider }) {
	return (
		<div className={`right-container-home ${slider !== 1 ? '-z-50' : 'z-30'}`} style={slider === 1 ? { top: '0' } : { top: '-150vh' }}>
			<HomeTitle setSlider={setSlider} />
		</div>
	);
}

export default HomeRight;
