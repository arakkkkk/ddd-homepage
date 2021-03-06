import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "Global";
import axios from "axios";

import { Title } from "views/components/Title";
import { Card } from "views/components/Card";
import { Text } from "views/components/Text";
// import { RowSpace } from "views/components/RowSpace";
import { Image } from "views/components/Image";
import { RowSpace } from "./RowSpace";

export const CompRouting = (props) => {
    switch (props.component.Type) {
        case "title":
            return <Title component={props.component} />;
            break;

        case "card":
            return <Card component={props.component} />;
            break;

        case "text":
            return <Text component={props.component} />;
            break;

        case "image":
            return <Image component={props.component} />;
            break;

        case "rowspace":
            return <RowSpace component={props.component} />;
            break;

        default:
            return "Type not found.";
    }
};

export const CompDefinition = {
    title: {
        A: {
            titles: 1,
            comments: 0,
            images: 0,
            grid: true
        },
        B: {
            titles: 1,
            comments: 0,
            images: 0,
            grid: true
        },
        C: {
            titles: 1,
            comments: 0,
            images: 0,
            grid: true
        },
    },
    card: {
        A: {
            titles: 1,
            comments: 2,
            images: 1,
            grid: true
        },
        B: {
            titles: 1,
            comments: 1,
            images: 0,
            grid: true
        },
        C: {
            titles: 1,
            comments: 1,
            images: 0,
            grid: true
        },
        D: {
            titles: 1,
            comments: 1,
            images: 0,
            grid: true
        },
        E: {
            titles: 1,
            comments: 1,
            images: 0,
            grid: true
        },
        F: {
            titles: 1,
            comments: 2,
            images: 1,
            grid: true
        }
    },
    image: {
        A: {
            titles: 0,
            comments: 0,
            images: 1,
            grid: true
        }
    },
    text: {
        A: {
            titles: 0,
            comments: 1,
            images: 0,
            grid: true
        },
        B: {
            titles: 0,
            comments: 1,
            images: 0,
            grid: true
        },
        C: {
            titles: 0,
            comments: 1,
            images: 0,
            grid: true
        }
    },
    rowspace: {
        A: {
            titles: 0,
            comments: 0,
            images: 0,
            grid: false
        },
        B: {
            titles: 0,
            comments: 0,
            images: 0,
            grid: true
        }
    }
};
