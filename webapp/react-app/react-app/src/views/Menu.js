import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import axios from "axios";
import HeadImage from "./layouts/HeadImage";
import Footer from "./layouts/Footer";

export const Menu = () => {
    const { service_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [Menu, setMenu] = useState([]);
    const [Service, setService] = useState([]);

    useEffect(() => {
        axios.get("/api/menus/list/" + service_id).then((results) => {
            const data = results.data;
            for (let d of data) {
                d.Img = ApiUrl + "/api/image/" + d.Img;
            }
            setMenu(data);
        });
        axios.get("/api/services/get/" + service_id).then((results) => {
            const data = results.data;
            setService(data);
        });
    }, [ApiUrl]);

    return (
        <div>
            <HeadImage />
            <div class="container">
                <div class="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <h2>
                        <span>{Service.Title}</span>
                    </h2>
                    <div class="row">
                        {Menu.map((menu, index) => (
                            <div class="col-sm-4 mt-4" key={index}>
                                <div class="card">
                                    <div class="card-body">
                                        <img
                                            src={menu.Img}
                                            class="img-fluid"
                                            alt="image"
                                            style={{ width: "100%", padding: 0, margin: 0 }}
                                        />
                                        <h3>{menu.Title}</h3>
                                        <p>{menu.Comment}</p>
                                        <p class="price">
                                            <i class="bi bi-currency-yen" style={{ fontSize: "22px" }}></i>
                                            {menu.Price}（税抜）
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Menu;
