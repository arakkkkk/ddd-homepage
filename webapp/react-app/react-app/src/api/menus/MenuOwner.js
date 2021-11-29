import React, { useState, useEffect } from "react";
import axios from "axios";
// import HeadImage from "./layouts/HeadImage";
// import Footer from "./layouts/Footer";

export const MenuOwner = () => {
    const [Menus, setMenus] = useState([]);
    const [Services, setServices] = useState([]);
    const [CreateButton, setCreateButton] = useState("");

    useEffect(() => {
        axios.get("/api/services/list/all").then((results) => {
            const data = results.data;
            setServices(data);
        });
    }, []);

    const ShowMenus = (service_id) => {
        axios.get("/api/menus/list/" + service_id).then((results) => {
            const data = results.data;
            console.log(data);
            setCreateButton(
                <button type="button" class="btn btn-primary" onClick={() => create_page(service_id)}>
                    新規登録
                </button>
            );
            setMenus(data);
        });
    };

    const SelectChanged = (e, elem) => {
        ShowMenus(e.target.value);
    };

    const create_page = (service_id) => {
        window.location.href = "/owner/" + String(service_id) + "/menu/create";
    };
    const edit_page = (menu_id) => {
        window.location.href = "/owner/menu/edit/" + String(menu_id);
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <div class="container">
                <div class="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <select
                        class="form-select mb-3"
                        aria-label="Default select example"
                        onChange={(e) => SelectChanged(e, this)}
                    >
                        <option selected>サービスを選択</option>
                        {Services.map((service, index) => (
                            <option value={service.ID} key={service.ID}>
                                {service.Title}
                            </option>
                        ))}
                    </select>
                    <ul>
                        {Menus.map((menu, index) => (
                            <li key={index}>
                                <a onClick={() => edit_page(menu.ID)} class="pointer">
                                    {menu.Title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {CreateButton}
                </div>
            </div>
        </div>
    );
};
export default MenuOwner;
