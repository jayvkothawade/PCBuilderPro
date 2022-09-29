import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AuthHeader from "./AuthHeader";

function OrderUpdateForm() {
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
        //console.log(inputs.name);
        console.log(inputs.status);
        console.log(inputs.deliveredDate);
        console.log(inputs.orderId);
        axios.put('http://localhost:8080/employee/updateorder/'+inputs.orderId,{"deliveredDate": inputs.deliveredDate, "status": inputs.status}, {headers: headers})
            .then(response => {
                //console.log(response.data);
                alert(response.data);
                navigate('/adminorders');
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
            <h2 className="bg-dark text-light p-3 text-center">Update  Form</h2>
            <br></br>
            <div className="container m-auto w-25">
                <form action="" onSubmit={handleSubmit} >
                <div class="mb-3 mt-3 center">
                        {/* <label for="name" class="form-label">Name:  </label> */}
                        <input className="form-control" type="hidden" name="orderId" placeholder="Order ID" value={inputs.id} onChange={handleChange} />
                    </div>
                    <div class="mb-3 mt-3 center">
                        {/* <label for="name" class="form-label">Name:  </label> */}
                        <input className="form-control" type="text" name="deliveredDate" placeholder="Delivered Date" value={inputs.deliveredDate} onChange={handleChange} />
                    </div>
                    <br></br>
                    
                   
                    <div class="mb-3">
                        {/* <label for="mobile" class="form-label">Mobile:  </label> */}
                        <input className="form-control" type="text" name="status" placeholder="Status" value={inputs.status} onChange={handleChange} />
                    </div>
                   


                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            </div>
        </div>

    

    );
};

export default OrderUpdateForm;