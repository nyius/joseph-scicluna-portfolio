import React, { useState } from 'react';
import Resume from '../assets/Joseph_Scicluna_Resume_2023.pdf';

function ResumeRight({ slider }) {
	//---------------------------------------------------------------------------------------------------//
	return (
		<>
			<div className={`right-container-resume h-screen lg:h-full ${slider !== 3 ? '-z-50' : 'z-30'}`} style={slider === 3 ? { top: '5vh' } : { top: '-150vh' }}>
				<div className="flex lg-hidden pixel-font mb-4 text-white">Resume</div>
				<object data={Resume} type="application/pdf" width="95%" height="90%">
					<p>
						Unable to display PDF file.{' '}
						<a href={Resume} className="font-bold underline">
							Download here
						</a>{' '}
						instead.
					</p>
				</object>
			</div>
		</>
	);
}

export default ResumeRight;
