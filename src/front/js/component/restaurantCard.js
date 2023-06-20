import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";

export const RestaurantCard = () => {
    const {store, actions}= useContext(Context);
    function imgError(e){
        e.target.src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

	return (
        <>
            {store.restaurantes && store.restaurantes.length > 0 && store.restaurantes.map((item, index) =>(
            <div key={index} className="col">
                <div className="card bg-transparent">   
                        <div className="card-img-top mx-0 p-1" alt="{item.url}">
                            <img src={item.image} onError={imgError} className="card-img-top mx-0 p-1 pt-3" alt="restaurantImg"></img>
                            <Link to={`/order-food/${index}`}>
                                <div className="card-body">
                                    <h5 className="card-body sub-title fs-1"><strong>{item.name}</strong></h5>
                                </div>
                            </Link>
                            {/* <div className="footer card-body ms-auto px-auto">
                                {item.plates.map((element, index)=>{
                                    return(
                                    <Link key={index} to={`/order-food/${index}`}>
                                        <div className="row g-3 gap-3">
                                            <button className="btn btn-outline-primary col fw-bold rounded d-flex align-self-center justify-content-center">
                                                {element.plateName}
                                            </button>
                                            <button className="btn btn-outline-primary col fw-bold rounded d-flex align-self-center justify-content-center">{element.price} Pesos</button>
                                        </div>
                                    </Link>
                                    )
                                })}
                            </div> */}
                        </div>
                    </div>
                </div>
             ))|| <h1 className="main-title gradient-custom">loading...</h1>}
        </>   
    )
};

export default RestaurantCard;