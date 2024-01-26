import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.config';
import { useAuthStatus } from '../hooks/useAuthStatus';

function Navbar({ setSlider, projectSelected, setArtworkSelected, setProjectSelected }) {
	const navigate = useNavigate();
	const { loggedIn, checkingStatus } = useAuthStatus();

	//---------------------------------------------------------------------------------------------------//
	return (
		<>
			{/* Non-mobile navbar */}
			<div className={`navbar bg-base-100 fixed top-0 left-0 z-50 hidden lg:block `}>
				<div className={`navbar-center`}>
					<ul className={`menu p-0 pixel-font menu-horizontal`}>
						<li
							onClick={() => {
								setSlider(1);
								setProjectSelected(false);
								setArtworkSelected(false);
								navigate('/');
							}}
						>
							<a>Home</a>
						</li>
						<li
							onClick={() => {
								setSlider(2);
								setProjectSelected(false);
								setArtworkSelected(false);
								navigate('/#projects');
							}}
						>
							<a>Projects</a>
						</li>

						<li
							onClick={() => {
								setSlider(5);
								setProjectSelected(false);
								setArtworkSelected(false);
								navigate('/#creative');
							}}
						>
							<a>Creative</a>
						</li>
						<li
							onClick={() => {
								setSlider(3);
								setProjectSelected(false);
								setArtworkSelected(false);
								navigate('/#resume');
							}}
						>
							<a>Resume</a>
						</li>
						<li
							onClick={() => {
								setSlider(4);
								setProjectSelected(false);
								setArtworkSelected(false);
								navigate('/#contact');
							}}
						>
							<a>Contact</a>
						</li>
						{!checkingStatus && loggedIn ? (
							<li
								onClick={() => {
									navigate('/upload-project');
								}}
							>
								<a>Upload</a>
							</li>
						) : (
							''
						)}
					</ul>
				</div>
				<div className="navbar-end"></div>
			</div>

			{/* Mobile navbar */}
			<div className={`navbar bg-base-100 fixed top-0 left-0 w-fit block lg:hidden z-50`}>
				<div className="navbar-start">
					<div className={`dropdown`}>
						<label tabIndex="0" className="btn btn-ghost btn-circle">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
							</svg>
						</label>
						<ul tabIndex="0" className="menu menu-compact pixel-font dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40">
							<li
								onClick={() => {
									setSlider(1);
									setProjectSelected(false);
									setArtworkSelected(false);
									navigate('/');
								}}
							>
								<a>Home</a>
							</li>
							<li
								onClick={() => {
									setSlider(2);
									setProjectSelected(false);
									setArtworkSelected(false);
									navigate('/#projects');
								}}
							>
								<a>Projects</a>
							</li>
							<li
								onClick={() => {
									setSlider(5);
									setProjectSelected(false);
									setArtworkSelected(false);
									navigate('/#creative');
								}}
							>
								<a>Creative</a>
							</li>
							<li
								onClick={() => {
									setSlider(3);
									setProjectSelected(false);
									setArtworkSelected(false);
									navigate('/#resume');
								}}
							>
								<a>Resume</a>
							</li>
							<li
								onClick={() => {
									setSlider(4);
									setProjectSelected(false);
									setArtworkSelected(false);
									navigate('/#contact');
								}}
							>
								<a>Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
