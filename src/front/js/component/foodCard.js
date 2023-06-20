import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";
import FoodModal from "./foodModal";

export const FoodCard = () => {
    const { store, actions } = useContext(Context);
    const { restaurantIndex } = useParams();
    const index = parseInt(restaurantIndex);

    const restaurant = store.restaurantes[index];
    const name = restaurant ? restaurant.name : "";

    console.log(name);

    function imgError(e) {
        e.target.src = "https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

    return (
        <>
            {restaurant.plates.map((element, index) => (
                <div key={index} className="col">
                    <div className="card bg-transparent border border-primary">
                        <div onError={imgError} className="card-img-top mx-0 p-1 m-1 w-100" alt="{item.url}">
                            <img src={element.image} onError={imgError} className="card-img-top mx-0 p-1 pt-3 img-fluid figure-image" alt="restaurantImg"
                                onClick={() => actions.addFavorite(element.id, element.name)} style={{ backgroundSize: "cover" }}></img>
                            <div className="card-body">
                                <h1 className="w-100 card-body text-light d-flex justify-content-center">
                                    <strong>{element.plateName}</strong>
                                </h1>
                                <button className="btn btn-outline-info align-self-end">♡</button>
                                <Link to="/checkout">
                                    <button className="btn btn-outline-info ms-5 px-3 fw-bold" onClick={() => actions.addCart(element, index)}>Llévatelo!</button>
                                </Link>
                            </div>
                            <div className="p-5 mt-2 w-100">
                                <p className="text-light fs-3 description-text">{element.description}</p>
                            </div>
                            <div className="mx-auto d-flex justify-content-evenly w-100">
                                <button className="btn btn-outline-primary fw-bold rounded d-flex align-self-center justify-content-center w-100 px-5 py-3 mx-2 fs-7">
                                    Precio de: {element.price}mil Pesos
                                </button>
                                <button className="btn btn-outline-primary fw-bold rounded d-flex align-self-center justify-content-center w-100 px-5 py-3 mx-2"
                                    onClick={() => actions.addCart(element, index)}>
                                    Agregar al Carrito
                                </button>
                                <button type="button" className="btn btn btn-outline-primary fw-bold rounded w-100 px-5 py-3 mx-2" data-bs-toggle="modal" data-bs-target={`#foodModal-${index}`}>
                                    Detalles del Plato
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )) || <h1 className="main-title gradient-custom">loading...</h1>}
            <FoodModal />
        </>
    )
};

export default FoodCard;