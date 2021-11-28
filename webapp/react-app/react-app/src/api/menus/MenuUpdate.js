import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import { LoginCheck } from "api/Owners";
import axios from "axios";

export const MenuUpdate = () => {
    const { menu_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [Menu, setMenu] = useState([]);

    useEffect(() => {
        LoginCheck().then((res) => {
            if (!res.data.state) {
                window.location.href = "/login";
            }
        });
        axios
            .get("/api/menus/get/" + menu_id)
            .then(function (response) {
                var data = response.data;
                data.Img = ApiUrl + "/api/image/" + data.Img;
                setMenu(data);
            })
            .catch(function (error) {
                alert("エラー");
            });
    }, [ApiUrl]);

    const MenuFormSubmit = () => {
        var data = new FormData();
        data.append("menu_id", menu_id);
        data.append("title", document.getElementById("form_title").value);
        data.append("comment", document.getElementById("form_comment").value);
        data.append("price", document.getElementById("form_price").value);
        data.append("show", document.getElementById("form_show").checked);
        data.append("star", document.getElementById("form_star").checked);
        data.append("turn", document.getElementById("form_turn").value);
        if (document.getElementById("form_img").files[0] != undefined) {
            data.append("file", document.getElementById("form_img").files[0]);
        }

        axios
            .post("/api/menus/update", data)
            .then(function (response) {
                window.location.href = "/owner/menu";
            })
            .catch(function (error) {
                alert(error);
            });
    };

    return (
        <div class="container" style={{ marginTop: "100px" }}>
            <h1>メニューの変更</h1>
            <div class="mb-3">
                <label for="form_title" class="form-label">
                    タイトル：
                </label>
                <input
                    type="text"
                    class="form-control"
                    id="form_title"
                    value={Menu.Title}
                    onChange={(e) => setMenu({ ...Menu, Title: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="form_comment" class="form-label">
                    コメント：
                </label>
                <textarea
                    class="form-control"
                    id="form_comment"
                    value={Menu.Comment}
                    onChange={(e) => setMenu({ ...Menu, Comment: e.target.value })}
                />
            </div>
            <div class="mb-3">
                <label for="form_price" class="form-price">
                    値段(税抜)：
                </label>
                <input
                    type="number"
                    class="form-control"
                    id="form_price"
                    value={Menu.Price}
                    onChange={(e) => setMenu({ ...Menu, Price: e.target.value })}
                />
            </div>
            <div class="mb-3 form-check">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="form_show"
                    checked={Menu.Show}
                    onChange={(e) => setMenu({ ...Menu, Show: e.target.checked })}
                />
                <label class="form-check-label" for="form_show">
                    表示
                </label>
            </div>
            <div class="mb-3 form-star">
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="form_star"
                    checked={Menu.Star}
                    onChange={(e) => setMenu({ ...Menu, Star: e.target.checked })}
                />
                <label class="form-check-label" for="form_star">
                    おすすめ
                </label>
            </div>
            <div class="row">
                <div class="col-sm-3">
                    <img class="img-fluid" src={Menu.Img} alt="Image not found." />
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
                    value={Menu.Turn}
                    onChange={(e) => setMenu({ ...Menu, Turn: e.target.value })}
                />
            </div>
            <button type="button" class="btn btn-primary" onClick={MenuFormSubmit}>
                変更
            </button>
        </div>
    );
};
