import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { GlobalContext } from "Global";
import { LoginCheck } from "api/Owners";
import axios from "axios";
import { CompRouting, CompDefinition } from "views/components/CompRouting";

export const ComponentsCreate = () => {
    const { service_id } = useParams();
    const { component_id } = useParams();
    const { ApiUrl, setApiUrl } = useContext(GlobalContext);
    const navigate = useNavigate();
    const [ComponentType, setComponentType] = useState([]);
    const [ComponentTypeID, setComponentTypeID] = useState([]);
    const [SelectedComponentType, setSelectedComponentType] = useState(false);
    const [SelectedComponentTypeID, setSelectedComponentTypeID] = useState(false);

    const component = {
        ID: 1,
        Titles: [
            { Text: "タイトル1", Turn: 1 },
            { Text: "タイトル2", Turn: 2 },
            { Text: "タイトル3", Turn: 3 }
        ],
        Comments: [
            { Text: "テキスト1", Turn: 1 },
            { Text: "テキスト2", Turn: 2 },
            { Text: "テキスト3", Turn: 3 }
        ],
        comments: ["テキスト1", "テキスト2", "テキスト3"],
        Image: "http://0.0.0.0/api/image/2021-1201-010233_2021-1122-112133_maman_f12.jpg",
        Type: SelectedComponentType,
        TypeID: SelectedComponentTypeID,
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
        let i;
        i = 0;
        for (var form_title of document.getElementsByClassName("form-title")) {
            i += 1;
            titles.push({ Text: form_title.value, Turn: i });
        }
        var comments = [];
        i = 0;
        for (var form_comment of document.getElementsByClassName("form-comment")) {
            i += 1;
            comments.push({ Text: form_comment.value, Turn: i });
        }
        try {
            var Grid = Number(document.getElementById("form-grid").value)
        } catch {}
        const data = {
            Titles: titles,
            Comments: comments,
            Images: [],
            Type: SelectedComponentType,
            TypeID: SelectedComponentTypeID,
            Grid: Grid
        };
        const imgform = new FormData();
        try {
            imgform.append("file", document.getElementById("form_img1").files[0]);
        } catch {}

        axios
            .post("/api/services/" + service_id + "/append/component/" + component_id, data)
            .then(function (response) {
                console.log(response.data);
                axios
                    .post("/api/services/" + service_id + "/append/component/" + component_id + "/upimage", imgform)
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    .finally(function () {
                        navigate("/home/service/" + service_id + "/contents/update");
                    });
            })
            .catch(function (error) {
                console.log(error);
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
                    <label for={"form_comment" + i} className="form-label">
                        テキスト{i}：
                    </label>
                    <textarea className="form-control form-comment" id={"form_comment" + i} />
                </div>
            );
        }
        for (let i = 1; i <= CompDefinition[SelectedComponentType][SelectedComponentTypeID]["images"]; i++) {
            form.push(
                <div className="mb-3">
                    <label className="form-label" for={"form_images" + i}>
                        画像{i}：
                    </label>
                    <input type="file" className="form-control form-image" id={"form_img" + i} />
                </div>
            );
        }
        if (CompDefinition[SelectedComponentType][SelectedComponentTypeID]["grid"]) {
            form.push(
                <div className="mb-3">
                    <label for="form_grid" className="form-grid">
                        グリッド：
                    </label>
                    <input type="number" className="form-control" id="form-grid" />
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
