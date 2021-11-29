import React from "react";
import axios from "axios";

import { LoginCheck } from "api/Owners";

export const ServiceCreate = () => {
    LoginCheck().then((res) => {
        if (!res.data.state) {
            window.location.href = "/login";
        }
    });

    const ServiceFormSubmit = () => {
        const data = new FormData();
        data.append("title", document.getElementById("form_title").value);
        data.append("comment", document.getElementById("form_comment").value);
        data.append("show", document.getElementById("form_show").checked);
        data.append("grouped", document.getElementById("form_grouped").checked);
        data.append("file", document.getElementById("form_img").files[0]);
        data.append("turn", 0);

        axios
            .post("/api/services/create", data)
            .then(function (response) {
                window.location.href = "/owner/service";
            })
            .catch(function (error) {
                alert(error);
            });
    };

    return (
        <div class="container" style={{ marginTop: "100px" }}>
            <div class="card px-4 py-2" style={{ backgroundColor: "#E8D6AE" }}>
                <h1>サービスの追加</h1>
                <div class="mb-3">
                    <label for="form_title" class="form-label">
                        タイトル：
                    </label>
                    <input type="text" class="form-control" id="form_title" />
                </div>
                <div class="mb-3">
                    <label for="form_comment" class="form-label">
                        コメント：
                    </label>
                    <textarea class="form-control" id="form_comment" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="form_show" />
                    <label class="form-check-label" for="form_show">
                        表示
                    </label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="form_grouped" />
                    <label class="form-check-label" for="form_grouped">
                        グループ
                    </label>
                </div>
                <div class="mb-3 form-group">
                    <label class="form-label" for="form_img">
                        画像：
                    </label>
                    <input type="file" class="form-control" id="form_img" />
                </div>
                <button type="button" class="btn btn-primary" onClick={ServiceFormSubmit}>
                    追加
                </button>
            </div>
        </div>
    );
};
