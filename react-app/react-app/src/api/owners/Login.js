import React, { Component } from "react";
import axios from "axios";

// export const ListService = () => {
//     axios.get(`/api/services/list`).then((res) => {
//         return res.data
//     });
// };

export const Login = (name, password) => {
    const owner = {
        name: name,
        password: password
    };
    axios.post(`/api/services/create`, owner).then((res) => {
        return res.data;
    });
};
