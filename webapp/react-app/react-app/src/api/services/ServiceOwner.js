import React, { useState, useEffect } from "react";
import axios from "axios";
// import HeadImage from "./layouts/HeadImage";
// import Footer from "./layouts/Footer";

export const ServiceOwner = () => {
    const [Menus, setMenus] = useState([]);
    const [Services, setServices] = useState([]);
    const [CreateButton, setCreateButton] = useState("");

    useEffect(() => {
        axios.get("/api/services/list/all").then((results) => {
            const data = results.data;
            setServices(data);
        });
    }, []);

    const SelectChanged = (e, elem) => {};

    const create_page = () => {
        window.location.href = "/owner/service/create";
    };
    const edit_page = (service_id) => {
        window.location.href = "/owner/service/edit/" + String(service_id);
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <div class="container">
                <ul>
                    {Services.map((service, index) => (
                        <li key={index}>
                            <a onClick={() => edit_page(service.ID)} class="pointer">
                                {service.Title}
                            </a>
                        </li>
                    ))}
                </ul>
                <button type="button" class="btn btn-primary" onClick={() => create_page()}>
                    新規登録
                </button>
            </div>
        </div>
    );
};
export default ServiceOwner;
