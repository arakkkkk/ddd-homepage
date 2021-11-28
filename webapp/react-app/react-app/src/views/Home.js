import React, { useState, useEffect, useContext } from "react";
import HeadImage from "views/layouts/HeadImage";
import Footer from "views/layouts/Footer";
import { GlobalContext } from "Global";
import axios from "axios";

const Home = () => {
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [ServicesGrouped, setServicesGrouped] = useState([]);
    const [ServicesUngrouped, setServicesUngrouped] = useState([]);

    useEffect(() => {
        axios.get("/api/services/list/grouped").then((results) => {
            const data = results.data;
            for (let d of data) {
                d.Img = ApiUrl + "/api/image/" + d.Img;
            }
            setServicesGrouped(data);
        });
        axios.get("/api/services/list/ungrouped").then((results) => {
            const data = results.data;
            for (let d of data) {
                d.Img = ApiUrl + "/api/image/" + d.Img;
            }
            setServicesUngrouped(data);
        });
    }, [ApiUrl]);

    const change_page = (index) => {
        window.location.href = "/home/menu/" + String(index);
    };

    return (
        <div>
            <HeadImage />
            <div class="container">
                <div class="card px-4 pt-2" style={{ backgroundColor: "#E8D6AE" }}>
                    <h2>メニュー</h2>
                    <div class="row">
                        {ServicesGrouped.map((service, index) => (
                            <div class="col-sm-6 pointer" onClick={() => change_page(service.ID)} key={service.ID}>
                                <div class="card mb-3">
                                    <div class="row no-gutters">
                                        <div class="col-4">
                                            <img
                                                class="img-fluid"
                                                src={service.Img}
                                                alt="Image not found."
                                                style={styles.list_img}
                                            />
                                        </div>
                                        <div class="col-8">
                                            <div class="card-body">
                                                <h4 class="card-title">{service.Title}</h4>
                                                <p class="card-text">
                                                    <small class="text-muted">{service.Comment}</small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2>イベント</h2>
                    <div class="row">
                        {ServicesUngrouped.map((service, index) => (
                            <div class="col-sm-6 pointer" onClick={() => change_page(service.ID)} key={service.ID}>
                                <div class="card mb-3">
                                    <div class="row no-gutters">
                                        <div class="col-4">
                                            <img
                                                class="img-fluid"
                                                src={service.Img}
                                                alt="image not found."
                                                style={styles.list_img}
                                            />
                                        </div>
                                        <div class="col-8">
                                            <div class="card-body">
                                                <h4 class="card-title">{service.Title}</h4>
                                                <p class="card-text">
                                                    <small class="text-muted">{service.Comment}</small>
                                                </p>
                                            </div>
                                        </div>
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
export default Home;

const styles = {
    list_img: {
        margin: "10px 20px"
    }
};
