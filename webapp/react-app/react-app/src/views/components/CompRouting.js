import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import axios from "axios";

import { Title } from "views/components/Title";
import { Card } from "views/components/Card";
import { Text } from "views/components/Text";
// import { RowSpace } from "views/components/RowSpace";
import { Image } from "views/components/Image";

export const CompRouting = (props) => {
    switch (props.component.type) {
        case "title":
            return (
                <div className={"col-sm-" + props.component.grid}>
                    <Title component={props.component} />
                    <button type="button" class="btn btn-primary">
                        Primary
                    </button>
                </div>
            );
            break;

        case "card":
            return (
                <div className={"col-sm-" + props.component.grid}>
                    <Card component={props.component} />
                </div>
            );
            break;

        case "text":
            return (
                <div className={"col-sm-" + props.component.grid}>
                    <Text component={props.component} />
                </div>
            );
            break;

        case "image":
            return (
                <div className={"col-sm-" + props.component.grid}>
                    <Image component={props.component} />
                </div>
            );
            break;

        case "rowspace":
            return <div className="row" style={{ height: "20px" }}></div>;
            break;

        default:
            return "";
    }
};
