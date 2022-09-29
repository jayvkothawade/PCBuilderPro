import jwt_decode from "jwt-decode";
import { useState } from "react";
import axios from "axios";

function GetCurrentUser() {
    const [userName, setUser] = useState("");
    var d = jwt_decode(localStorage.getItem("user"));

    axios.get('http://localhost:8080/api/userName/' + d.sub)
        .then(response => {
            setUser(response.data);
        })
        .catch(error => {
            alert(error);
        });
    return userName;
}

export default GetCurrentUser;