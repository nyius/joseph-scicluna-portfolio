import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ setSlider }) {
	return (
		<div class="navbar bg-base-100 absolute top-0 left-0">
			<div className="navbar-start"></div>
			<div class="navbar-center">
				<ul class="menu menu-horizontal p-0 pixel-font">
					<li onClick={() => setSlider(1)}>
						<a>Home</a>
					</li>
					<li onClick={() => setSlider(2)}>
						<a>Projects</a>
					</li>
					<li onClick={() => setSlider(3)}>
						<a>Resume</a>
					</li>
					<li onClick={() => setSlider(4)}>
						<a>Contact</a>
					</li>
				</ul>
			</div>
			<div className="navbar-end"></div>
		</div>
	);
}

export default Navbar;
