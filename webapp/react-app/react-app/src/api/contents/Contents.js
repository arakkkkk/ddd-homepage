import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "Global";
import axios from "axios";
import HeadImage from "views/layouts/HeadImage";
import Footer from "views/layouts/Footer";

// import * as Card from "views/components/Card";
import { CompRouting } from "views/components/CompRouting";

const componentA = {
    titles: ["aaa", "bbb", "ccc"],
    comments: ["ddd", "eee", "fff"],
    images: [
        "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
        "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
        "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg"
    ],
    type: "card",
    type_id: "F",
    grid: 6
};
const componentB = {
    titles: ["aaa", "bbb", "ccc"],
    comments: ["ddd", "eee", "fff"],
    images: [
        "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
        "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
        "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg"
    ],
    type: "card",
    type_id: "F",
    turn: 2,
    grid: 6
};
const content = {
    service: "unit",
    components: [componentA, componentB]
};

export const Contents = () => {
    const { service_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [Components, setComponents] = useState([]);
    const [Service, setService] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/api/services/get/" + service_id).then((results) => {
            const data = results.data;
            setService(data);
        });
        setComponents(content.components);
    }, [ApiUrl]);

    return (
        <div>
            <HeadImage />
            <div className="container">
                <div className="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <div className="row">
                        <h2>{Service.Title}</h2>
                        {Components.map((component, index) => (
                            <div className={"col-sm-" + component.grid}>
                                <CompRouting component={component} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Contents;
