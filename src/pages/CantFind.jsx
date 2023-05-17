import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CantFind() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-col items-center justify-center mx-auto h-screen w-full items-center bg-blue">
			<p className="pixel-font text-primary-content text-7xl mb-10 bg-slate-400 p-10 text-blue">Error - 404</p>
			<p className="pixel-font text-white text-xl mb-5">An error has occured, to continue:</p>
			<button className="btn bg-slate-400 border-4 btn-large pixel-font text-blue mt-5 border-black" onClick={() => {
				navigate('/')
			}}>Return Home</button>
		</div>
	);
}

export default CantFind;
