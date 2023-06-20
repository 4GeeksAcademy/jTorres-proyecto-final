
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
        <div className="container-fluid" style={{paddingTop:"5rem", marginBottom: "45rem"}}>
            <div>
            <section className="hero py-5 px-1 mx-auto rounded bg-transparent">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="display-4 main-title text-light" style={{fontSize:"4rem"}}>Bienvenido a nuestra tienda de pedidos!</h1>
                        <p className="lead sub-title" style={{fontSize:"2rem"}}>Es hora de pedir algo delicioso, para que llegue a la puerta de tu casa!</p>
                        <img src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/a16e3b53-4de7-4db2-b98a-ca05f45ac5a8/variations/Default_mojito_clipart_white_background_scattered_water_color_1_a16e3b53-4de7-4db2-b98a-ca05f45ac5a8_0.png" alt="Comida a domicilio" 
                        className="img-fluid rounded"></img>
                    </div>
                    <div className="col-md-4">
                        <img src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/0e758af7-6c82-469c-af4a-3378f2bb721f/variations/Default_medieval_restaurant_front_hanging_weapons_snowing_0_0e758af7-6c82-469c-af4a-3378f2bb721f_1.jpg" alt="Comida a domicilio" 
                        className="img-fluid rounded m-3"></img>
                    </div>
                </div>
                </div>
            </section>

                <section>
                    <div>
                    <div className="container-fluid text-center">
                        <div className="row row-cols-3 g-5">
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