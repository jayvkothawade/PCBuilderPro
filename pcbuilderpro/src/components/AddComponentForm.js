import React from 'react';
import { useState } from "react";
import axios from "axios";
import AuthHeader from "./AuthHeader";
import { useNavigate } from 'react-router-dom';



function AddComponentForm() {
    const user = JSON.parse(localStorage.getItem("user"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
    };

    const [inputs, setInputs] = useState({});

    const navigate = useNavigate;

    const handleChange = evnt => {
        let paramName = evnt.target.name;
        let paramValue = evnt.target.value;

        setInputs(
            values => ({ ...values, [paramName]: paramValue })
        );
    };

    const handleSubmit = evnt => {
        evnt.preventDefault();
        alert(JSON.stringify(inputs));



        axios.post('http://localhost:8080/employee/addComponent', inputs, { headers: headers })
            .then(response => {
                alert(response.data);
                navigate("/components");
            })
            .catch(error => {
                alert(error);
                console.log(headers);
            });



    };


    return (
        <div>
            <div>
                <h2 className="bg-dark text-light p-3 text-center">Add Component Form</h2>
                <br></br>
                <div className="container m-auto w-25">
                    <form action="" onSubmit={handleSubmit} >
                        <div class="mb-3 mt-3 center">
                            {/* <label for="name" class="form-label">Name:  </label> */}
                            <input className="form-control" type="text" name="category" placeholder="Category" value={inputs.category} onChange={handleChange} />
                        </div>
                        <br></br>
                        <div class="mb-3">
                            {/* <label for="email" class="form-label">Email:  </label> */}
                            <input className="form-control" type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                        </div>
                        <br></br>
                        <div class="mb-3">
                            {/* <label for="password" class="form-label">Password:  </label> */}
                            <input className="form-control" type="text" name="link" placeholder="Link" value={inputs.link} onChange={handleChange} />
                        </div>
                        <br></br>
                        <div class="mb-3">
                            {/* <label for="mobile" class="form-label">Mobile:  </label> */}
                            <input className="form-control" type="text" name="description" placeholder="Description" value={inputs.description} onChange={handleChange} />
                        </div>
                        <br></br>
                        <div class="mb-3">
                            {/* <label for="address" class="form-label">Address:  </label> */}
                            <input className="form-control" type="number" name="price" placeholder="Price" value={inputs.price} onChange={handleChange} />
                        </div>
                        <br></br>
                        <div class="mb-3">
                            {/* <label for="address" class="form-label">Address:  </label> */}
                            <input className="form-control" type="number" name="quantity" placeholder="Quantity" value={inputs.quantity} onChange={handleChange} />
                        </div>
                        <br></br>





                        <button type="submit" class="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>

        </div >
    );
}

export default AddComponentForm;