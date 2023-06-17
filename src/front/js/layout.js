import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home.js";
import { Demo } from "./pages/demo.js";
import { Single } from "./pages/single.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import Register from "./component/register.js";
import Profile from "./component/profile.js";
import ProfileBilling from "./component/profileBilling.js";
import { ProfileSecurity } from "./component/profileSecurity.js";
import ProfileNotifications from "./component/profileNotifications.js";
import FoodGeneral from "./component/foodGeneral.js";
import RestaurantOverview from "./component/restaurantOverview.js";
import SubscriptionGeneral from "./component/subscriptionGeneral.js";
import { RecoverPassword } from "./pages/recoverPassword";
import Checkout from "./component/checkout";
import OrderTracking from "./component/orderTracking";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Register />} path="/register" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<ProfileBilling />} path="/billing" />
                        <Route element={<ProfileSecurity />} path="/security" />
                        <Route element={<ProfileNotifications />} path="/notifications" />
                        <Route element={<FoodGeneral />} path="/order-food" />
                        <Route element={<RestaurantOverview />} path="/order-food/:restaurantIndex" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<SubscriptionGeneral />} path="/subscription" />
                        <Route element={<RecoverPassword />} path="/recovery" />
                        <Route element={<Checkout />} path="/checkout" />
                        <Route element={<OrderTracking />} path="/order-tracking" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
