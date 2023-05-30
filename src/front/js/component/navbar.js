import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav id="navbar-design" className="navbar sticky-top">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand fw-bold fs-2 mb-0">GitLoot</span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group dropstart">
						<button type="button" 
							className="cart-button btn btn-outline-info btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" 
							style={{backgroundImage:"linear-gradient(to right, #ECE9E6 0%, #FFFFFF  51%, #ECE9E6  100%)", dataColor2:"#FFFFFF", dataColor2:"#ECE9E6"}}>
								Tu loot!
						</button>
						<ul class="dropdown-menu">
							<li className="dropdown-item">Loot 1</li>
							<li className="dropdown-item">Loot 2</li>
							<li className="dropdown-item">Loot 3</li>
							<li className="dropdown-item">This shalt clear thy loot</li>
						</ul>
					</div>
					</div>
			</div>
		</nav>
	);
};
