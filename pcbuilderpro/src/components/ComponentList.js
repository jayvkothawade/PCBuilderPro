import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";
//import "./CustomerList.css";

const ComponentList = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.access_token
  };

  const [responseData, setResponseData] = useState([]);

  const compList = () => {
    axios
      .get("http://localhost:8080/employee/components",{headers: headers})
      .then((response) => {
        setResponseData(response.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const compDelete = evnt => {
    
    axios.delete("http://localhost:8080/employee/componentDelete/{id}"+evnt.target.value, { headers: headers })
        .then(response => {
            compList();
        })
        .catch(error => {
            console.log(evnt.target.value);
            alert(error);
        })
};

  useEffect(() => {
    compList();
  }, []);

  return (
    <>
    <h2 className="bg-dark text-light p-3 text-center">Components List</h2>
      <div className="container">
        
        <br></br>
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th>Component ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              
              
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.compId}</td>
                <td>{val.name}</td>
                <td>{val.category}</td>
                <td>{val.price}</td>
                <td>{val.quantity}</td>
                <td>{val.desciption}</td>
                <td><Link to="/updatecomponent" state={val} class="btn btn-primary" >Update</Link> </td>
                <td><button type="button" class="btn btn-danger" id={val.id} value={val.id} onClick={compDelete} >Delete</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComponentList;
