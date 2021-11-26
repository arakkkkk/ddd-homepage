import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import { LoginCheck } from "api/Owners";
import axios from "axios";

export const Navbar = () => {
    const [ServicesGrouped, setServicesGrouped] = useState([]);
    const [ServicesUngrouped, setServicesUngrouped] = useState([]);
    const [AdminMenu, setAdminMenu] = useState([]);

    useEffect(() => {
        axios.get("/api/services/list/grouped").then((results) => {
            const data = results.data;
            setServicesGrouped(data);
        });
        axios.get("/api/services/list/ungrouped").then((results) => {
            const data = results.data;
            setServicesUngrouped(data);
        });
        LoginCheck().then((res) => {
            if (res.data.state) {
                setAdminMenu(
                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: "#FFFFFF" }}
                        >
                            管理者メニュー
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <li>
                                <a class="dropdown-item" href="/owner/service">
                                    サービスの追加
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="/owner/menu">
                                    メニューの追加
                                </a>
                            </li>
                        </ul>
                    </li>
                );
            }
        });
    }, []);

    const menu_page = (service_id) => {
        window.location.href = "/home/menu/" + String(service_id);
    };

    return (
        <nav class="navbar navbar-expand-sm fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/" style={{ color: "#FFFFFF" }}>
                    <img src="/images/title0.png" alt="フレンチ食堂ママン" style={{ width: "170px" }} />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/home" style={{ color: "#FFFFFF" }}>
                                ホーム
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                id="navbarDropdown1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: "#FFFFFF" }}
                            >
                                メニュー
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                                {ServicesGrouped.map((service, index) => (
                                    <li key={service.id}>
                                        <a class="dropdown-item" onClick={() => menu_page(service.ID)}>
                                            {service.Title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {ServicesUngrouped.map((service, index) => (
                            <li class="nav-item" key={service.ID}>
                                <a class="nav-link" onClick={() => menu_page(service.ID)} style={{ color: "#FFFFFF" }}>
                                    {service.Title}
                                </a>
                            </li>
                        ))}
                        {AdminMenu}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
