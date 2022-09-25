import axios from "axios";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import "./CustomerList.css";

const ComponentList = () => {
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/components")
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
      <div className="container">
        <h2 className="heading">Components List</h2>
        <br></br>
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th>Component ID</th>
              <th>Name</th>
              <th>Catergory</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {responseData.map((val) => (
              <tr key="{val.id}">
                <td>{val.compId}</td>
                <td>{val.name}</td>
                <td>{val.category}</td>
                <td>{val.price}</td>
                <td>{val.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComponentList;
