import React, { useState } from 'react';
import Resume from '../assets/Joseph_Scicluna_Resume_2023.pdf';

function ResumeRight({ slider }) {
	//---------------------------------------------------------------------------------------------------//
	return (
		<>
			<div className={`right-container-resume h-screen lg:h-full ${slider !== 3 ? '-z-50' : 'z-30'}`} style={slider === 3 ? { top: '0' } : { top: '-150vh' }}>
				<div className="flex lg-hidden pixel-font mb-4 text-black">Resume</div>
				<object data={Resume} type="application/pdf" width="95%" height="90%">
					<p>
						Unable to display PDF file. <a href={Resume}>Download</a> instead.
					</p>
				</object>
			</div>
		</>
	);
}

export default ResumeRight;
