import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "Global";
import axios from "axios";
import HeadImage from "views/layouts/HeadImage";
import Footer from "views/layouts/Footer";

// import * as Card from "views/components/Card";
import { CompRouting } from "views/components/CompRouting";

export const Contents = () => {
    const { service_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [Components, setComponents] = useState([]);
    const [Service, setService] = useState({ Components: [] });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/api/services/get/" + service_id).then((results) => {
            const data = results.data;
            if (data["Components"] == null) {
                data["Components"] = [];
            }
            for (let comp of data["Components"]) {
                comp["Image"] = ApiUrl + "/api/image/" + comp.Image;
            }
            console.log(data);
            setService(data);
        });
    }, [ApiUrl, service_id]);

    return (
        <div>
            <HeadImage />
            <div className="container">
                <div className="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <div className="row">
                        <h2>{Service.Title}</h2>
                        {Service.Components.map((component, index) => (
                            <div className={"col-sm-" + component.Grid} style={{ whiteSpace: "pre-line" }}>
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
