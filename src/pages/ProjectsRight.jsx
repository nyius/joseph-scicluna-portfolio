import React, { useLayoutEffect } from 'react';
import Arrow from '../assets/down_arrow.png';

function ProjectsRight({ projects, setProjectSelected, projectSelected, slider, projectsScroll }) {
	const sortedProjects = projects.sort((a, b) => (a.project.order < b.project.order ? -1 : 1));

	return (
		<div
			className={`w-full h-full justify-center items-center right-container-projects ${
				slider === 2 ? 'opacity-100' : 'opacity-0'
			} `}
			style={slider === 2 ? { top: '0' } : { top: '-150vh' }}
		>
			<p className="text-center text-ld sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pixel-font">PROJECTS</p>
			<div
				className={`w-full h-fit flex flex-wrap justify-center items-center projects-container`}
				// className={`w-full h-fit grid ${
				// 	projectSelected ? `grid-cols-1` : `grid-cols-1 md:grid-cols-2`
				// } justify-items-center items-center projects-container`}
			>
				{/* Projects  */}
				{sortedProjects.map(project => {
					return (
						<div
							className="cartridge-container flex flex-col"
							key={project.id}
							onClick={() => setProjectSelected(project)}
						>
							<div
								className={`cartridge w-full h-fit justify-center items-center flex flex-col bg-zinc-100 ${
									projectSelected.id === project.id ? `skew-y-6 upAndDown` : ``
								}`}
							>
								<div className="grid grid-rows-5 w-full cartridge-lines">
									<div className="cartridge-line row-start-1 w-full bg-zinc-200"></div>
									<div className="cartridge-line row-start-3 w-full bg-zinc-200"></div>
									<div className="cartridge-line row-start-5 w-full bg-zinc-200"></div>
								</div>
								<div
									className={`cartridge-label border-4 border-primary-content bg-base-100 flex flex-col justify-between items-center`}
									style={{
										background: `url(${project.project.image}) center/cover no-repeat padding-box`,
									}}
								>
									<p className="capitalize cartridge-label-project-name border-2 shadow-lg bg-primary text-primary-content text-center font-bold pixel-font">
										{project.project.name}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<img
				src={Arrow}
				alt="down arrow"
				className={`down-arrow upAndDown ${projectsScroll ? 'opacity-0' : 'opacity-100'}`}
			/>
		</div>
	);
}

export default ProjectsRight;
