import axios from "axios";
import { useEffect, useState } from "react";
import "./OtherComp.css";
import { NavLink } from "react-router-dom";

const ComputerCase = () => {
  // const user = JSON.parse(localStorage.getItem("user"));

  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': 'Bearer ' + user.access_token
  // };
  const [responseData, setResponseData] = useState([]);

  const custList = () => {
    axios
      .get("http://localhost:8080/employee/components")
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
  const AddToCart =product => {
    console.log(product.compId);
    axios
      .post("http://localhost:8080/customer/addCart/"+product.compId)
    
      .then((response) => {
        alert(response.data);
        //setResponseData(response.data);
        
      })
      .catch((error) => {
        alert("Please Login to Add to Cart");
        console.log(error);
      });
  };


  return (
    <div>
      <div className="Head"></div>

      <main>
        <div className="subcat">
          <h2>Computer Case</h2>
        </div>

        <div className="product">
          {responseData.map(
            (product) =>
              product.category === "computercase" &&
              product.quantity > 0 && (
                <div className="productEach" key={product.compId}>
                  <div className="productImage">
                    <img
                      src={`/images/ComputerCases/${product.link}.jpg`}
                      alt={product.name}
                    ></img>
                  </div>

                  <div className="productInfo">
                    <p>{product.name}</p>
                    <p>₹{product.price}</p>
                    <p>{product.description}</p>
                    <div className="buttondiv">
                      {/* <NavLink to={"/products/IntelMotherBoard"}> */}
                        <button onClick={() => AddToCart(product)} className="buttonproduct" >Add To Cart</button>
                      {/* </NavLink> */}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </main>
    </div>
  );
};

export default ComputerCase;
