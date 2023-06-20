import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoginModal from "../pages/loginModal";
import "../../styles/register.css";
import { Context } from "../store/appContext";
import SubscriptionCard from "./subscriptionCard";

export const SubscriptionGeneral = () => {
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
        <div className="container-fluid" style={{paddingTop:"5rem", marginBottom: "45rem"}}>
        <div>
        <section className="hero py-5 px-1 mx-auto rounded bg-transparent">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="display-4 main-title text-light" style={{fontSize:"4rem"}}>Bienvenido a nuestras suscripciones!</h1>
                    <p className="lead sub-title" style={{fontSize:"2rem"}}>Este método es el que más podrá darte tiempo para tu vida diaria, solo tienes que preocuparte al. pedir tu primera comida y en caso de que quieras cambiar algo!</p>
                    <img src="https://cdn.leonardo.ai/users/0cb1885c-7cd4-465b-b57c-1a8e89e17153/generations/65bfa462-9f62-40d5-82ff-f2738ca5999c/variations/Default_sticker_cartoon_cute_Rottweiler_white_background_Verme_1_65bfa462-9f62-40d5-82ff-f2738ca5999c_0.png" style={{width: "340px", height: "461px"}} alt="Comida a domicilio" 
                    className="img-fluid rounded"></img>
                </div>
                <div className="col-md-4">
                    <img src="https://cdn.leonardo.ai/users/cb85592f-c4f7-40bd-8a47-245caea0c533/generations/bfa73b4e-595f-48ed-9af4-53f9fa929deb/variations/Default_stylized_watercolor_digital_illustration_attractive_fa_3_bfa73b4e-595f-48ed-9af4-53f9fa929deb_0.png" alt="Comida a domicilio" 
                    className="img-fluid rounded"></img>
                </div>
            </div>
            </div>
        </section>

            <section>
                <div>
                    <div className="container-fluid text-center mt-5">
                        <div className="row row-cols-2 g-3">
                            <SubscriptionCard />
                        </div>  
                    </div>
                </div>
            </section>
        </div>
        <LoginModal />
    </div>
    )
};

export default SubscriptionGeneral

