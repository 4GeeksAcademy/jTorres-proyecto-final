import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";

export const Register = () => {
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        birthday: "",
        gender: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        address_details: ""
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.id]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        actions.userRegister(formData);
    };




    return (
        <section className="vh-100 mb-5 pb-5">

            <h1 className="main-title text-center pt-5 pb-0 mb-0">Registrate en GitLoot!</h1>
            <div className="row justify-content-center align-items-center mt-5 h-25">
                <div className="col-12 col-lg-9 col-xl-7">
                    <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4 p-md-5">
                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Por favor, llena tus datos!</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="first_name"
                                                className="form-control form-control-lg"
                                                placeholder="Nombres"
                                                value={formData.first_name}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="first_name">
                                                Nombres
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="last_name"
                                                className="form-control form-control-lg"
                                                placeholder="Apellidos"
                                                value={formData.last_name}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="last_name">
                                                Apellidos
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 d-flex align-items-center">
                                        <div className="form-outline datepicker w-100">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="dd-mm-aaaa"
                                                id="birthday"
                                                value={formData.birthday}
                                                onChange={handleInputChange}
                                            />
                                            <label htmlFor="birthday" className="form-label">
                                                Fecha de Nacimiento
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <h6 className="mb-2 pb-1">Género: </h6>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="gender"
                                                value="femenino"
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label" htmlFor="gender">
                                                Femenino
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="gender"
                                                value="masculino"
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label" htmlFor="gender">
                                                Masculino
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="gender"
                                                value="otro"
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-check-label" htmlFor="gender">
                                                Otro
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">
                                        <div className="form-outline">
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control form-control-lg"
                                                placeholder="Tu correo"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="email">
                                                Correo
                                            </label>
                                        </div>
                                        <div className="form-outline">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control form-control-lg"
                                                placeholder="Elige Una contraseña"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="password">
                                                Contraseña
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">
                                        <div className="form-outline">
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="form-control form-control-lg"
                                                placeholder="Tu numero móvil"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="phone">
                                                Teléfono
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4 pb-2">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control form-control-lg"
                                                placeholder="Tu dirección"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="address">
                                                Dirección
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 pb-2">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="address_details"
                                                className="form-control form-control-lg"
                                                placeholder="Detalles de la dirección"
                                                value={formData.address_details}
                                                onChange={handleInputChange}
                                            />
                                            <label className="form-label" htmlFor="address_details">
                                                Detalles de la dirección
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <input
                                        className="btn btn-outline-success px-5 btn-lg"
                                        style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10%" }}
                                        type="submit"
                                        value="Listo!"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <LoginModal />
        </section>
    );
};

export default Register;