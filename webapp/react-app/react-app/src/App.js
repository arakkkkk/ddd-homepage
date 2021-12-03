import React, { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalContext } from "Global";

import "static/css/index.css";

import Navbar from "views/layouts/Navbar";
import Top from "views/Top";
// import { Test } from "views/Test";
import Home from "views/Home";
// import Menu from "views/Menu";
import Contents from "api/contents/Contents";
import ContentsUpdate from "api/contents/ContentsUpdate";
import { ComponentsCreate } from "api/components/ComponentsCreate";
// import ComponentsUpdate from "api/components/ComponentsUpdate";

import LoginForm from "views/LoginForm";
import OwnerHome from "views/OwnerHome";

import { ServiceOwner } from "api/services/ServiceOwner";
import { ServiceCreate } from "api/services/ServiceCreate";
import { ServiceUpdate } from "api/services/ServiceUpdate";

// import { MenuOwner } from "api/menus/MenuOwner";
// import { MenuCreate } from "api/menus/MenuCreate";
// import { MenuUpdate } from "api/menus/MenuUpdate";

// function App() {
export const App = () => {
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    useEffect(() => {
        setApiUrl("http://0.0.0.0");
    }, [ApiUrl]);
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Top />} />
                <Route exact path="/login" element={<LoginForm />} />
                <Route exact path="/owner" element={<OwnerHome />} />
                <Route exact path="/owner/service" element={<ServiceOwner />} />
                <Route exact path="/owner/service/create" element={<ServiceCreate />} />
                <Route exact path="/owner/service/edit/:service_id" element={<ServiceUpdate />} />
                {/*
                <Route exact path="/test" element={<Test />} />
                <Route exact path="/owner/menu" element={<MenuOwner />} />
                <Route exact path="/owner/:service_id/menu/create" element={<MenuCreate />} />
                <Route exact path="/owner/menu/edit/:menu_id" element={<MenuUpdate />} />
                <Route exact path="/home/menu/:service_id" element={<Menu />} />
                */}
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/home/service/:service_id/contents" element={<Contents />} />
                <Route exact path="/home/service/:service_id/contents/update" element={<ContentsUpdate />} />
                <Route
                    exact
                    path="/home/service/:service_id/components/:component_id/create"
                    element={<ComponentsCreate />}
                />
            </Routes>
        </BrowserRouter>
    );
};
export default App;
