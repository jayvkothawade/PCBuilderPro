import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";

function EmployeesUpdateForm() {
    const user = JSON.parse(localStorage.getItem("user"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
    };

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
       // console.log(JSON.stringify(inputs));
        console.log(inputs.name);
        axios.put('http://localhost:8080/employee/updateemployee/'+inputs.id, {"name":inputs.name ,"email": inputs.email, "mobile": inputs.mobile, "street": inputs.street, "city": inputs.city, "state": inputs.state, "pincode": inputs.pincode  }, {headers: headers})
            .then(response => {
                //console.log(response.data);
                alert(response.data);
                navigate('/employees');
            })
            .catch(error => {
                alert(error);
            });


    };

    return (
        // <div>
        //     <div class="container mt-3">
        //         <h2>Emp Update form</h2>
        //         <div>
        //         <form action="" onSubmit={handleSubmit} >
        //             <div class="mb-3 mt-3">
        //                 <input type="hidden" name="EmpID" value={inputs.EmpId} onChange={handleChange} />
        //             </div>
        //             <div class="mb-3 mt-3">
        //                 <label for="name" class="form-label">Name:</label>
        //                 <input type="text" name="name" value={inputs.name} onChange={handleChange} />
        //             </div>
        //             <div class="mb-3">
        //                 <label for="email" class="form-label">Email:</label>
        //                 <input type="text" name="email" value={inputs.email} onChange={handleChange} />
        //             </div>
        //             <div class="mb-3">
        //                 <label for="password" class="form-label">Password:</label>
        //                 <input type="text" name="password" value={inputs.password} onChange={handleChange} />
        //             </div>
        //             <div class="mb-3">
        //                 <label for="mobile" class="form-label">Mobile:</label>
        //                 <input type="text" name="mobile" value={inputs.mobile} onChange={handleChange} />
        //             </div>
        //             <div class="mb-3">
        //                 <label for="role" class="form-label">Role:</label>
        //                 <input type="text" name="role" value={inputs.role} onChange={handleChange} />
        //             </div>
        



        // </div>
        <div>
        <div>
            <h2 className="bg-dark text-light p-3 text-center">Update Employee Form</h2>
            <br></br>
            <div className="container m-auto w-25">
                <form action="" onSubmit={handleSubmit} >
                <div class="mb-3 mt-3 center">
                        {/* <label for="name" class="form-label">Name:  </label> */}
                        <input className="form-control" type="hidden" name="id" placeholder="EmpId" value={inputs.id} onChange={handleChange} />
                    </div>
                    <div class="mb-3 mt-3 center">
                        {/* <label for="name" class="form-label">Name:  </label> */}
                        <input className="form-control" type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="email" class="form-label">Email:  </label> */}
                        <input className="form-control" type="email" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <br></br>
                   
                    <div class="mb-3">
                        {/* <label for="mobile" class="form-label">Mobile:  </label> */}
                        <input className="form-control" type="text" name="mobile" placeholder="Mobile" value={inputs.mobile} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="street" placeholder="Street" value={inputs.street} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="city" placeholder="City" value={inputs.city} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="state" placeholder="State" value={inputs.state} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="pincode" placeholder="Pin code" value={inputs.pincode} onChange={handleChange} />
                    </div>





                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>

    </div>

    );
};

export default EmployeesUpdateForm;