import React from 'react';
import { FaReact, FaNodeJs, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { SiTailwindcss, SiJest } from 'react-icons/si';

function HomeTitle() {
	const skills = [`react`, `Vanilla JS`, `Node.JS`, `MongoDB`, `Express`, `Tailwind`, `DaisyUI`, `SCSS`, `Jest`];

	return (
		<>
			<div className="right-container-home-title w-3/4 bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-4xl pixel-font">Hi!</p>
				<p className="text-md lg:text-2xl">I'm Joey Scicluna</p>
				<p className="text-md lg:text-xl">I Do Full-Stack Web Development</p>
			</div>
			<div className="right-container-home-desc bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-2xl">I mainly work with</p>
				<div className="h-fit flex-wrap justify-center items-center right-container-home-desc-tech">
					{skills.map(skill => {
						return (
							<p key={skill} className="capitalize hover:skew-y-6 cursor-pointer">
								{skill}
							</p>
						);
					})}
				</div>
				<div className="flex flex-row justify-center items-center mt-5 text-md lg:text-4xl gap-4">
					<FaReact /> <DiJavascript1 /> <FaNodeJs /> <DiMongodb /> <SiTailwindcss /> <FaSass /> <SiJest />
				</div>
			</div>
			<div className="right-container-home-contact bg-base-100 border-4 border-primary-content">
				<p className="text-md lg:text-2xl">Want to get in touch?</p>
				<button className="btn btn-sm lg:btn-lg btn-primary">Contact me</button>
			</div>
		</>
	);
}

export default HomeTitle;
