import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";

function EmployeesUpdateForm() {
    const empState = useLocation();

    const navigate = useNavigate();

    const [inputs, setInputs] = useState(empState.state);

    const handleChange = evnt => {
        let paramName = evnt.target.name;
        let paramValue = evnt.target.value;

        setInputs(
            values => ({ ...values, [paramName]: paramValue })
        );
    };

    const handleSubmit = evnt => {
        evnt.preventDefault();
        // alert(JSON.stringify(inputs));

        axios.put('http://localhost:8080/employee/updateemployee/{id}', inputs, {headers: AuthHeader})
            .then(response => {
                alert(response.data);
                navigate('/employees');
            })
            .catch(error => {
                alert(error);
            });


    };

    return (
        <div>
            <div class="container mt-3">
                <h2>Emp Update form</h2>
                <div>
                <form action="" onSubmit={handleSubmit} >
                    <div class="mb-3 mt-3">
                        <input type="hidden" name="EmpID" value={inputs.EmpId} onChange={handleChange} />
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="name" class="form-label">Name:</label>
                        <input type="text" name="name" value={inputs.name} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email:</label>
                        <input type="text" name="email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password:</label>
                        <input type="text" name="password" value={inputs.password} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="mobile" class="form-label">Mobile:</label>
                        <input type="text" name="mobile" value={inputs.mobile} onChange={handleChange} />
                    </div>
                    <div class="mb-3">
                        <label for="role" class="form-label">Role:</label>
                        <input type="text" name="role" value={inputs.role} onChange={handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary" >Update</button>
                </form>
                </div>
                
            </div>



        </div>

    );
};

export default EmployeesUpdateForm;