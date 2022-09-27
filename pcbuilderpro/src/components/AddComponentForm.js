import React from 'react';
import { useState } from "react";
import axios from "axios";
import AuthHeader from "./AuthHeader";



function AddComponentForm() {
    const user = JSON.parse(localStorage.getItem("user"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
    };

    const [inputs, setInputs] = useState({});

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



        axios.post('http://localhost:8080/employee/addComponent', { inputs }, { headers: headers })
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                alert(error);
            });



    };


    return (
        <div>
            <div class="container mt-3">
                <h2>Add Component Form</h2>
                <form action="" onSubmit={handleSubmit} >
                    <div class="mb-3 mt-3">
                        <label for="compid" class="form-label"></label>
                        <input type="text" name="compid" placeholder="Component Id" value={inputs.compid} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="category" class="form-label"></label>
                        <input type="text" name="category" placeholder="Category" value={inputs.category} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="form-label"></label>
                        <input type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="link" class="form-label"></label>
                        <input type="text" name="link" placeholder="Link" value={inputs.link} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label"></label>
                        <input type="text" name="description" placeholder="Description" value={inputs.description} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="price" class="form-label"></label>
                        <input type="text" name="price" placeholder="Price" value={inputs.price} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="quantity" class="form-label"></label>
                        <input type="text" name="quantity" placeholder="Quantity" value={inputs.quantity} onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" >Add Component</button>
                </form>
            </div>


        </div >
    );
}

export default AddComponentForm;