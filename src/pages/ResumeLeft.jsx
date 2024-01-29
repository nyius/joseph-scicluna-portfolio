import React from 'react';
import { useNavigate } from 'react-router-dom';
import Me from '../assets/me.jpg';

function ResumeLeft({ slider, setSlider }) {
	const navigate = useNavigate();

	return (
		<div className={`left-container-resume h-screen lg:h-full justify-center items-center ${slider !== 3 ? '-z-50' : 'z-30'}`} style={slider === 3 ? { top: '0' } : { top: '150vh' }}>
			<div className="mb-4 lg:mb-0 pixel-font text-black items-center flex flex-col">
				<img src={Me} alt="Me" className="rounded-full mb-4 !max-w-lg w-[70%]" />
				<div className="p-4 bg-secondary border-4 border-solid border-accent-focus">
					<p>Joseph Scicluna</p>
					<p>Elmvale, On, Canada</p>
					<p>1 705 220-7676</p>
				</div>
				<p className="mt-5 text-center">Want to get in touch?</p>
				<div
					className="btn btn-fit bg-base-100 text-accent-focus mt-5 border-2 border-solid  border-accent-focus"
					onClick={() => {
						setSlider(4);
						navigate('/#contact');
					}}
				>
					Contact
				</div>
			</div>
		</div>
	);
}

export default ResumeLeft;
