import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import SymbolsBg from '../assets/inspiration-geometry.png';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';
import ProjectsLeft from './ProjectsLeft';
import ProjectsRight from './ProjectsRight';
import ContactRight from './ContactRight';
import ContactLeft from './ContactLeft';
import CreativeLeft from './CreativeLeft';
import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';
import Stars from '../components/Stars';
import { auth, db } from '../firebase.config';
import { collection, query, getDocs } from 'firebase/firestore';
import CreativeRight from './CreativeRight';

function Dashboard() {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);
	const [creativeProjects, setCreativeProjects] = useState([]);
	const [projectSelected, setProjectSelected] = useState(false);
	const [artworkSelected, setArtworkSelected] = useState(false);
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

	useEffect(() => {
		const fetchCreativeProjects = async () => {
			try {
				const creativeProjectsRef = collection(db, 'creativeProjects');
				const projectsData = await getDocs(creativeProjectsRef);

				const projectsArr = [];
				projectsData.forEach(project => {
					return projectsArr.push({
						id: project.id,
						project: project.data(),
					});
				});

				projectsArr.sort((a, b) => (a.project.order < b.project.order ? -1 : 1));

				setCreativeProjects(projectsArr);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		fetchCreativeProjects();
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

	/**
	 * Handles if a user clicked on a artwork or not
	 * @param {*} e
	 */
	const selectArtwork = e => {
		if (!e.target.closest('#remote-button')) {
			setArtworkSelected(false);
		}
	};

	//---------------------------------------------------------------------------------------------------//
	let rightProjectsContainer = document.querySelector('.right-container-home');

	/**
	 * Listens to Scrolling for the projects container
	 * This is so I can show or hide the down arrow
	 */
	const onScroll = () => {
		const atBottom = Math.ceil(rightProjectsContainer.scrollTop + rightProjectsContainer.offsetHeight) === rightProjectsContainer.scrollHeight;
		if (atBottom) {
			setProjectsScroll(true);
		} else {
			setProjectsScroll(false);
		}
	};

	//---------------------------------------------------------------------------------------------------//
	return (
		<div className={`flex flex-col lg:flex-row w-full h-screen overflow-hidden`}>
			<Navbar projectSelected={projectSelected} setArtworkSelected={setArtworkSelected} setProjectSelected={setProjectSelected} setSlider={setSlider} />

			{/* ------------------------------- LEFT SIDE ------------------------------- */}
			<div
				className={`left-side bg-primary h-1/2 lg:h-full ${projectSelected ? 'w-full lg:w-8/12 h-3/4 lg:h-full' : artworkSelected ? 'w-full lg:w-8/12 h-3/4 lg:h-full' : 'w-full lg:w-1/2'}  ${
					slider === 1 || slider === 4 || slider === 3 ? 'h-full' : ''
				}`}
			>
				<div className="w-full h-screen">
					<Stars />

					{/* Left Container */}
					<div className={`left-container h-full lg:h-full ${projectSelected ? `mt-1per` : `mt-0per`}`}>
						{/* HOME */}
						<HomeLeft slider={slider} setSlider={setSlider} />

						{/* PROJECTS */}
						<ProjectsLeft projectSelected={projectSelected} setProjectSelected={setProjectSelected} slider={slider} />

						{/* CREATIVE */}
						{/* One is for mobile devices, and one is for larger screen */}
						<CreativeLeft artworkSelected={artworkSelected} setArtworkSelected={setArtworkSelected} slider={slider} />

						{/* CONTACT */}
						{/* One is for mobile devices, and one is for larger screen */}
						<div className="block lg:hidden">
							<ContactRight slider={slider} />
						</div>
						<div className="hidden lg:block">
							<ContactLeft slider={slider} />
						</div>

						{/* RESUME */}
						{/* One is for mobile devices, and one is for larger screen */}
						<div className="block lg:hidden">
							<ResumeRight slider={slider} />
						</div>
						<div className="hidden lg:block">
							<ResumeLeft slider={slider} setSlider={setSlider} />
						</div>
					</div>
				</div>
			</div>

			{/* ------------------------------- RIGHT SIDE ------------------------------- */}
			<div
				className={`right-side bg-secondary ${projectSelected ? `w-full lg:w-4/12` : artworkSelected ? 'w-full lg:w-4/12' : `w-full lg:w-1/2`}`}
				onClick={e => {
					selectProject(e);
					selectArtwork(e);
				}}
				style={{
					backgroundImage: `url(${SymbolsBg})`,
				}}
			>
				{/* Navbar */}
				{/* This is hidden if user is on mobile/smaller screen */}
				<div className="hidden lg:block">
					<Navbar projectSelected={projectSelected} setProjectSelected={setProjectSelected} setSlider={setSlider} />
				</div>

				{loading ? (
					<div className="w-full h-full flex flex-col justify-center items-center">
						<p className="text-2xl pixel-font tracking-widest font-bold">Loading...</p>
						<Spinner />
					</div>
				) : (
					<div className="right-container border-t-8 border-secondary-content lg:border-0" onScroll={onScroll}>
						{/* HOME */}
						<HomeRight slider={slider} setSlider={setSlider} />

						{/* PROJECTS */}
						<ProjectsRight projects={projects} projectsScroll={projectsScroll} projectSelected={projectSelected} setProjectSelected={setProjectSelected} slider={slider} />

						{/* CREATIVE */}
						<CreativeRight creativeProjects={creativeProjects} artworkSelected={artworkSelected} setArtworkSelected={setArtworkSelected} slider={slider} />

						{/* Contact */}
						<ContactRight slider={slider} />

						{/* RESUME */}
						<ResumeRight slider={slider} />
					</div>
				)}
			</div>
		</div>
	);
}

export default Dashboard;
