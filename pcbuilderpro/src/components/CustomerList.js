import axios from "axios";
import { useEffect, useState } from "react";
import AuthHeader from "./AuthHeader";
//import { Link } from "react-router-dom";


const CustomerList = () => {
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/employee/customers",{headers: AuthHeader})
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
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
              <th>Address</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Name</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.custId}</td>
                <td>{val.address}</td>
                <td>{val.email}</td>
                <td>{val.mobile}</td>
                <td>{val.name}</td>
                <td>{val.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerList;
