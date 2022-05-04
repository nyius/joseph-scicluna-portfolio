import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import DPad from '../assets/d-pad.png';
import CircleButtonDown from '../assets/circle-button-down.png';
import SelectButtonDown from '../assets/select-button-down.png';
import CircleButton from '../assets/circle-button.png';
import SelectButton from '../assets/select-button.png';
import SymbolsBg from '../assets/inspiration-geometry.png';
import Arrow from '../assets/down arrow.png';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';
import ProjectsLeft from './ProjectsLeft';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import { auth, db } from '../firebase.config';
import { collection, query, getDocs } from 'firebase/firestore';

function Dashboard() {
	const [projects, setProjects] = useState(null);
	const [loading, setLoading] = useState(true);
	const [projectSelected, setProjectSelected] = useState(false);
	const [slider, setSlider] = useState(1);

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
			<div
				className={`bg-primary w-full h-full left-side relative ${
					projectSelected ? `basis-9/12` : `basis-6/12`
				}`}
			>
				<div className="w-full h-screen">
					<div id="stars" className=""></div>
					<div id="stars2" className=""></div>
					<div id="stars3" className=""></div>
					<div
						className={`justify-center h-full w-full left-container ${
							projectSelected ? `mt-1per` : `mt-5per`
						}`}
					>
						{/* HOME */}
						<HomeLeft slider={slider} />

						{/* PROJECTS */}
						<ProjectsLeft projectSelected={projectSelected} slider={slider} />
					</div>
				</div>
			</div>

			{/* ------------------------------- RIGHT SIDE ------------------------------- */}
			<div
				className={`bg-secondary w-full h-full right-side z-10 overflow-hidden relative ${
					projectSelected ? `basis-3/12` : `basis-6/12`
				}`}
				onClick={e => selectProject(e)}
				style={{
					backgroundImage: `url(${SymbolsBg})`,
				}}
			>
				<Navbar setSlider={setSlider} />

				{loading ? (
					<div className="w-full h-full flex flex-col justify-center items-center">
						<p className="text-2xl pixel-font tracking-widest font-bold">Loading...</p>
						<Spinner />
					</div>
				) : (
					<div className="justify-items-center items-center right-container">
						{/* HOME */}
						<HomeRight slider={slider} />

						{/* PROJECTS */}
						<div
							className="w-full h-full justify-center items-center right-container-projects"
							style={slider === 2 ? { top: '0' } : { top: '-100vh' }}
						>
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
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
