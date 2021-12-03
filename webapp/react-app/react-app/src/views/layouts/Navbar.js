import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { useParams, userHistory } from "react-router-dom";
import { GlobalContext } from "Global";
import { LoginCheck } from "api/Owners";
import axios from "axios";

export const Navbar = () => {
    const [ServicesGrouped, setServicesGrouped] = useState([]);
    const [ServicesUngrouped, setServicesUngrouped] = useState([]);
    const [AdminMenu, setAdminMenu] = useState([]);
    const navigate = useNavigate();

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
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            id="navbarDropdown2"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ color: "#FFFFFF" }}
                        >
                            管理者メニュー
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                            <li>
                                <a class="dropdown-item pointer" onClick={() => navigate("/owner/service")}>
                                    サービスの追加
                                </a>
                            </li>
                            <li>
                                <a
                                    class="dropdown-item pointer"
                                    onClick={() => navigate("/home/service/0/contents/update")}
                                >
                                    サービスページの編集
                                </a>
                            </li>
                        </ul>
                    </li>
                );
            }
        });
    }, []);

    return (
        <nav class="navbar navbar-expand-sm fixed-top">
            <div class="container-fluid">
                <a
                    class="navbar-brand pointer"
                    onClick={() => navigate("/", { replace: true })}
                    style={{ color: "#FFFFFF" }}
                >
                    <img src="/images/title0.png" alt="フレンチ食堂ママン" style={{ width: "170px" }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a
                                class="nav-link active pointer"
                                aria-current="page"
                                onClick={() => navigate("/home")}
                                style={{ color: "#FFFFFF" }}
                            >
                                ホーム
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{ color: "#FFFFFF" }}
                            >
                                メニュー
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                                {ServicesGrouped.map((service, index) => (
                                    <li key={service.ID}>
                                        <a
                                            class="dropdown-item pointer"
                                            onClick={() => navigate("/home/service/" + service.ID + "/contents")}
                                        >
                                            {service.Title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        {ServicesUngrouped.map((service, index) => (
                            <li class="nav-item" key={service.ID}>
                                <a
                                    class="nav-link pointer"
                                    onClick={() => navigate("/home/service/" + service.ID + "/contents")}
                                    style={{ color: "#FFFFFF" }}
                                >
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
