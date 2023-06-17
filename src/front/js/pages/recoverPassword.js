import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const RecoverPassword = () => {
	const { store, actions } = useContext(Context);
	async function submitForm(e){
        e.preventDefault()
        let data = new FormData(e.target)
        let resp = await actions.requestPasswordRecovery(data.get("email"))
        if (resp>=400){
            return 
        }
        console.log("Login exitoso")
    }

	return (
		<div className="text-center mt-5">
			<div className="card gradient-custom-contrast">
				<div className="card-header main-title">
					Salvemos tu contraseña
				</div>
				<div className="card-body">
					<form onSubmit = {submitForm}>
						<div className="mb-3 card-title">
							<label htmlFor="exampleInputEmail" className="form-label sub-title">Por favor, ingresa tu correo en este campo:</label>
							<input type="email" className="form-control mx-auto text-center" style={{width: "25rem"}} name="email" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="email@domain.com"></input>
							<div id="emailHelp" className="form-text" >Jamas compartiremos tu correo con nadie más</div>
						</div>
						<button type="submit" className="btn btn-outline-success text-success">Enviar correo de recuperación</button>
					</form>
				</div>
			</div>			
		</div>
	);
};
