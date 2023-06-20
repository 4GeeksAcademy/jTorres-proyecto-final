import React, { useContext, useState, useEffect  } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/orderTracking.css";
import { Context } from "../store/appContext";

export const OrderTracking = () => {
    const {store, actions} = useContext(Context)

    function imgError(e) {
        e.target.src = "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

    return (
        <>
            <div className="container px-1 px-md-4 py-5 mx-auto">
                <div className="card gradient-custom-contrast">
                    <div className="row d-flex justify-content-between px-3 top">
                        <div className="d-flex">
                            <h5>ORDEN <span className="text-primary font-weight-bold">#01234567</span></h5>
                        </div>
                        <div className="d-flex flex-column text-sm-right">
                            <p className="mb-0">Llegara entre las 08:00 AM y las 10:00 AM</p>
                        </div>
                    </div>
                    {/* while progressing of order, just add a ternary in order to add active class */}
                    <div className="row d-flex justify-content-center">
                        <div className="col-12">
                        <ul id="progressbar" className="text-center">
                            <li className="active step0"></li>
                            <li className="step0"></li>
                            <li className="step0"></li>
                            <li className="step0"></li>
                        </ul>
                        </div>
                    </div>
                    <div className="row justify-content-between top mt-0 w-100">
                        <div className="col-3 d-flex icon-content">
                            <img className="icon" src="https://i.imgur.com/9nnc9Et.png"></img>
                            <div className="d-flex flex-column mt-0 ps-0 pe-3">
                                <p className="font-weight-bold">
                                    Tu orden<br></br>
                                    fue recibida
                                </p>
                            </div>
                        </div>
                        <div className="col-3 d-flex icon-content">
                            <img className="icon" src="https://i.imgur.com/u1AzR7w.png"></img>
                            <div className="d-flex flex-column">
                                <p className="font-weight-bold">
                                    Tu orden<br></br>
                                    Ha sido enviada
                                </p>
                            </div>
                        </div>
                        <div className="col-3 d-flex icon-content">
                            <img className="icon" src="https://i.imgur.com/TkPm63y.png"></img>
                            <div className="d-flex flex-column">
                                <p className="font-weight-bold">
                                    Tu orden<br></br>
                                    Está en camino</p>
                            </div>
                        </div>
                        <div className="col-3 d-flex icon-content">
                            <img className="icon" src="https://i.imgur.com/HdsziHP.png"></img>
                            <div className="d-flex flex-column">
                                <p className="font-weight-bold">
                                    Tu orden<br></br>
                                    Ha llegado!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card gradient-custom-contrast">
                    <div className="container m-3">
                        <h1 className="main-title font-weight-bold fs-4">Llamanos para lo que necesites:</h1>
                        <p className="sub-title fs-5">+00 000 0000 0000 </p>
                        <h1 className="sub-title fs-5">
                            Esto es lo que va en camino:
                        </h1>
                        {store.cart && store.cart.length > 0 && store.cart.map((item, index) => {
                        return (
                        <>
                            {/* colocar aca el item.name y el item.price de comida o suscripcion */}
                            <div className="row row-cols-2">
                                <div className="fs-4 sub-title">
                                    - {item.plateName} con un precio de {item.price}mil pesos
                                </div>
                                <img className="img-thumbnail icon" style={{ width: "10%", height: "10%" }}
                                    src={item.image}></img>
                            </div>
                            <div className="text-dark sub-title fs-4">
                                La suma de tus compras, tiene un valor de:<br></br>
                                {item.price} mil pesos colombianos
                            </div>
                        </>
                        )
                        }) || <h1 className="sub-title fs-1">Parece que aun no tienes items!.... :3</h1>}
                    </div>
                </div>
            </div>
        </>
    )
};

export default OrderTracking