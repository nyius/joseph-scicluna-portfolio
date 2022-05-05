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
import ProjectsRight from './ProjectsRight';
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
				className={`bg-primary w-full h-1/2 lg:h-full left-side relative ${
					projectSelected ? `basis-9/12` : `basis-6/12`
				}  ${slider === 1 ? 'h-full' : ''}`}
			>
				<div className="w-full h-screen">
					{/* StarsBG */}
					<div id="stars" className=""></div>
					<div id="stars2" className=""></div>
					<div id="stars3" className=""></div>

					{/* Navbar */}
					<div className="block lg:hidden">
						<Navbar projectSelected={projectSelected} setSlider={setSlider} />
					</div>

					<div
						className={`justify-center h-full lg:h-full w-full left-container ${
							projectSelected ? `mt-1per` : ``
						}`}
					>
						{/* HOME */}
						<div className={`${slider !== 1 ? '-z-50' : 'z-30'}`}>
							<HomeLeft slider={slider} />
						</div>

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
				<div className="hidden lg:block">
					<Navbar projectSelected={projectSelected} setSlider={setSlider} />
				</div>

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
						<div className={`${slider !== 2 ? '-z-50' : 'z-30'}`}>
							<ProjectsRight
								projects={projects}
								projectSelected={projectSelected}
								setProjectSelected={setProjectSelected}
								slider={slider}
							/>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
