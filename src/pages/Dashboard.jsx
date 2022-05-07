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
import ContactRight from './ContactRight';
import ContactLeft from './ContactLeft';
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
				className={`bg-primary z-10 w-full h-1/2 lg:h-full left-side relative ${
					projectSelected ? `basis-8/12` : `basis-6/12`
				}  ${slider === 1 || slider === 4 ? 'h-full' : ''}`}
			>
				<div className="w-full h-screen">
					{/* StarsBG */}
					<div id="stars" className=""></div>
					<div id="stars2" className=""></div>
					<div id="stars3" className=""></div>

					{/* Navbar */}
					<div className="block lg:hidden z-50">
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
						<div className={`${slider !== 2 ? '-z-50' : 'z-30'}`}>
							<ProjectsLeft projectSelected={projectSelected} slider={slider} />
						</div>

						{/* Contact */}
						<div className="block lg:hidden">
							<div className={`${slider !== 4 ? '-z-50' : 'z-30'}`}>
								<ContactRight slider={slider} />
							</div>
						</div>
						<div className="hidden lg:block">
							<div className={`${slider !== 4 ? '-z-50' : 'z-30'}`}>
								<ContactLeft slider={slider} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ------------------------------- RIGHT SIDE ------------------------------- */}
			<div
				className={`bg-secondary w-full h-full right-side z-10 overflow-hidden relative ${
					projectSelected ? `basis-4/12` : `basis-6/12`
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
					<div className="justify-items-center items-center right-container border-t-8 border-secondary-content lg:border-0">
						{/* HOME */}
						<div className={`${slider !== 1 ? '-z-50' : 'z-30'}`}>
							<HomeRight slider={slider} setSlider={setSlider} />
						</div>

						{/* PROJECTS */}
						<div className={`${slider !== 2 ? '-z-50' : 'z-30'}`}>
							<ProjectsRight
								projects={projects}
								projectSelected={projectSelected}
								setProjectSelected={setProjectSelected}
								slider={slider}
							/>
						</div>

						{/* Contact */}
						<div className={`${slider !== 4 ? '-z-50' : 'z-30'}`}>
							<ContactRight slider={slider} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
