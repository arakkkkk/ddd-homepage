import React, { useState, useEffect } from "react";
import axios from "axios";
// import HeadImage from "./layouts/HeadImage";
// import Footer from "./layouts/Footer";

export const ServiceOwner = () => {
    const [load, setLoad] = useState(0);
    const [Services, setServices] = useState([]);

    useEffect(() => {
        axios.get("/api/services/list/all").then((results) => {
            const data = results.data;
            setServices(data);
        });
    }, [load]);

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
                <div class="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <ul>
                        {Services.map((service, index) => (
                            <li key={index}>
                                <a onClick={() => edit_page(service.ID)} class="pointer">
                                    {service.Title}
                                </a>
                                <a
                                    style={{ marginLeft: "300px" }}
                                    onClick={() => {
                                        var result = window.confirm("本当に消去しますか？");
                                        if (result) {
                                            axios
                                                .post("/api/services/delete/" + service.ID)
                                                .then(function (response) {
                                                    console.log(response.data);
                                                })
                                                .catch(function (error) {
                                                    console.log(error);
                                                })
                                                .finally(function () {
                                                    setLoad(service.ID);
                                                });
                                        }
                                    }}
                                    class="pointer"
                                >
                                    消去
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button type="button" class="btn btn-primary" onClick={() => create_page()}>
                        新規登録
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ServiceOwner;
