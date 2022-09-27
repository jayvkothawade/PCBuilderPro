import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import qs from 'qs';
import jwt_decode from "jwt-decode";

function LoginForm() {

    let formRef = useRef();
    let navigate = useNavigate();
    let [isError, setIsError] = useState(false);
    const [inputs, setInputs] = useState({});

    const handleChange = evnt => {
        let paramName = evnt.target.name;
        let paramValue = evnt.target.value;

        setInputs(
            values => ({ ...values, [paramName]: paramValue })
        );
    };

    const logout = () => {
        localStorage.removeItem("user");
    };

    const handleSubmit = evnt => {
        evnt.preventDefault();
        evnt.stopPropagation();

        formRef.current.classList.add("was-validated");
        if (!formRef.current.checkValidity()) {
            return;
        }

        axios.post('http://localhost:8080/login', qs.stringify(inputs))
            .then(response => {
                alert(JSON.stringify(response.data));
                // var decoded = jwt_decode(response.data.access_token);
                // const role = decoded.roles[0];   // role = admin 
                // console.log(role);
                // console.log(decoded.sub);
                if (response.data.access_token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    var decoded = jwt_decode(localStorage.getItem("user"));
                    const role = decoded.roles[0];   // role = admin 
                    console.log(role);
                    console.log(decoded.sub);
                }
            }).catch(error => {
                console.error(error);
                setIsError(true);

                setTimeout(() => setIsError(false), 2500);
            });
    };

    // const [userName, setUser] = useState(0);
    // const getUserName = () => {
    //     axios.get('http://localhost:8080/api/userName', d.sub)
    //         .then(response => {
    //             setUser(response.data);
    //         })
    //         .catch(error => {
    //             alert(error);
    //         });
    // };

    // const getCurrentUser = () => {
    //     var decoded = jwt_decode(localStorage.getItem("user"));
    //     const roleName = decoded.roles[0];   // role = admin 
    //     // console.log(role);
    //     // console.log(decoded.sub);

    //     const user = {
    //         name: userName,
    //         role: roleName
    //     };

    //     return user;
    // };

    return <div>
        <div>
            <h2 className="bg-dark text-light text-center p-3">Login</h2>
            <br></br>
            <br></br>
            <div className="container w-25">
                {/* <form action="" onSubmit={handleSubmit} > */}
                <form ref={formRef} className="needs-validation " noValidate>
                    <div class="mb-3">
                        {/* <label for="email" class="form-label">Email:  </label> */}
                        <input className="form-control" type="email" name="email" placeholder="Enter email" value={inputs.email} onChange={handleChange} required />
                        <div className="invalid-feedback">email is required</div>
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="password" class="form-label">Password:  </label> */}
                        <input className="form-control" type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} required />
                        <div className="invalid-feedback">Password is required</div>
                    </div>
                    <br></br>
                    <input
                        type="button"
                        value="Login"
                        className="btn btn-primary w-25"
                        onClick={handleSubmit}
                    />
                    {/* <button type="submit" class="btn btn-primary" >Submit</button> */}

                    {isError && (
                        <div className="alert alert-danger mt-4">
                            Invalid Credentials or Network Error!
                        </div>
                    )}
                </form>
            </div>
        </div>
    </div>;
};
export default LoginForm;