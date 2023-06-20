import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";
import FoodCard from "./foodCard";
import FoodModal from "./foodModal";

export const RestaurantOverview = () => {
    const {store, actions}= useContext(Context);

    const { restaurantIndex } = useParams();
    const index = parseInt(restaurantIndex); 

    const restaurant = store.restaurantes[index];
    const name = restaurant ? restaurant.name : ""; 

    console.log(name); 

    function imgError(e){
        e.target.src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

	return (
        <div className="container-fluid bg-transparent" style={{paddingTop:"5rem", width: "100%", height: "100vh", marginBottom: "400vh"}}>
            <div className="container-fluid">
            <section className="hero py-5 px-1 mx-auto rounded">
            {[restaurant].map((item, index) =>(
                <div key={index} className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="display-4 main-title text-light" style={{fontSize:"4rem"}}>{`Bienvenido a ${item.name}`}</h1>
                        <p className="lead sub-title fs-2" style={{fontSize:"2rem"}}>{item.description}</p>
                        <img src={item.image} 
                        className="img-fluid rounded"></img>
                    </div>
                    <div className="col-md-4">
                        <img src={item.image2} 
                        className="img-fluid rounded"></img>
                    </div>
                </div>
                </div>
                ))}
            </section>

                <section>
                    <div>
                        <div className="container-fluid text-center mt-5">
                            <div className="row row-cols-2 sm-row-cols-1 md-row-cols-2 lg-row-cols-3 xl-row-cols-3 g-5">
                                <FoodCard />
                            </div>  
                        </div>
                    </div>
                </section>
            </div>
            <LoginModal />
        </div>
    )
};

export default RestaurantOverview

