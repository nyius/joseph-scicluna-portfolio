import React, { useState } from 'react';

import UploadCodeProject from '../components/UploadCodeProject';
import UploadCreativeProject from '../components/UploadCreativeProject';

function UploadProject() {
	//---------------------------------------------------------------------------------------------------//
	return (
		<div className="flex justify-center gap-5 mx-auto h-screen w-full items-center bg-primary" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/elastoplast.png")' }}>
			<UploadCodeProject />
			<UploadCreativeProject />
		</div>
	);
}

export default UploadProject;
