import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";
import FoodModal from "./foodModal";

export const SubscriptionCard = () => {
    const { store, actions } = useContext(Context);
    const restaurant = store.restaurantes;
    
    console.log(restaurant)


    function imgError(e) {
        e.target.src = "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

    return (
        <>
            {store.restaurantes?.map((element, index) => (
            <div key={index}className="col card bg-dark border border-primary">
                    <div onError={imgError} className="card-img-top mx-0 p-1 m-1 w-100" alt="{item.url}">
                        <img src={element.image} onError={imgError} className="card-img-top mx-0 p-1 pt-3 img-fluid figure-image" alt="restaurantImg" style={{ backgroundSize: "cover" }}></img>
                        <div className="card-bod my-0">
                            <h1 className="card-body text-light d-flex justify-content-center mt-3">
                                <strong>{element.subscription[0].SubscriptionName}<br></br>Precio: {element.subscription[0].price} Pesos</strong>
                            </h1>
                            <button className="btn btn-dark btn-outline-info ms-5 px-3">♡</button>
                            <Link to="/checkout">
                                <button className="btn btn-dark btn-outline-info ms-5 px-3 fw-bold">Llévatelo!</button>
                            </Link>
                        </div>
                        <div className="card-text p-5 mt-5 ">
                            <p className="card-footer text-light fs-3 description-text">{element.subscription[0].description}</p>
                        </div>
                        <div className="my-0 mx-auto d-flex justify-content-evenly mb-4">
                            <Link to="/checkout" className="w-100 px-4">
                                <button className="btn btn-outline-primary fw-bold rounded d-flex align-self-center justify-content-center w-100 px-5 py-3 mx-2 fs-7">
                                    {element.subscription[0].price} Pesos<br></br> compralo Ya!
                                </button>
                            </Link>
                            <button className="btn btn-outline-primary fw-bold rounded d-flex align-self-center justify-content-center w-100 px-5 py-4 mx-2">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
            </div>
            ))}
        </>
    )
};

export default SubscriptionCard;