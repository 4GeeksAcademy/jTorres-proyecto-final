import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Register from "../component/register";
import { Link } from "react-router-dom";
import LoginModal from "./loginModal";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const [iaResponse, setIaResponse] = useState("");
    const [userInput, setUserInput] = useState("");

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = () => {
        actions.fetchChatGPT(userInput, setIaResponse);
    };
    const { store, actions } = useContext(Context)
    const navigate = useNavigate()
    useEffect(() => {
        if (!!store.accessToken) navigate("/profile")
    }, [store.accessToken])


    async function submitForm(e) {
        e.preventDefault()
        let data = new FormData(e.target)
        let resp = await actions.userLogin(data.get("email"), data.get("password"))
        if (resp >= 400) {
            return
        }
        navigate("/profile")
        console.log("Login exitoso")
    }
    function imgError(e){
        e.target.src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/f3918add-a5b5-437e-9bed-186b25ef5636/DreamShaper_v5_3_An_AIpowered_machine_surrounded_by_a_vibr_1.jpg"
    }

    return (
        <div className="text-center mt-5 container-fluid" style={{ margintop: "8rem", marginBottom: "50rem", paddingTop: "4rem" }}>
            <h1 className="main-title my-auto align-middle text-break" id="tienda">GitLoot</h1>
            <section className="container-fluid" >
                <div className="container-fluid card bg-transparent shadow hero2">
                    <div className=" row row-cols-2 color-font-ai text-light mt-0 ">
                        <h1 className="sub-title mt-0 text-stroke-light blur text-stroke-dark text-break" style={{ fontSize: "2.5rem" }}>Descubre la comodidad de un servicio de suscripción de comida</h1>
                        <p className="hero-text fs-4 blur">Olvida las preocupaciones de la compra y la planificación de tus comidas diarias. Con nuestro servicio de suscripción de comida, recibirás opciones deliciosas y saludables directamente en tu puerta.</p>
                    </div>
                    <div className="row row-cols-2 ">
                        <Link to="/subscription">
                            <button className="store-ads p-4 px-5 mx-auto fw-bold blur text-dark"
                                style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10% ", marginTop: "8rem", fontSize: "2rem" }} >¡Suscríbete ahora!</button>
                        </Link>
                        <Link to="/order-food">
                            <button className="store-ads p-4 px-5 mx-auto fs-1 fw-bold mt-5 blur g-4 fs-5 text-stroke-light"
                                style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10% " }}>
                                ¡Pide Comida!
                            </button>
                        </Link>
                    </div>
                </div>
                {/* AI */}
                <div className="card bg-transparent border border-0 b shadow" id="ia-verduras" style={{ height: "60rem" }}>
                    <div className="card-body mt-5">
                        <h5 className="card-title fs-3 text-stroke-white blur color-font-ai">Esta es nuestra IA de las verduras!</h5>
                        <h5 className="card-title fs-3 text-stroke-white blur color-font-ai">Pidele que te aconseje de dietas semanales o incluso que puedes comer hoy</h5>
                        <p className="card-text fs-6 h-75 my-5 fs-3 text-stroke-light fw-bold text-danger overflow-auto blur" dangerouslySetInnerHTML={{ __html: iaResponse }}></p>
                    </div>
                    <div className="card-footer mt-5 mx-5 px-5 fs-5 w-100 rounded">
                        <div className="input-group d-flex align-self-end text-stroke-white-thin w-100" style={{ color: "white" }}>
                            <textarea className="bg-transparent border text-center text-light w-100 rounded text-break h-100" placeholder="Escribele algo a nuestra IA" value={userInput} onChange={handleUserInput}></textarea>
                        </div>
                        <button className="btn btn-outline-info mt-2 px-4 w-50 py-4" style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10% " }} onClick={handleSubmit}>Enviar</button>
                    </div>
                </div>
            </section>
            <section className="container-fluid">
                <section className="sub-section">
                    <Link to="/order-food">
                        <div className="vh-25 box c my-2 shadow">
                            <h2 className="sub-title pt-5 ">¡Pide lo que gustes, nosotros nos encargamos del resto!</h2>
                            <h2 className="sub-title">¡Directo a la puerta de tu casa!</h2>
                        </div>
                    </Link>
                </section>
            </section>
            {/* lo que te pierdes */}
            <section>
                <div className="container-fluid">
                    <h1 className="mb-4 sub-title my-5" style={{ fontSize: "5rem" }}>Imagina todas las aventuras que te estas perdiendo!</h1>
                    <div className="container-fluid text-center">
                        <div className="row row-cols-3 g-4">
                            {store.images && store.images.length > 0 && store.images.map((element, index) => {
                                return (
                                    <>
                                        <div key={index} className="col" style={{ width: "33.333%" }}>
                                            <img className="img-fluid" style={{ borderRadius: "3rem" }} src={element.picture} alt=""></img>
                                            <p className="text-light fs-4 fw-bold text-stroke-dark">{element.text}</p>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row">
                    <div className="col position-relative" style={{ width: "33.333%" }}>
                        <img className="img-fluid " style={{ borderRadius: "3rem" }} src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/e8191a3f-1099-4681-8a7b-b81280540950/DreamShaper_v6_Final_boss_fight_steampunk_two_legs_and_couldro_0.jpg" alt=""></img>
                        <p className="sub-title text-light fw-bold text-stroke-dark position-absolute top-50 start-50 translate-middle" style={{fontSize: "6rem"}}>Vence a tus Enemigos!</p>
                        <a className="position-absolute top-0 start-50 translate-middle-x" href="#tienda"><button className="btn btn-outline-info fs-2">Energia a tu antojo</button></a>
                    </div>
                    <div className="col position-relative " style={{ width: "33.333%" }}>
                        <img className="img-fluid" style={{ borderRadius: "3rem" }} src="https://cdn.leonardo.ai/users/25acf724-d0fb-44e7-8da5-a5932af5eac9/generations/ff4529c2-3ec9-46ac-86ff-077eafaa29b2/variations/Default_A_futuristic_cityscape_with_a_glowing_AI_core_in_the_0_ff4529c2-3ec9-46ac-86ff-077eafaa29b2_1.jpg" alt=""></img>
                        <p className="sub-title text-light fw-bold text-stroke-dark position-absolute top-50 start-50 translate-middle w-75" style={{fontSize: "5rem"}}>La IA de las verduras, se encarga de tus gustos</p>
                        <a className="position-absolute top-0 start-50 translate-middle-x" href="#ia-verduras"><button className="btn btn-outline-info fs-2">vuelve con la ia</button></a>
                    </div>
                    <div className="col position-relative" style={{ width: "33.333%" }}>
                        <img className="img-fluid" style={{ borderRadius: "3rem" }} src="https://cdn.leonardo.ai/users/1005cede-4056-4d26-9586-c81c097af4b9/generations/7b39455c-25f1-4cd9-a08a-cbe68d5052a4/variations/Default_A_portrait_of_a_dog_wearing_sunglasses_and_maximalist_0_7b39455c-25f1-4cd9-a08a-cbe68d5052a4_1.jpg" alt=""></img>
                        <p className=" sub-title text-light fw-bold text-stroke-dark position-absolute top-50 start-50 translate-middle"  style={{fontSize: "5rem"}}>Nosotros te lo llevamos a tu casa</p>
                        <a className="position-absolute top-0 start-50 translate-middle-x" href="#tienda"><button className="btn btn-outline-info fs-2">La comida llega a ti</button></a>
                    </div>
                </div>
            </section>

            <section className="sub-section mt-5">
                <Link to="/subscription">
                    <div className="vh-25 box c my-2 shadow">
                        <h2 className="sub-title pt-5 ">Si necesitas todo el tiempo que puedas obtener</h2>
                        <h2 className="sub-title">Prueba nuestra suscripción, asi te llega todo a la puerta de tu casa en tu horario y sin distracciones!</h2>
                    </div>
                </Link>
            </section>
            <section>
            <div className="row row-cols-3 g-5">
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
                                </div>
                            </div>
                        </div>
                        ))|| <h1 className="main-title gradient-custom">loading...</h1>}
                    </>   
                </div>
            </section>
            <LoginModal />
        </div>
    );
};















