import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";
import { elementType } from "prop-types";

export const FoodModal = () => {
    const {store, actions}= useContext(Context);
    const { restaurantIndex } = useParams();
    const index = parseInt(restaurantIndex); 

    const restaurant = store.restaurantes[index];
    const name = restaurant ? restaurant.name : "";

    console.log(name); 

    function imgError(e){
        e.target.src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

    return(
    <>   
        {restaurant.plates.map((element, index) =>(
        <div key={index} className="modal fade" id={`foodModal-${index}`} tabIndex="-1" aria-labelledby={`foodModalLabel-${element.name}`} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content bg-dark text-light">
                    <div className="modal-header">
                    <h1 className="w-100 card-body text-light d-flex justify-content-center">
                        <strong>{element.plateName}</strong>
                        <button className="btn btn-dark btn-outline-info align-self-end">♡</button>
                    </h1>
                    <div className="modal-body">
                        <img className="img-fluid" src={element.image}></img>
                    </div>
                    </div>
                        <div className="modal-body">
                            {element.description}
                        </div>
                        <div className="modal-body">
                           Tiene un costo de {element.price} Pesos Colombianos!
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
            
        </div>
        ))|| <h1 className="main-title gradient-custom">loading...</h1>}
    </>
    )
};

export default FoodModal;