import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ setSlider, projectSelected }) {
	const navigate = useNavigate();
	return (
		<>
			{/* Non-mobile navbar */}
			<div
				className={`navbar bg-base-100 sticky top-0 left-0 z-10 ${
					projectSelected ? 'w-fit' : ''
				} hidden lg:block `}
			>
				<div className="navbar-start">
					<div class={`dropdown ${projectSelected ? 'block' : 'hidden'}`}>
						<label tabindex="0" class="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							class="menu menu-compact pixel-font dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li
								onClick={() => {
									setSlider(1);
									navigate('/');
								}}
							>
								<a>Home</a>
							</li>
							<li
								onClick={() => {
									setSlider(2);
									navigate('/#projects');
								}}
							>
								<a>Projects</a>
							</li>
							<li
								onClick={() => {
									setSlider(3);
									navigate('/#resume');
								}}
							>
								<a>Resume</a>
							</li>
							<li
								onClick={() => {
									setSlider(4);
									navigate('/#contact');
								}}
							>
								<a>Contact</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={`navbar-center ${projectSelected ? 'hidden' : 'block'}`}>
					<ul className={`menu p-0 pixel-font menu-horizontal`}>
						<li
							onClick={() => {
								setSlider(1);
								navigate('/');
							}}
						>
							<a>Home</a>
						</li>
						<li
							onClick={() => {
								setSlider(2);
								navigate('/#projects');
							}}
						>
							<a>Projects</a>
						</li>
						<li
							onClick={() => {
								setSlider(3);
								navigate('/#resume');
							}}
						>
							<a>Resume</a>
						</li>
						<li
							onClick={() => {
								setSlider(4);
								navigate('/#contact');
							}}
						>
							<a>Contact</a>
						</li>
					</ul>
				</div>
				<div className="navbar-end"></div>
			</div>

			{/* Mobile navbar */}
			<div className={`navbar bg-base-100 sticky top-0 left-0 z-10 w-fit block lg:hidden z-40`}>
				<div className="navbar-start">
					<div class={`dropdown`}>
						<label tabindex="0" class="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h7"
								/>
							</svg>
						</label>
						<ul
							tabindex="0"
							class="menu menu-compact pixel-font dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40"
						>
							<li
								onClick={() => {
									setSlider(1);
									navigate('/');
								}}
							>
								<a>Home</a>
							</li>
							<li
								onClick={() => {
									setSlider(2);
									navigate('/#projects');
								}}
							>
								<a>Projects</a>
							</li>
							<li
								onClick={() => {
									setSlider(3);
									navigate('/#resume');
								}}
							>
								<a>Resume</a>
							</li>
							<li
								onClick={() => {
									setSlider(4);
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
