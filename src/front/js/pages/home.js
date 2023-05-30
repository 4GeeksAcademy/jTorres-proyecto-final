import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			

			<section className="container d-block">
				
			</section>
			<section className="title-section align-middle">
				{/* <button className="btn btn-info" style={{borderRadius:"50% 50% 50% 50% / 95% 95% 5% 5%", width:"50rem", height:"5rem"}}></button>
					<h2 className="text-success" style={{fontSize:"6rem"}}>¿Sha tenés hambre?</h2>
				<button className="btn btn-info" style={{borderRadius:"50% 50% 50% 50% / 12% 12% 88% 88% ", width:"50rem", height:"5rem"}}></button> */}
				<h1 className="main-title my-auto align-middle">GitLoot</h1>
			</section>
			<section className="sub-section">
				<h2 className="sub-title pt-5">Acá puedes tener la comida más saludable, ademas de conveniente</h2>
				<h2 className="sub-title">¡En la puerta de tu casa!</h2>
			</section>
			<section className="menus py-5 my-0">
				<div className="container-fluid d-flex justify-content-center">
					<div className="mx-3">
						<button className="btn btn-outline-success p-3 mx-auto fs-4 fw-bold" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Que tiendas tienes mkis</button>
					</div>
					<div className="mx-3">
						<button className="btn btn-outline-success p-3 mx-auto fs-4 fw-bold" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Pedilo y recibilo boludo</button>
					</div>
					<div className="mx-3">
						<button className="btn btn-outline-success p-3 mx-auto fs-4 fw-bold" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Recibe semanal, carnal</button>
					</div>
				</div>
			</section>
			<section className="menus d-flex d-grid">
				<div className="container-fluid d-flex justify-content-center">
					<div className="mx-3">
						<button className="btn btn-outline-success p-3 mx-auto fs-4 fw-bold" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Que tiendas tienes mkis</button>
					</div>
					<div className="mx-3">
						<button className="btn btn-outline-success p-3 mx-auto fs-4 fw-bold" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Pedilo y recibilo boludo</button>
					</div>
				</div>
			</section>
			<section className="sub-section">
				<h2 className="sub-title pt-4 fs-1">Te respalda una inteligencia artificial, que te recomendará una excelente dieta semanal basada en nuestros platos disponibles!</h2>
			</section>
		</div>
	);
};
