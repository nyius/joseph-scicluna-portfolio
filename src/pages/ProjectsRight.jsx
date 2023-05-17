import React from 'react';
import Arrow from '../assets/down_arrow.png';

function ProjectsRight({ projects, setProjectSelected, projectSelected, slider, projectsScroll }) {
	const sortedProjects = projects.sort((a, b) => (a.project.order < b.project.order ? -1 : 1));

	return (
		<div className={`right-container-projects ${slider === 2 ? 'opacity-100' : 'opacity-0'} `} style={slider === 2 ? { top: '0' } : { top: '-150vh' }}>
			<p className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pixel-font">PROJECTS</p>
			<div className={`projects-container`}>
				{/* Projects  */}
				{sortedProjects.map(project => {
					return (
						<div className="cartridge-container flex flex-col" key={project.id} onClick={() => setProjectSelected(project)}>
							<div className={`cartridge w-full h-fit justify-center items-center flex flex-col bg-zinc-100 ${projectSelected.id === project.id ? `skew-y-6 upAndDown` : ``}`}>
								<div className="grid grid-rows-5 w-full cartridge-lines">
									<div className="cartridge-line row-start-1 w-full bg-zinc-200"></div>
									<div className="cartridge-line row-start-3 w-full bg-zinc-200"></div>
									<div className="cartridge-line row-start-5 w-full bg-zinc-200"></div>
								</div>
								<div
									className={`cartridge-label border-4 border-secondary-content bg-base-100 flex flex-col justify-between items-center`}
									style={{
										background: `url(${project.project.image}) center/cover no-repeat padding-box`,
									}}
								>
									<p className={`rounded-lg cartridge-label-project-name capitalize border-4 border-neutral-focus ${'background-' + Math.ceil(Math.random() * 5)} text-black text-center font-bold pixel-font `}>
										{project.project.name}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<img src={Arrow} alt="down arrow" className={`down-arrow upAndDown ${projectsScroll ? 'opacity-0' : 'opacity-100'}`} />
		</div>
	);
}

export default ProjectsRight;
