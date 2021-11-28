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
    axios
        .post(`/api/login`, owner)
        .then((res) => {
            window.location.href = "/owner";
        })
        .catch(function (error) {
            console.log(error.response.data);
            console.log(error.response.status);
            alert(error.response.headers);
        });
};
export default Login;

export const LoginCheck = () => {
    var url = `/api/logincheck`;
    return axios.get(url);
    // .then((res) => {
    // if(res.data.state) {
    //     console.log(res.data)
    // } else {
    //     window.location.href = "/login"
    // }
    // console.log(url)
    // return res.data
    // }).catch(function (error) {
    // console.log(error.response.data);
    // console.log(error.response.status);
    // alert(error.response.headers);
    // });
};
