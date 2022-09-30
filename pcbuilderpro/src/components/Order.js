import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

function Order() {
    let d = jwt_decode(localStorage.getItem("user"));

    const [responseData, setResponseData] = useState([]);
   
     
    


    
    
    
    const GetOrder = () => {

        axios.get('http://localhost:8080/customer/customerOrders/'+d.sub)
            .then(response => {
                setResponseData(response.data);
                
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
                <h2 className="bg-dark text-light p-3 text-center">My Orders</h2>
                <div class="container">

                    <br></br>

                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th >Order ID</th>
                                <th>Delivered Date</th>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Transaction ID</th>
                                <th>Total Bill</th>
                                <th> Payment status</th>
                                <th>FeedBack</th>
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
                                     <td><Link to="/feedback" state={val.orderId} class="btn btn-primary" >Give feedback</Link> </td>

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

export default Order;
