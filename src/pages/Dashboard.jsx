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
import ResumeLeft from './ResumeLeft';
import Stars from '../components/Stars';
import { auth, db } from '../firebase.config';
import { collection, query, getDocs } from 'firebase/firestore';

function Dashboard() {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState(null);
	const [projectSelected, setProjectSelected] = useState(false);
	const [projectsScroll, setProjectsScroll] = useState(false);
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

	/**
	 * Handles if a user clicked on a project or not
	 * @param {*} e
	 */
	const selectProject = e => {
		if (!e.target.className.includes('cartridge')) {
			setProjectSelected(false);
		}
	};

	let rightContainer = document.querySelector('.right-container');

	const onScroll = () => {
		const atBottom =
			Math.ceil(rightContainer.scrollTop + rightContainer.offsetHeight) === rightContainer.scrollHeight;
		if (atBottom) {
			setProjectsScroll(true);
		} else {
			setProjectsScroll(false);
		}
	};

	//---------------------------------------------------------------------------------------------------//
	return (
		// BGw
		<div className={`flex flex-col lg:flex-row w-full h-screen overflow-hidden`}>
			{/* ------------------------------- LEFT SIDE ------------------------------- */}
			<div
				className={`left-side bg-primary h-1/2 lg:h-full ${
					projectSelected ? 'w-full lg:w-8/12 h-3/4 lg:h-full' : 'w-full lg:w-1/2'
				}  ${slider === 1 || slider === 4 || slider === 3 ? 'h-full' : ''}`}
			>
				<div className="w-full h-screen">
					<Stars />

					{/* Navbar - This shows when user is on mobile or small device  */}
					<div className="block lg:hidden z-50">
						<Navbar
							projectSelected={projectSelected}
							setProjectSelected={setProjectSelected}
							setSlider={setSlider}
						/>
					</div>

					{/* Left Container */}
					<div className={`left-container h-full lg:h-full ${projectSelected ? `mt-1per` : `mt-0per`}`}>
						{/* HOME */}
						<div className={`${slider !== 1 ? '-z-50' : 'z-30'}`}>
							<HomeLeft slider={slider} setSlider={setSlider} />
						</div>

						{/* PROJECTS */}
						<div className={`${slider !== 2 ? '-z-50' : 'z-30'}`}>
							<ProjectsLeft
								projectSelected={projectSelected}
								setProjectSelected={setProjectSelected}
								slider={slider}
							/>
						</div>

						{/* RESUME */}
						<div className={`${slider !== 3 ? '-z-50' : 'z-30'}`}>
							<ResumeLeft projectSelected={projectSelected} slider={slider} />
						</div>

						{/* CONTACT */}
						{/* One is for mobile devices, and one is for larger screen */}
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
				className={`right-side bg-secondary ${projectSelected ? `w-full lg:w-4/12` : `w-full lg:w-1/2`}`}
				onClick={e => selectProject(e)}
				style={{
					backgroundImage: `url(${SymbolsBg})`,
				}}
			>
				{/* Navbar */}
				{/* This is hidden if user is on mobile/smaller screen */}
				<div className="hidden lg:block">
					<Navbar
						projectSelected={projectSelected}
						setProjectSelected={setProjectSelected}
						setSlider={setSlider}
					/>
				</div>

				{loading ? (
					<div className="w-full h-full flex flex-col justify-center items-center">
						<p className="text-2xl pixel-font tracking-widest font-bold">Loading...</p>
						<Spinner />
					</div>
				) : (
					<div
						className="right-container border-t-8 border-secondary-content lg:border-0"
						onScroll={onScroll}
					>
						{/* HOME */}
						<div className={`${slider !== 1 ? '-z-50' : 'z-30'}`}>
							<HomeRight slider={slider} setSlider={setSlider} />
						</div>

						{/* PROJECTS */}
						<div className={`${slider !== 2 ? '-z-50' : 'z-30'}`}>
							<ProjectsRight
								projects={projects}
								projectsScroll={projectsScroll}
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
