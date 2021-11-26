import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import { LoginCheck } from "api/Owners";
import axios from "axios";

export const ServiceUpdate = () => {
    const { service_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [Service, setService] = useState([]);

    useEffect(() => {
        LoginCheck().then((res) => {
            if (!res.data.state) {
                window.location.href = "/login";
            }
        });
        axios
            .get("/api/services/get/" + service_id)
            .then(function (response) {
                var data = response.data;
                data.Img = ApiUrl + "/api/image/" + data.Img;
                setService(data);
            })
            .catch(function (error) {
                alert("エラー");
            });
    }, [ApiUrl]);

    const ServiceFormSubmit = () => {
        const data = new FormData();
        data.append("service_id", service_id);
        data.append("title", document.getElementById("form_title").value);
        data.append("comment", document.getElementById("form_comment").value);
        data.append("show", document.getElementById("form_show").checked);
        data.append("grouped", document.getElementById("form_grouped").checked);
        data.append("file", document.getElementById("form_img").files[0]);
        data.append("turn", document.getElementById("form_turn").value);
        axios
            .post("/api/services/update", data)
            .then(function (response) {
                window.location.href = "/owner/service";
            })
            .catch(function (error) {
                alert(error);
            });
    };

    return (
        <div class="container" style={{ marginTop: "100px" }}>
            <h1>サービスの変更</h1>
            <div class="mb-3">
                <label for="form_title" class="form-label">
                    タイトル：
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="form_title"
                    value={Service.Title}
                    onChange={(e) => setService({ ...Service, Title: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="form_comment" class="form-label">
                    コメント：
                </label>
                <textarea
                    class="form-control"
                    id="form_comment"
                    value={Service.Comment}
                    onChange={(e) => setService({ ...Service, Comment: e.target.value })}
                />
            </div>
            <div class="mb-3 form-check">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="form_show"
                    checked={Service.Show}
                    onChange={(e) => setService({ ...Service, Show: e.target.checked })}
                />
                <label class="form-check-label" for="form_show">
                    表示
                </label>
            </div>
            <div class="mb-3 form-grouped">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="form_grouped"
                    checked={Service.Grouped}
                    onChange={(e) => setService({ ...Service, Grouped: e.target.checked })}
                />
                <label class="form-check-label" for="form_star">
                    おすすめ
                </label>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <img class="img-fluid" src={Service.Img} alt="Image not found." />
                </div>
                <div class="col-sm-9">
                    <div class="mb-3 form-group">
                        <label class="form-label" for="form_img">
                            画像を変更：
                        </label>
                        <input type="file" class="form-control" id="form_img" />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="form_turn" class="form-turn">
                    番号：
                </label>
                <input
                    type="number"
                    class="form-control"
                    id="form_turn"
                    value={Service.Turn}
                    onChange={(e) => setService({ ...Service, Turn: e.target.value })}
                />
            </div>
            <button type="button" class="btn btn-primary" onClick={ServiceFormSubmit}>
                変更
            </button>
        </div>
    );
};
