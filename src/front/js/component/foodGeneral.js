
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import RestaurantCard from "./restaurantCard";
import { Context } from "../store/appContext";
import FoodModal from "./foodModal";

export const FoodGeneral = () => {
    const {store, actions}= useContext(Context);
    


	return (
        <div className="container" style={{paddingTop:"5rem", marginBottom: "45rem"}}>
            <div>
            <section className="hero py-5 px-1 mx-auto rounded gradient-custom-contrast">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="display-4 main-title text-light" style={{fontSize:"4rem"}}>Bienvenido a nuestra tienda de pedidos!</h1>
                        <p className="lead sub-title" style={{fontSize:"2rem"}}>Es hora de pedir algo delicioso, para que llegue a la puerta de tu casa!</p>
                    </div>
                    <div className="col-md-4">
                        <img src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f8a84798-493e-462f-b861-9b3b85f1f5bb/DreamShaper_v6_small_fruit_basket_in_front_of_a_store_people_p_1.jpg" alt="Comida a domicilio" 
                        className="img-fluid rounded"></img>
                    </div>
                </div>
                </div>
            </section>

                <section>
                    <div>
                        <div className="container-fluid text-center mt-5">
                            <div className="row row-cols-2 g-5">
                                <RestaurantCard />
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
            <LoginModal />
        </div>
    )
};
    
    export default FoodGeneral;