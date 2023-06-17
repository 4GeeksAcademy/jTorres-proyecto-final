import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useSearchParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/profile.css";


export const ProfileSecurity = () => {
    const { store, actions } = useContext(Context);
    let [searchParams, setSearchParams] = useSearchParams()
	async function submitForm(e){
        e.preventDefault()
        let data = new FormData(e.target)
        if(data.get("password")!==data.get("passwordConfirm"&&"passwordConfirm2")){
            console.log("Claves no coinciden")
            return
        }
        let tokenPassword=searchParams.get("token")
        let resp = await actions.changePasswordRecovery(tokenPassword, data.get("email"))
        if (resp>=400){
            return 
        }
        console.log("Clave cambiada")
    }

    
    return (
        <div className="container-xl px-4" style={{paddingTop:"3rem", marginBottom: "25rem"}}>
            <h1 className="main-title text-center pt-5 pb-0 mb-0">Bienvenido a tu Perfil</h1>
            {/* Account page navigation */}
            <nav className="nav nav-borders">
                <Link to="/profile">
                    <button className="nav-link ms-0" target="__blank">Perfil</button>
                </Link>
                <Link to="/billing">
                    <button className="nav-link" target="__blank">Pagos</button>
                </Link>
                <Link to="/security">
                    <button className="nav-link active" target="__blank">Seguridad</button>
                </Link>
                <Link to="/notifications">
                    <button className="nav-link" target="__blank">Notificaciones</button>
                </Link>
            </nav>
            <hr className="mt-0 mb-4"></hr>
            <div className="row">
                <div className="col-lg-8">
                    {/* Change password card */}
                    <div className="card mb-4 gradient-custom-contrast">
                        <div className="card-header">Cambia tu contraseña</div>
                        <div className="card-body">
                            <form onSubmit = {submitForm}>
                                {/* Form Group (current password) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="currentPassword">Contraseña actual</label>
                                    <input className="form-control" id="password" name="password" type="password" placeholder="Esribe Tu Contraseña actual"></input>
                                </div>
                                {/* Form Group (new password) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="newPassword">Nueva Contraseña</label>
                                    <input className="form-control" id="passwordConfirm" type="password" placeholder="Escribe Tu Nueva Contraseña"></input>
                                </div>
                                {/* Form Group (confirm password) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="confirmPassword">Confirma tu Nueva Contraseña</label>
                                    <input className="form-control" id="passwordConfirm2" type="password" placeholder="Confirma tu Nueva Contraseña"></input>
                                </div>
                                <button className="btn btn-outline-success px-4" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} type="submit">Actualizar</button>
                            </form>
                        </div>
                    </div>
                    {/* Security preferences card */}
                    <div className="card mb-4 gradient-custom-contrast">
                        <div className="card-header">Preferencias de Seguridad</div>
                        <div className="card-body">
                            {/* Data sharing options */}
                            <h5 className="mb-1">Preferencias de datos</h5>
                            <p className="small text-muted">Si compartes tus datos con nuestros desarrolladores, podremos revisar y mantener este sitio basados en los errores que encuentres. Puedes encontrar más detalles en la parte inferior de esta página!</p>
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" id="radioUsage1" type="radio" name="radioUsage" ></input>
                                    <label className="form-check-label" htmlFor="radioUsage1">Si, quiero compartir mis datos!</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="radioUsage2" type="radio" name="radioUsage"></input>
                                    <label className="form-check-label" htmlFor="radioUsage2">No, prefiero mantener al minimo los datos que entrego a los desarrolladores</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    {/* Two factor authentication card */}
                    <div className="card mb-4 gradient-custom-contrast">
                        <div className="card-header">Autenticación Multifactor</div>
                        <div className="card-body">
                            <p>Agrega una capa de seguridad a tu cuenta, para reducir las probabilidades del robo de tu información, te ofrecemos usar tu correo como método alternativo de confirmación, solo debes escribirlo a continuación y confirmar tu decisión.</p>
                            <form>
                                <div className="form-check">
                                    <input className="form-check-input" id="twoFactorOn" type="radio" name="twoFactor" ></input>
                                    <label className="form-check-label" htmlFor="twoFactorOn">On</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" id="twoFactorOff" type="radio" name="twoFactor"></input>
                                    <label className="form-check-label" htmlFor="twoFactorOff">Off</label>
                                </div>
                                <div className="mt-3">
                                    <label className="small mb-1" htmlFor="twoFactorSMS">Tu dirección de correo</label>
                                    <input className="form-control" id="twoFactorSMS" type="tel" placeholder="Escribe tu Correo Electrónico"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* Delete account card */}
                    <div className="card mb-4 gradient-custom-contrast">
                        <div className="card-header text-danger">Borra tu Cuenta</div>
                        <div className="card-body text-danger">
                            <p>Borrar tu cuenta, es una acción permanente, por favor, asegúrate de descargar tus datos, y tener todos tus datos antes de borrarla, esta acción es permanente y por la seguridad de tu información es imposible recuperarla para nostros!!!</p>
                            <button className="btn btn-danger text-warning" type="button">Entiendo, descargué mis datos y quiero borrar mi cuenta</button>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal />
         </div>
    )
    };