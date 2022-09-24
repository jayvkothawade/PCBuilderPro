import React from 'react';
import { useState } from "react";
import axios from "axios";



function EmployeesAddForm() {
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

        axios.post('http://localhost:8080/add-employee', inputs)
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
                <h2>Emp Add Form</h2>
                <form action="" onSubmit={handleSubmit} >
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label"></label>
                        <input type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label"></label>
                        <input type="text" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label"></label>
                        <input type="text" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="mobile" class="form-label"></label>
                        <input type="text" name="mobile" placeholder="Mobile" value={inputs.mobile} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="role" class="form-label"></label>
                        <input type="text" name="role" placeholder="Role" value={inputs.role} onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" >Add</button>
                </form>
            </div>
        

        </div >
    );
}

export default EmployeesAddForm;