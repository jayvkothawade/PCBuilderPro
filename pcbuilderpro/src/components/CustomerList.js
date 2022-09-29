import axios from "axios";
import { useEffect, useState } from "react";
import AuthHeader from "./AuthHeader";
//import { Link } from "react-router-dom";


const CustomerList = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + user.access_token
  };
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/employee/customers", { headers: headers })
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        //alert(error);
      });
  };

  useEffect(() => {
    custList();
  }, []);

  return (
    <>
      <h2 className="bg-dark text-light p-3 text-center">Customer List</h2>
      <div className="container">

        <br></br>

        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th>CustomerID</th>
              <th>Name</th>
              <th>City</th>
              <th>Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.city}</td>
                <td>{val.email}</td>
                <td>{val.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerList;
