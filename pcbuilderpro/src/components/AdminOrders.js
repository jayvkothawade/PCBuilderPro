import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

function AdminOrders() {
    const user = JSON.parse(localStorage.getItem("user"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
    };

    let d = jwt_decode(localStorage.getItem("user"));

    const [responseData, setResponseData] = useState([]);

    


    const GetOrder = () => {

        axios.get('http://localhost:8080/employee/orders',{headers: headers})
            .then(response => {
                setResponseData(response.data);
                
                //console.log(response.data);
            })
            .catch(error => {
                alert(error);
            });

        };

        useEffect(() => {

            GetOrder();
    
        }, []);

    return (
        <div>
            <div>
                <h2 className="bg-dark text-light p-3 text-center">Orders Recieved</h2>
                <div class="container">

                    <br></br>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Delivered Date</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Transaction ID</th>
                                <th>Total Bill</th>
                                <th> Payment status</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                responseData.map(
                                    val => <tr key="{val.id}">
                                        <td>{val.orderId}</td>
                                        <td>{val.deliveredDate}</td>
                                        <td>{val.orderDate}</td>
                                        <td>{val.status}</td>
                                        <td>{val.trasactionId}</td>
                                        <td>{val.bill.amount}</td>
                                        <td>{val.bill.status}</td>
                                     <td><Link to="/updateorder" state={val} class="btn btn-primary" >Update</Link> </td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                    

                    

                </div>

            </div>

        </div>
    );
}

export default AdminOrders;
