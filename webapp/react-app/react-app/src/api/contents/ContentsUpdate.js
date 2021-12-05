import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "Global";
import axios from "axios";
import HeadImage from "views/layouts/HeadImage";
import Footer from "views/layouts/Footer";
import { Modal, Button } from "react-bootstrap";

// import * as Card from "views/components/Card";
import { CompRouting } from "views/components/CompRouting";

export const Contents = () => {
    const { service_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [Components, setComponents] = useState([]);
    const [Service, setService] = useState({ Components: [] });
    const [Services, setServices] = useState([]);
    const [ModalContent, setModalContent] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("/api/services/list/all").then((results) => {
            const data = results.data;
            setServices(data);
        });
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
    }, [ApiUrl, service_id, show]);

    const openModal = (component_id) => {
        handleShow();
        setModalContent(
            <div>
                <a
                    className="pointer"
                    onClick={() => navigate("/home/service/" + service_id + "/components/" + component_id + "/create")}
                >
                    右側に新しく追加
                </a>
                <br />
                <a
                    className="pointer"
                    onClick={() => {
                        var result = window.confirm("本当に消去しますか？");
                        if (result) {
                            axios
                                .post("/api/services/" + service_id + "/delete/component/" + component_id)
                                .then(function (response) {
                                    console.log(response.data);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                })
                                .finally(function () {
                                    handleClose();
                                });
                        }
                    }}
                >
                    要素を消去
                </a>
            </div>
        );
    };

    const changeSelectService = (e) => {
        var service_id = e.target.value;
        navigate("/home/service/" + service_id + "/contents/update");
    };

    return (
        <div>
            <HeadImage />
            <div className="container">
                <div className="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <div className="row">
                        <select
                            class="form-select mb-3"
                            aria-label="Default select example"
                            onChange={(e) => changeSelectService(e)}
                        >
                            <option selected>サービスを選択</option>
                            {Services.map((service, index) => (
                                <option value={service.ID} key={service.ID}>
                                    {service.Title}
                                </option>
                            ))}
                        </select>
                        <h2>{Service.Title}</h2>
                        <a
                            className="pointer"
                            onClick={() => navigate("/home/service/" + service_id + "/components/0/create")}
                        >
                            先頭に新しく追加
                        </a>
                        {Service.Components.map((component, index) => (
                            <div
                                className={"col-sm-" + component.Grid}
                                onClick={() => openModal(component.ID)}
                                style={{ whiteSpace: "pre-line", border: "4px solid", borderColor: "#031de2" }}
                            >
                                <CompRouting component={component} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>メニュー</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ModalContent}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Contents;
