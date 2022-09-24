import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function EmployeesList() {
    const [responseData, setResponseData] = useState([]);

    const empList = () => {
        axios.get('http://localhost:8080/employees')
            .then(response => {
                setResponseData(response.data);
            })
            .catch(error => {
                alert(error);
            });
    };


    useEffect(() => {

        empList();

    }, []);

    const carDelete = evnt => {
        axios.delete('' + evnt.target.value)
            .then(response => {
                empList();
            })
            .catch(error => {
                alert(error);
            })
    };

    return (
        <div>
            <div class="container mt-3">
                <h2>Employees List</h2>
                <br></br>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Mobile</th>
                            <th>Role</th>
                            <th>Update</th>
                            {/* <th>Image</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            responseData.map(
                                val => <tr key="{val.empId}">
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>{val.mobile}</td>
                                    <td>{val.role}</td>
                                    <td><Link to="/updateemployee" state={val} class="btn btn-primary" >Update</Link> </td>
                                    {/* <td><Link to="" state={val.userid} class="btn btn-primary" >
                                        <img src={"http://localhost:8080/images/" + val.image} width="70" height="70" alt="no image" ></img>
                                    </Link></td> */}
                                    <td><button type="button" class="btn btn-danger" id={val.EmpId} value={val.EmpId} onClick={carDelete} >Delete</button> </td>
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