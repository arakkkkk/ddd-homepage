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

const componentA = {
    ID: 1,
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
    ID: 2,
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
    const navigate = useNavigate();
    const [Components, setComponents] = useState([]);
    const [Service, setService] = useState({});
    const [ModalContent, setModalContent] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        axios.get("/api/services/get/" + service_id).then((results) => {
            const data = results.data;
            setService(data);
        });
        setComponents(content.components);
    }, [ApiUrl]);

    const openModal = (component_id) => {
        handleShow();
        setModalContent(
            <a
                className="pointer"
                onClick={() => navigate("/home/service/" + service_id + "/components/" + component_id + "/create")}
            >
                右側に新しく追加
            </a>
        );
    };

    return (
        <div>
            <HeadImage />
            <div className="container">
                <div className="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <div className="row">
                        <h2>{Service.Title}</h2>
                        <a
                            className="pointer"
                            onClick={() => navigate("/home/service/" + { service_id } + "/components/0/create")}
                        >
                            先頭に新しく追加
                        </a>
                        {Components.map((component, index) => (
                            <div className={"col-sm-" + component.grid} onClick={() => openModal(component.ID)}>
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
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default Contents;
