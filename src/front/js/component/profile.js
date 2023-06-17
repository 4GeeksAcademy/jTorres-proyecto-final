import React, { useContext, useState, useEffect  } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/profile.css";
import { Context } from "../store/appContext";

export const Profile = () => {
    const {store, actions} = useContext(Context)
    console.log(store.user)

    function imgError(e) {
        e.target.src = "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

    return (
        <>
        {store.user && store.user.length>0 && store.user.map((item, index) => {
        return(
        <div key={index} className="container px-4" style={{paddingTop:"3rem", marginBottom: "25rem"}}>
            <h1 className="main-title text-center pt-5 pb-0 mb-0">Bienvenido a tu Perfil</h1>  
            {/* Account page navigation */}
            <nav className="nav nav-borders">
                <Link to="/profile">
                    <button className="nav-link ms-0 active" target="__blank">Perfil</button>
                </Link>
                <Link to="/billing">
                    <button className="nav-link" target="__blank">Pagos</button>
                </Link>
                <Link to="/security">
                    <button className="nav-link" target="__blank">Seguridad</button>
                </Link>
                <Link to="/notifications">
                    <button className="nav-link" target="__blank">Notificaciones</button>
                </Link>
            </nav>
            <hr className="mt-0 mb-4"></hr>
            <div className="row">
                <div className="col-xl-4">
                    {/* Profile picture card */}
                    <div className="card mb-4 mb-xl-0 gradient-custom-contrast">
                        <div className="card-header">Foto de perfil:</div>
                        <div className="card-body text-center">
                            {/* Profile picture image */}
                            <img onError={imgError} className="img-account-profile rounded-circle mb-2 img-thumbnail" src={item.image} alt=""></img>
                            {/* Profile picture help block */}
                            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            {/* Profile picture upload button */}
                            <button className="btn btn-outline-success px-4" type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Upload new image</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    {/* Account details card */}
                    <div className="card mb-4 gradient-custom-contrast">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form>
                                {/* (username) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputUsername">Nombre de usuario (como quieres que te llamemos?)</label>
                                    <input className="form-control" id="inputUsername" type="text" placeholder="Tu Usuario"
                                    // ****************** onChange={()=>{actions.updateUserProfile()}} EJEMPLO****************
                                    value={item.displayName}></input>
                                </div>
                                {/* Form Row */}
                                <div className="row gx-3 mb-3">
                                    {/* Form Group (first name) */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputFirstName">Nombres</label>
                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Tus Nombres" value={item.firstName}></input>
                                    </div>
                                    {/* Form Group (last name) */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLastName">Apellido</label>
                                        <input className="form-control" id="inputLastName" type="text" placeholder="Tus Apellidos" value={item.secondName}></input>
                                    </div>
                                </div>
                                {/* Form Row */}
                                <div className="row gx-3 mb-3">
                                    {/* (location) */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLocation">Tu dirección</label>
                                        <input className="form-control" id="inputLocation" type="text" placeholder="Tu dirección" value={item.address}></input>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputLocationDetails">Cuentanos algun otro detalle de tu direccion</label>
                                        <input className="form-control" id="inputLocationDetails" type="text" placeholder="Apto, casa, contunto, torre y otros detalles" value={item.addressDetail}></input>
                                    </div>
                                </div>
                                {/* (email address) */}
                                <div className="mb-3">
                                    <label className="small mb-1" htmlFor="inputEmailAddress">Tu correo</label>
                                    <input className="form-control" id="inputEmailAddress" type="email" placeholder="Tu Correo Electrónico" value={item.email}></input>
                                </div>
                                {/* Form Row */}
                                <div className="row gx-3 mb-3">
                                    {/* phone number */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                        <input className="form-control" id="inputPhone" type="tel" placeholder="Tu Número Celular" value={item.phone}></input>
                                    </div>
                                    {/* birthday */}
                                    <div className="col-md-6">
                                        <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                                        <input className="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Tu Fecha de Nacimiento"value={`${item.birthDay}/${item.birthMonth}/${item.birthYear}`}></input>
                                    </div>
                                </div>
                                {/* Save changes button */}
                                <button className="btn btn-outline-success px-4" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}} type="button">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal />
        </div>)    
        
        })|| <h1 className="main-title">Loading.... :3</h1>}
        </>
            )
        };
export default Profile;