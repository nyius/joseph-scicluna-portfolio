import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import DPad from '../assets/d-pad.png';
import CircleButtonDown from '../assets/circle-button-down.png';
import SelectButtonDown from '../assets/select-button-down.png';
import CircleButton from '../assets/circle-button.png';
import SelectButton from '../assets/select-button.png';
import Spinner from '../components/Spinner';
import { auth, db } from '../firebase.config';
import { collection, query, getDocs } from 'firebase/firestore';

function Dashboard() {
	const [projects, setProjects] = useState(null);
	const [loading, setLoading] = useState(true);
	const [projectSelected, setProjectSelected] = useState(false);

	// Get projects ---------------------------------------------------------------------------------------------------//
	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projectsRef = collection(db, 'projects');
				const projectsData = await getDocs(projectsRef);

				const projectsArr = [];
				projectsData.forEach(project => {
					return projectsArr.push({
						id: project.id,
						project: project.data(),
					});
				});

				setProjects(projectsArr);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProjects();
	}, []);

	const selectProject = e => {
		if (!e.target.className.includes('cartridge')) {
			setProjectSelected(false);
		}
	};

	//---------------------------------------------------------------------------------------------------//
	return (
		// BG
		<div className={`flex flex-col lg:flex-row w-full h-screen overflow-hidden`}>
			{/* ------------------------------- LEFT SIDE ------------------------------- */}
			<div className={`bg-primary w-full h-full left-side ${projectSelected ? `basis-9/12` : `basis-6/12`}`}>
				<div className="w-full h-fit">
					<div id="stars" className=""></div>
					<div id="stars2" className=""></div>
					<div id="stars3" className=""></div>
					<div
						className={`flex justify-center h-fit w-full left-container ${
							projectSelected ? `mt-1per` : `mt-5per`
						}`}
					>
						{/* HADNHELD DEVICE */}
						<div
							className="handheld-container bg-zinc-100 flex flex-col items-center z-10 relative"
							style={{ width: projectSelected ? `98%` : `80%` }}
						>
							{/* SCREEN */}
							<div className="bg-zinc-400 screen-container flex flex-row">
								<div className="h-full power-button-container flex justify-center items-center">
									<div
										className={`${
											projectSelected ? 'power-button-on' : 'power-button-off'
										} bg-zinc-800 rounded-full`}
									></div>
								</div>
								<div className={`h-full ${projectSelected ? 'bg-secondary' : `bg-zinc-800`} screen`}>
									{projectSelected ? (
										<div className="h-full w-full pixel-font">
											<p className="text-4xl font-bold text-primary-content text-center">
												{projectSelected.project.name}
											</p>
											<p className="text-sm xl:text-xl text-neutral-focus text-center mt-5per">
												{projectSelected.project.description}
											</p>
											<div className="flex flex-row flex-wrap items-center justify-center tech-container">
												{projectSelected.project.technology.map(tech => {
													return (
														<p className="capitalize rounded-full bg-info text-info-content tech-container-name text-sm">
															{tech}
														</p>
													);
												})}
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
				</div>
			</div>

			{/* ------------------------------- RIGHT SIDE ------------------------------- */}
			<div
				id="right-side"
				className={`bg-secondary w-full h-full right-side z-10 overflow-auto ${
					projectSelected ? `basis-3/12` : `basis-6/12`
				}`}
				onClick={e => selectProject(e)}
				style={{
					backgroundImage: 'url("https://www.transparenttextures.com/patterns/inspiration-geometry.png")',
				}}
			>
				{loading ? (
					<div className="w-full h-full flex flex-col justify-center items-center">
						<p className="text-2xl pixel-font tracking-widest font-bold">Loading...</p>
						<Spinner />
					</div>
				) : (
					<div className="w-full h-full flex flex-col justify-items-center items-center right-container">
						<p className="text-center text-ld sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pixel-font">
							PROJECTS
						</p>
						<div
							className={`w-full h-fit grid ${
								projectSelected ? `grid-cols-1` : `grid-cols-1 md:grid-cols-2`
							} justify-items-center items-center projects-container`}
						>
							{/* Projects  */}
							{projects.map(project => {
								return (
									<div
										className="cartridge-container flex flex-col"
										key={project.id}
										onClick={() => setProjectSelected(project)}
									>
										<div
											className={`cartridge w-full h-fit justify-center items-center flex flex-col bg-zinc-100 ${
												projectSelected.id === project.id ? `skew-y-6` : ``
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
												<p className="capitalize cartridge-label-project-name border-2 shadow-lg bg-zinc-100 text-primary-content text-center font-bold pixel-font">
													{project.project.name}
												</p>
												{/* <p className="project-description text-md bg-zinc-100 text-primary-content text-center w-full mt-10">
													{project.project.description.slice(0, 50)}...
												</p> */}
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
