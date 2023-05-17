import React from 'react';
import DPad from '../assets/d-pad.png';
import CircleButtonDown from '../assets/circle-button-down.png';
import SelectButtonDown from '../assets/select-button-down.png';
import CircleButton from '../assets/circle-button.png';
import SelectButton from '../assets/select-button.png';
import Arrow from '../assets/down arrow.png';

function ProjectsLeft({ projectSelected, slider }) {
	return (
		<div className={`left-container-projects ${slider !== 2 ? '-z-50' : 'z-30'}`} style={slider === 2 ? { top: '10vh' } : { top: '150vh' }}>
			{/* ProjectsLeft */}
			<div className="gameboy-container bg-zinc-100" style={{ width: projectSelected ? `96%` : `60%` }}>
				{/* SCREEN CONTAINER */}
				<div className="bg-zinc-400 screen-container">
					{/* POWER LED */}
					<div className="power-led-container">
						<div className={`${projectSelected ? 'power-led-on' : 'power-led-off'} bg-zinc-800 rounded-full`}></div>
					</div>

					{/* DISPLAY */}
					<div className={`h-full ${projectSelected ? 'bg-base-100' : `bg-zinc-800`} screen`}>
						{projectSelected ? (
							<div className="h-fit w-full">
								<div className={`divider hidden lg:block `}></div>
								<p className="text-sm lg:text-4xl font-bold text-secondary-content text-center pixel-font ">{projectSelected.project.name}</p>
								<div className="border-4 border-secondary-content mt-4">
									<a href={projectSelected.project.link} target="_blank">
										<img src={projectSelected.project.image} alt={projectSelected.project.name} />
									</a>
								</div>
								<p className="project-description text-sm xl:text-2xl text-secondary-content text-center mt-5per bg-secondary border-4 border-primary-content">{projectSelected.project.description}</p>
								<div className="flex flex-col lg:flex-row w-full h-fit bottom-container">
									<div className="flex flex-col w-full lg:w-1/2 tech-container">
										<p className="text-sm lg:text-xl w-full text-secondaru-content text-center pixel-font">TECHNOLOGY</p>
										<div className="flex flex-col w-full h-fit">
											{projectSelected.project.technology.map((tech, i) => {
												return (
													<p key={i} className="capitalize w-full h-full font-bold bg-info text-info-content tech-container-name text-lg border-4 border-primary-content">
														{tech}
													</p>
												);
											})}
										</div>
									</div>

									{/* Link */}
									<div className="flex flex-col h-fit w-full lg:w-1/2 link-container">
										<p className="text-sm lg:text-xl w-full text-secondary-content text-center pixel-font mb-2">SEE IT IN ACTION</p>
										<a href={projectSelected.project.link} className="w-full text-center font-bold text-xl" target="_blank">
											<button className="btn btn-md lg:btn-lg w-full btn-success hover:bg-secondary-focus border-4 border-primary-content hover:border-primary-content dark-box-shadow-03">Visit App</button>
										</a>
										<a href={projectSelected.project.github} className="w-full text-center font-bold text-xl" target="_blank">
											<button className="btn btn-md lg:btn-lg w-full btn-accent border-4 border-primary-content hover:border-primary-content dark-box-shadow-03">See on Github</button>
										</a>
									</div>
								</div>
							</div>
						) : (
							<div className="h-full w-full pixel-font p-2 text-primary text-sm lg:text-lg">
								<p className="h-4 w-full">
									Insert Cartridge to Continue... <span className="blinkLine">|</span>
								</p>
							</div>
						)}
					</div>
				</div>

				{/* BUTTONS */}
				<div className="buttons w-full flex flex-row justify-between">
					<img src={DPad} alt="" className="d-pad self-start" />
					<div className="ab-buttons flex flex-row justify-between items-center">
						<img src={CircleButton} alt="" className="ab-button" />
						<img src={CircleButton} alt="" className="ab-button" />
					</div>
				</div>
				<div className="flex flex-row justify-between items-center select-buttons">
					<img src={SelectButton} alt="" className="select-button" />
					<img src={SelectButton} alt="" className="select-button" />
				</div>

				{/* VENTS */}
				<div className="grid grid-cols-12 vents-container place-self-end">
					<div className="col-span-1 col-start-1 bg-zinc-200 h-full rounded-full vent"></div>
					<div className="col-span-1 col-start-3 bg-zinc-200 h-full rounded-full vent"></div>
					<div className="col-span-1 col-start-5 bg-zinc-200 h-full rounded-full vent"></div>
					<div className="col-span-1 col-start-7 bg-zinc-200 h-full rounded-full vent"></div>
					<div className="col-span-1 col-start-9 bg-zinc-200 h-full rounded-full vent"></div>
					<div className="col-span-1 col-start-11 bg-zinc-200 h-full rounded-full vent"></div>
				</div>
			</div>
		</div>
	);
}

export default ProjectsLeft;