{/* <section className="container-fluid text-center" style={{height: "30rem"  }}>
    <div className="container-fluid text-center m-1 h-100 g-4 gap-3 p-3 fs-1 m-3 py-2">
    <div className="box d my-2 g-4 shadow">
        <Link to="/order-food">
            <button className="store-ads p-4 px-5 mx-auto fs-1 fw-bold mt-5 blur g-4 fs-5 text-stroke-light"
                style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10% "}}>
                Pedir Comida
            </button>
        </Link>
        </div>
        <div className="box e my-2 g-4 shadow">
            <section className="pt-0 mt-0">
                <p className="store-ads blur text-stroke-white fw-bold">
                    Nuestras tiendas tienen excelentes descuentos, le ponemos el alma para llevar los alimentos más frescos a tu hogar!
                </p>
            </section>
        </div>
    </div>
    <div className="row m-1 vh-25 box f my-2 shadow">
        <div className="col-12 col-sm-12 vh-25">
            <section className="sub-section">
                <h2 className="sub-title pt-4 fs-1 text-stroke-white fw-bold">Te respalda una inteligencia artificial, que te recomendará una excelente dieta semanal basada en nuestros platos disponibles!</h2>
            </section>
        </div>
    </div>
    <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 m-1 vh-25">
        <div className="col-12 col-md-6 vh-25 box g my-2 gap-2 bordershadow">
            <section className="subscription-ads blur text-stroke-white fw-bold">
                <p className="">Comidas super fancy, que preparamos para que lo puedas descongelar y disfrutar!</p>
            </section>
        </div>
        <div className="col-12 col-md-6 vh-25 box h my-2 gap-2 border shadow">
            <Link to="/subscription">
                <button
                    className="store-ads p-4 mx-auto fs-1 fw-bold mt-5 blur fs-5 text-stroke-dark shadow"
                    style={{ borderRadius: "33% 67% 32% 68% / 90% 9% 91% 10% " }}>
                    Suscripciones
                </button>
            </Link>
        </div>
        </div>
</section> */}