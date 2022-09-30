import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";


function EmployeesList() {
    const user = JSON.parse(localStorage.getItem("user"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
    };

    const [responseData, setResponseData] = useState([]);

    const empList = () => {
        axios.get('http://localhost:8080/employee/employees', { headers: headers })
            .then(response => {
                setResponseData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                alert(error);
            });
    };


    useEffect(() => {

        empList();

    }, []);

    const empDelete = sap => {
        axios.delete('http://localhost:8080/employee/deleteEmployee/'+sap.id, { headers: headers })
            .then(response => {
                empList();
            })
            .catch(error => {
                alert(error);
            })
    };

    return (
        <div>
            <h2 className="bg-dark text-light p-3 text-center">Employees List</h2>
            <div class="container">

                <br></br>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Pin Code</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            responseData.map(
                                val => <tr key="{val.id}">
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.mobile}</td>
                                    <td>{val.street}</td>
                                    <td>{val.city}</td>
                                    <td>{val.state}</td>
                                    <td>{val.pincode}</td>
                                    <td><Link to="/updateemployee" state={val} class="btn btn-primary" >Update</Link> </td>
    
                                    <td><button type="button" class="btn btn-danger" id={val.id} value={val.id} onClick={() => empDelete(val)} >Delete</button> </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default EmployeesList;