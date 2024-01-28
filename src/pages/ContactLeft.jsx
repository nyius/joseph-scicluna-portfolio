import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

function ContactLeft({ slider }) {
	return (
		<div className={`left-container-contact h-fit lg:h-full ${slider !== 4 ? '-z-50' : 'z-30'}`} style={slider === 4 ? { top: '0' } : { top: '150vh' }}>
			<div className="avatar mb-4 lg:mb-0">
				<div className="selfie mask mask-hexagon bg-base-100">
					<HiOutlineMail className="w-40 h-40 text-secondary-content p-8" />
				</div>
			</div>
		</div>
	);
}

export default ContactLeft;
