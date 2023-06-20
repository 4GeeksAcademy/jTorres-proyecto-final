import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";

export const Register = () => {
    const {store, actions } = useContext(Context)
    

    return (


        <section className="vh-100 mb-5 pb-5">
                <h1 className="main-title text-center pt-5 pb-0 mb-0">Registrate en GitLoot!</h1>
                <div className="row justify-content-center align-items-center mt-5 h-25">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Por favor, llena tus datos!</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text" id="firstName" className="form-control form-control-lg" placeholder="Nombres" />
                                                <label className="form-label" htmlFor="firstName">Nombres</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text" id="lastName" className="form-control form-control-lg" placeholder="Apellidos" />
                                                <label className="form-label" htmlFor="lastName">Apellidos</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                            <div className="form-outline datepicker w-100">
                                                <input type="text" className="form-control form-control-lg" placeholder="dd-mm-aaaa" id="birthdayDate" />
                                                <label htmlFor="birthdayDate" className="form-label">Fecha de Nacimiento</label>
                                            </div>


                                        </div>
                                        <div className="col-md-6 mb-4">

                                            <h6 className="mb-2 pb-1">Género: </h6>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                    value="option1" />
                                                <label className="form-check-label" htmlFor="femaleGender">Femenino</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                    value="option2" />
                                                <label className="form-check-label" htmlFor="maleGender">Masculino</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                    value="option3" />
                                                <label className="form-check-label" htmlFor="otherGender">Otro</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder="Tu correo" />
                                                <label className="form-label" htmlFor="emailAddress">Correo</label>
                                            </div>
                                            <div className="form-outline">
                                                <input type="password" id="password" className="form-control form-control-lg" placeholder="Elige Una contraseña" />
                                                <label className="form-label" htmlFor="password">Correo</label>
                                            </div>

                                        </div>
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="tel" id="phoneNumber" className="form-control form-control-lg" placeholder="Tu numero móvil" />
                                                <label className="form-label" htmlFor="phoneNumber">Teléfono</label>
                                            </div>

                                        </div>
                                    </div>
                                    <Link to="/">
                                        <div className="mt-4 pt-2">
                                            <input className="btn btn-outline-success px-5 btn-lg" 
                                            style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10% " }} 
                                            type="submit" value="Listo!" 
                                            // onClick={()=>(actions.updateUserProfile(email="askingalessa@gfake.com", (firstName= "Alejandra",secondName= "Martinez", Gender= "femenino")))} 
                                            />
                                        </div>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <LoginModal />
        </section>
    )
}
export default Register;


