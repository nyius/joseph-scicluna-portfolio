import React from 'react';
import DPad from '../assets/d-pad.png';
import CircleButtonDown from '../assets/circle-button-down.png';
import SelectButtonDown from '../assets/select-button-down.png';
import CircleButton from '../assets/circle-button.png';
import SelectButton from '../assets/select-button.png';
import Arrow from '../assets/down arrow.png';

function ProjectsLeft({ projectSelected, slider }) {
	return (
		<div
			className="left-container-projects h-fit justify-center"
			style={slider === 2 ? { top: '0' } : { top: '100vh' }}
		>
			{/* ProjectsLeft */}
			<div
				className="handheld-container bg-zinc-100 items-center z-10 relative"
				style={{ width: projectSelected ? `98%` : `80%` }}
			>
				{/* SCREEN CONTAINER */}
				<div className="bg-zinc-400 screen-container">
					{/* POWER LED */}
					<div className="power-led-container justify-center items-center">
						<div
							className={`${projectSelected ? 'power-led-on' : 'power-led-off'} bg-zinc-800 rounded-full`}
						></div>
					</div>

					{/* DISPLAY */}
					<div className={`h-full ${projectSelected ? 'bg-primary' : `bg-zinc-800`} screen`}>
						{projectSelected ? (
							<div className="h-fit w-full">
								<div className="divider"></div>
								<p className="text-4xl font-bold text-primary-content text-center pixel-font">
									{projectSelected.project.name}
								</p>
								<div className="divider"></div>
								<p className="project-description text-sm xl:text-2xl text-primary-content text-center mt-5per p-4 bg-secondary border-4 border-primary-content">
									{projectSelected.project.description}
								</p>
								<div className="flex flex-row w-full h-fit bottom-container">
									<div className="flex flex-col w-1/2 tech-container">
										<p className="text-xl w-full text-primary-content pixel-font">TECHNOLOGY</p>
										<div className="flex flex-col w-1/2 h-fit">
											{projectSelected.project.technology.map((tech, i) => {
												return (
													<p
														key={i}
														className="capitalize w-full h-full font-bold bg-info text-info-content tech-container-name text-lg border-4 border-primary-content"
													>
														{tech}
													</p>
												);
											})}
										</div>
									</div>
									<div className="flex flex-col h-fit w-1/2 link-container">
										<p className="text-xl w-full text-primary-content pixel-font">LINK</p>
										<div className="divider"></div>
										<button className="btn-lg btn-success hover:bg-accent-focus border-4 border-primary-content">
											<a
												href={projectSelected.project.link}
												className="w-1/2 text-center font-bold text-xl"
												target="_blank"
											>
												Visit App
											</a>
										</button>
									</div>
								</div>
							</div>
						) : (
							''
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
