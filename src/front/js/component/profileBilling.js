import React from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/profile.css";

export const ProfileBilling = () => {
    return (
        <div className="container-xl px-4" style={{paddingTop:"3rem", marginBottom: "25rem"}}>
            <h1 className="main-title text-center pt-5 pb-0 mb-0">Bienvenido a tu Perfil</h1>
            {/* Account page navigation */}
            <nav className="nav nav-borders">
                <Link to="/profile">
                    <button className="nav-link ms-0" target="__blank">Perfil</button>
                </Link>
                <Link to="/billing">
                    <button className="nav-link active" target="__blank">Pagos</button>
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
                <div className="col-lg-4 mb-1">
                    {/* <Billing card 1 */}
                    <div className="card h-50 border-start-lg border-start-primary gradient-custom-contrast">
                        <div className="card-body">
                            <div className="small text-muted">Pago actual</div>
                            <div className="h3">$20,000</div>
                            <a className="text-arrow-icon small" href="#!">
                                Administra tus suscripciones
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-1">
                    {/* Billing card 2 */}
                    <div className="card h-50 border-start-lg border-start-secondary gradient-custom-contrast">
                        <div className="card-body">
                            <div className="small text-muted">Siguiente pago</div>
                            <div className="h3">Julio 15</div>
                            <a className="text-arrow-icon small text-secondary" href="#!">
                                Historial de pago
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-1">
                    {/* Billing card 3 */}
                    <div className="card h-50 border-start-lg border-start-success gradient-custom-contrast">
                        <div className="card-body">
                            <div className="small text-muted">Suscripcion actual</div>
                            <div className="h3 d-flex align-items-center">Básica - diaria</div>
                            <a className="text-arrow-icon small text-success" href="#!">
                                Cambia tu plan
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Payment methods card */}
            <div className="card card-header-actions mb-4 gradient-custom-contrast">
                <div className="card-header">
                    Métodos de pago
                    <button className="btn btn-sm btn-outline-primary px-4 ms-5" type="button" style={{borderRadius:"33% 67% 32% 68% / 90% 9% 91% 10% "}}>Agrega un Método de Pago</button>
                </div>
                <div className="card-body px-0">
                    {/* Payment method 1 */}
                    <div className="d-flex align-items-center justify-content-between px-4">
                        <div className="d-flex align-items-center">
                            <i className="fab fa-cc-visa fa-2x cc-color-visa"></i>
                            <div className="ms-4">
                                <div className="small">Visa terminada en 1234</div>
                                <div className="text-xs text-muted">Expira el 04/2024</div>
                            </div>
                        </div>
                        <div className="ms-4 small">
                            <div className="badge bg-light text-dark me-3">predeterminado</div>
                            <a href="#!">Editar</a>
                        </div>
                    </div>
                    <hr></hr>
                    {/* Payment method 2 */}
                    <div className="d-flex align-items-center justify-content-between px-4">
                        <div className="d-flex align-items-center">
                            <i className="fab fa-cc-mastercard fa-2x cc-color-mastercard"></i>
                            <div className="ms-4">
                                <div className="small">Mastercard terminada en 5678</div>
                                <div className="text-xs text-muted">Expira el 05/2022</div>
                            </div>
                        </div>
                        <div className="ms-4 small">
                            <a className="text-muted me-3" href="#!">Make Default</a>
                            <a href="#!">Edit</a>
                        </div>
                    </div>
                    <hr></hr>
                    {/* Payment method 3 */}
                    <div className="d-flex align-items-center justify-content-between px-4">
                        <div className="d-flex align-items-center">
                            <i className="fab fa-cc-amex fa-2x cc-color-amex"></i>
                            <div className="ms-4">
                                <div className="small">American Express terminada en 9012</div>
                                <div className="text-xs text-muted">Expires 01/2026</div>
                            </div>
                        </div>
                        <div className="ms-4 small">
                            <a className="text-muted me-3" href="#!">configurar como Predeterminado</a>
                            <a href="#!">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Billing history card */}
            <div className="card mb-4 gradient-custom-contrast">
                <div className="card-header">Historial de Transacciones</div>
                <div className="card-body p-0">
                    {/* Billing history table */}
                    <div className="table-responsive table-billing-history">
                        <table className="table mb-0">
                            <thead>
                                <tr>
                                    <th className="border-gray-200" scope="col">ID de la transacción</th>
                                    <th className="border-gray-200" scope="col">Fecha</th>
                                    <th className="border-gray-200" scope="col">Cantidad</th>
                                    <th className="border-gray-200" scope="col">Estado</th>
                                    <th className="border-gray-200" scope="col">Reembolso</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#39201</td>
                                    <td>15/06/2021</td>
                                    <td>30,000$</td>
                                    <td><span className="badge bg-light text-dark">Pendiente</span></td>
                                    <td><button className="btn badge bg-danger text-warning">Pedir Reembolso</button></td>
                                </tr>
                                <tr>
                                    <td>#38594</td>
                                    <td>05/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-success">Paid</span></td>
                                    <td><button className="btn badge bg-danger text-warning">Pedir Reembolso</button></td>
                                </tr>
                                <tr>
                                    <td>#38223</td>
                                    <td>04/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-success">Paid</span></td>
                                    <td><button className="btn badge bg-danger text-warning">Pedir Reembolso</button></td>
                                </tr>
                                <tr>
                                    <td>#38125</td>
                                    <td>03/15/2021</td>
                                    <td>$29.99</td>
                                    <td><span className="badge bg-success">Paid</span></td>
                                    <td><button className="btn badge bg-danger text-warning">Pedir Reembolso</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <LoginModal />
        </div>
    )
};
export default ProfileBilling