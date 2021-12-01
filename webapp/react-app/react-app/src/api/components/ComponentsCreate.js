import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import { LoginCheck } from "api/Owners";
import axios from "axios";
import { CompRouting, CompDefinition } from "views/components/CompRouting";

export const ComponentsCreate = () => {
    const { service_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const [ComponentType, setComponentType] = useState([]);
    const [ComponentTypeID, setComponentTypeID] = useState([]);
    const [SelectedComponentType, setSelectedComponentType] = useState(false);
    const [SelectedComponentTypeID, setSelectedComponentTypeID] = useState(false);
    const [Menu, setMenu] = useState([]);

    const component = {
        ID: 1,
        titles: ["タイトル1", "タイトル2", "タイトル3"],
        comments: ["テキスト1", "テキスト2", "テキスト3"],
        images: [
            "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
            "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
            "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg"
        ],
        type: SelectedComponentType,
        type_id: SelectedComponentTypeID,
        grid: 12
    };

    useEffect(() => {
        LoginCheck().then((res) => {
            if (!res.data.state) {
                window.location.href = "/login";
            }
        });
        setComponentType(() => {
            var comp_types = [];
            for (let comp_type in CompDefinition) {
                comp_types.push(comp_type);
            }
            return comp_types;
        });
    }, [ApiUrl]);

    const ComponentFormSubmit = () => {
        var titles = [];
        for (var form_title of document.getElementsByClassName("form-title")) {
            titles.push({ jText: form_title.value });
        }
        var comments = [];
        for (var form_comment of document.getElementsByClassName("form-comment")) {
            titles.push({ Text: form_comment.value });
        }
        const data = {
            Titles: titles,
            Comments: comments,
            Images: [],
            // Images: document.getElementById("form_grid").files,
            Type: SelectedComponentType,
            TypeID: SelectedComponentTypeID,
            Grid: document.getElementById("form_grid").value
        };

        axios
            .post("/api/services/" + service_id + "/append/component", data)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                // alert(error);
            });
    };

    const selectComponentType = (e, elem) => {
        setSelectedComponentType(e.target.value);
        setSelectedComponentTypeID(false);
        setComponentTypeID(() => {
            var comp_type_ids = [];
            for (let comp_type_id in CompDefinition[e.target.value]) {
                comp_type_ids.push(comp_type_id);
            }
            return comp_type_ids;
        });
    };
    const selectComponentTypeID = (e, elem) => {
        setSelectedComponentTypeID(e.target.value);
    };

    const Form = () => {
        if (!SelectedComponentType || !SelectedComponentTypeID) {
            return "";
        }
        var form = [<h4>見本</h4>, <CompRouting component={component} />, <hr />];
        for (let i = 1; i <= CompDefinition[SelectedComponentType][SelectedComponentTypeID]["titles"]; i++) {
            form.push(
                <div className="mb-3">
                    <label for={"form_title" + i} className="form-label">
                        タイトル{i}：
                    </label>
                    <input type="text" className="form-control form-title" id={"form_title" + i} />
                </div>
            );
        }
        for (let i = 1; i <= CompDefinition[SelectedComponentType][SelectedComponentTypeID]["comments"]; i++) {
            form.push(
                <div className="mb-3">
                    <label for={"form_comments" + i} className="form-label">
                        テキスト{i}：
                    </label>
                    <input type="text" className="form-control form-commet" id={"form_comments" + i} />
                </div>
            );
        }
        for (let i = 1; i <= CompDefinition[SelectedComponentType][SelectedComponentTypeID]["images"]; i++) {
            form.push(
                <div className="mb-3">
                    <label className="form-label" for={"form_images" + i}>
                        画像{i}：
                    </label>
                    <input type="file" className="form-control form-image" id={"form_img" + 1} />
                </div>
            );
        }
        if (CompDefinition[SelectedComponentType][SelectedComponentTypeID]["grid"]) {
            form.push(
                <div className="mb-3">
                    <label for="form_grid" className="form-grid">
                        グリッド：
                    </label>
                    <input type="number" className="form-control" id="form_grid" />
                </div>
            );
        }
        return form;
    };

    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <div className="card px-4 pt-2" style={{ backgroundColor: "#E8D6AE" }}>
                <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    onChange={(e) => selectComponentType(e, this)}
                >
                    <option selected>要素の種類</option>
                    {ComponentType.map((comp_type, index) => (
                        <option value={comp_type} key={index}>
                            {comp_type}
                        </option>
                    ))}
                </select>

                <select
                    className="form-select mb-3"
                    aria-label="Default select example"
                    onChange={(e) => selectComponentTypeID(e, this)}
                >
                    <option selected>要素の選択</option>
                    {ComponentTypeID.map((comp_type_id, index) => (
                        <option value={comp_type_id} key={index}>
                            {comp_type_id}
                        </option>
                    ))}
                </select>

                <hr />

                <Form />

                <button type="button" className="btn btn-primary" onClick={ComponentFormSubmit}>
                    追加
                </button>
            </div>
        </div>
    );
};
