import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";



function Cart() {
    let d = jwt_decode(localStorage.getItem("user"));


    const user = JSON.parse(localStorage.getItem("user"));

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
    };

    const [responseData, setResponseData] = useState([]);
    const [test, setTest] = useState(0);

    const empList = () => {
        axios.get('http://localhost:8080/customer/getCart')
            .then(response => {
                setResponseData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                alert("Cart is empty");
            });
    };

    const getBill = () => {
        axios.get('http://localhost:8080/customer/getBill')
            .then(response => {
                //setResponseData(response.data);
                setTest(response.data);
                //console.log(response.data);
            })
            .catch(error => {
                alert("Please place an order ");
            });


    }

    const AddOrder = () => {
        axios.post('http://localhost:8080/customer/addOrder/'+d.sub)
            .then(response => {
                //setResponseData(response.data);
                alert(response.data);
                //console.log(response.data);
            })
            .catch(error => {
                alert(error);
            });


    };

    



    useEffect(() => {

        empList();
        getBill();

    }, []);


    return (
        <div>
            <h2 className="bg-dark text-light p-3 text-center">Cart</h2>
            <div class="container">

                <br></br>

                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            responseData.map(
                                val => <tr key="{val.id}">
                                    <td>{val.id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.price}</td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
                <div className="total">
                    <span>Total Price of your Cart is : </span>
                    <span className="mx-auto"><strong>{test}</strong> INR</span>

                </div>
                <br></br>

                <div>
               
            <button className='btn btn-success' onClick={AddOrder}>Check Out</button>
            

          </div>

        </div>

        </div>
    );
}

export default Cart;