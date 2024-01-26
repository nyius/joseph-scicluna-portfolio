import React from 'react';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { SiTailwindcss, SiJest, SiAdobephotoshop, SiAdobeindesign, SiBlender, SiUnrealengine, SiGooglechrome } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

function HomeTitle({ setSlider }) {
	const navigate = useNavigate();
	const devSkills = [`react`, `Vanilla JS`, `Node.JS`, `MongoDB`, `Express`, `Dynamic Web Apps`, `Tailwind`, `DaisyUI`, `SCSS`, `Jest`, `Figma`, `Algolia`, `Firebase Cloud DB`, `Firebase Cloud Functions`, `Amazon S3`, `Overwolf`, `Chrome`];
	const creativeSkills = [`Photoshop`, `Illustrator`, `InDesign`, `Modo`, `Blender`, `Substance`, `UE5`, `Unity`];

	return (
		<>
			<div className="right-container-home-title w-3/4 bg-secondary lg:bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-4xl pixel-font">Hi!</p>
				<p className="text-md lg:text-3xl font-bold">I'm Joey Scicluna</p>
				<p className="text-md lg:text-xl">I Do Full-Stack Web Development, 2d & 3D Art, and Design</p>
			</div>
			<div className="right-container-home-desc bg-secondary lg:bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-2xl">I mainly develop with</p>
				<div className="h-fit flex-wrap justify-center items-center right-container-home-desc-tech">
					{devSkills.map(skill => {
						return (
							<p key={skill} className="capitalize hover:skew-y-6 cursor-pointer bg-base-100 lg:bg-primary">
								{skill}
							</p>
						);
					})}
				</div>
				<div className="flex flex-row justify-center items-center mt-5 text-lg lg:text-4xl gap-4">
					<FaReact /> <DiJavascript1 /> <FaNodeJs /> <DiMongodb /> <SiTailwindcss /> <FaSass /> <SiJest /> <SiGooglechrome />
				</div>
			</div>
			<div className="right-container-home-desc bg-secondary lg:bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-2xl">I get creative with</p>
				<div className="h-fit flex-wrap justify-center items-center right-container-home-desc-tech">
					{creativeSkills.map(skill => {
						return (
							<p key={skill} className="capitalize hover:skew-y-6 cursor-pointer bg-base-100 lg:bg-primary">
								{skill}
							</p>
						);
					})}
				</div>
				<div className="flex flex-row justify-center items-center mt-5 text-lg lg:text-4xl gap-4">
					<SiAdobephotoshop /> <SiBlender /> <SiUnrealengine /> <SiAdobeindesign />
				</div>
			</div>
			<div className="right-container-home-contact bg-secondary lg:bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-2xl">Want to get in touch?</p>
				<button
					className="btn btn-sm lg:btn-lg bg-base-100 lg:btn-primary hover:bg-primary text-primary-content"
					onClick={() => {
						setSlider(4);
						navigate('/#contact');
					}}
				>
					Contact me
				</button>
			</div>
		</>
	);
}

export default HomeTitle;
