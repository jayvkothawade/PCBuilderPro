import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const AMDProcessor = () => {
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

    const AddToCart =product => {
        console.log(product.compId);
        axios
          .post("http://localhost:8080/customer/addCart/"+product.compId)
        
          .then((response) => {
            alert(response.data);
            //setResponseData(response.data);
            
          })
          .catch((error) => {
            alert(error);
          });
      };

    useEffect(() => {
        custList();
    }, []);

    return (
        <div>
            <div className="Head"></div>

            <main>
                <div className="subcat">
                    <h2>AMD Processors</h2>
                </div>

                <div className="product">
                    {responseData.map(
                        (product) =>
                            product.category == "amd" &&
                            product.quantity > 0 && (
                                <div className="productEach" key={product.compId}>
                                    <div className="productImage">
                                        <img
                                            src={`/images/AMD/${product.link}.jpg`}
                                            alt={product.name}
                                        ></img>
                                    </div>

                                    <div className="productInfo">
                                        <p>{product.name}</p>
                                        <p>₹{product.price}</p>
                                        <p>{product.description}</p>
                                        <div className="buttondiv">
                                            <NavLink to={"/products/AMDMotherBoard"}>
                                                <button onClick={() => AddToCart(product)} className="buttonproduct">Select</button>
                                            </NavLink>
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

export default AMDProcessor;