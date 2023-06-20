import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import LoginModal from "../pages/loginModal";


export const Navbar = () => {
	const {store, actions} = useContext(Context)

	
	return (
		<nav id="navbar-design" className="navbar fixed-top">
			<div className="container-fluid">
				<Link to="/">
					<img className="icon" src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/a62b0af7-39d5-4341-b400-46ae9d323a43/variations/Default_Generate_a_elegant_design_logo_based_on_a_gaming_subsc_0_a62b0af7-39d5-4341-b400-46ae9d323a43_0.png"></img>
					<span className="navbar-brand fs-2 mb-0 color-font">GitLoot</span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group dropstart">
						<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}
							className="btn btn-outline-info dropdown-toggle px-5" data-bs-toggle="dropdown" aria-expanded="false">
								Tu loot!
						</button>
						<ul className="dropdown-menu">
						{store.cart.map((plate, index)=>{
						return(
							<div className="d-flex flex-row" key={index}>
								<li><a className="dropdown-item d-flex flex-row overflow-hidden"  href="#">{plate.plateName}</a></li>
								{/* <button onClick={()=>actions.deleteCartItem(index)} type="button" className="badge rounded-pill bg-info mx-auto">X</button> */}
							</div>
							)})}
							<li className="dropdown-item"><Link to="/checkout"><button className="btn btn-success">Ir a pagar!</button></Link></li>
						</ul>
					</div>
					{
					!!store.accessToken?
					<>
						<Link to="/profile">
						<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} className="btn btn-outline-secondary py-2 px-5">
							Tu Perfil
						</button>
					</Link>
					</>                                                                          
					:
					<>
						<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} 
							className="btn btn-outline-primary py-2 px-5" 
							data-bs-toggle="modal" data-bs-target="#loginModal">
								Inicia Sesión!
							</button>
						<Link to="/register">
							<button type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} className="btn btn-outline-success py-2 px-5">
								Registrate!
							</button>
						</Link>
					</>
					}
				</div>
			</div>
		</nav>
		
		
	);
};














