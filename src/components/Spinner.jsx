import React from 'react';
import LoadingGif from '../assets/loading-sprites.gif';

function Spinner() {
	return (
		<div>
			<img src={LoadingGif} alt="Loading..." className="w-32" />
		</div>
	);
}

export default Spinner;
