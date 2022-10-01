import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Form1() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    let [isSuccess, setIsSuccess] = useState(false);
    let formRef = useRef();
    let [isError, setIsError] = useState(false);

    const handleChange = evnt => {
        let paramName = evnt.target.name;
        let paramValue = evnt.target.value;

        setInputs(
            values => ({ ...values, [paramName]: paramValue })
        );
    };

    const handleSubmit = evnt => {
        evnt.preventDefault();
        evnt.stopPropagation();

        formRef.current.classList.add("was-validated");
        if (!formRef.current.checkValidity()) {
            return;
        }

        axios.post('http://localhost:8080/api/register/customer', inputs)
            .then(response => {
                alert(response.data);
                setTimeout(() => setIsSuccess(false), 2500);

                formRef.current.classList.remove("was-validated");
                navigate('/login')
            })
            .catch(error => {
                console.error(error);
                setIsError(true);

                setTimeout(() => setIsError(false), 2500);
            });


    };

    return <div>
        <div>
            <h2 className="bg-dark text-light text-center">User Registration</h2>
            <br></br>
            <div className="container m-auto w-25">
                <form ref={formRef} className="needs-validation" noValidate>
                    <div class="mb-3 mt-3 center">
                        {/* <label for="name" class="form-label">Name:  </label> */}
                        <input className="form-control" type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} pattern="[a-zA-Z]{3,25}" required />
                        <div className="valid-feedback">Name is valid ✅</div>
                        <div className="invalid-feedback">Name is invalid</div>
                    </div>
                    <div class="mb-3">
                        {/* <label for="email" class="form-label">Email:  </label> */}
                        <input className="form-control" type="email" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}" required />
                        <div className="valid-feedback">email is valid ✅</div>
                        <div className="invalid-feedback">email is invalid</div>
                    </div>

                    <div class="mb-3">
                        {/* <label for="password" class="form-label">Password:  </label> */}
                        <input className="form-control" type="password" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} required />
                        <div className="valid-feedback">Password is valid ✅</div>
                        <div className="invalid-feedback">Password is Invalid ❌</div>
                    </div>

                    <div class="mb-3">
                        {/* <label for="mobile" class="form-label">Mobile:  </label> */}
                        <input className="form-control" type="text" name="mobile" placeholder="Mobile" value={inputs.mobile} onChange={handleChange} minLength="10" maxLength="10" pattern="[0-9]{10}" required />
                        <div className="valid-feedback">Mobile is OK ✅</div>
                        <div className="invalid-feedback">Mobile is Invalid ❌</div>
                    </div>

                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="street" placeholder="Street" value={inputs.street} onChange={handleChange} required />
                        <div className="valid-feedback">✅</div>
                        <div className="invalid-feedback">Required ❌</div>
                    </div>

                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="city" placeholder="City" value={inputs.city} onChange={handleChange} required />
                        <div className="valid-feedback">✅</div>
                        <div className="invalid-feedback">City is required ❌</div>
                    </div>

                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="state" placeholder="State" value={inputs.state} onChange={handleChange} required />
                        <div className="valid-feedback">✅</div>
                        <div className="invalid-feedback">State is required ❌</div>
                    </div>

                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="pincode" placeholder="Pin code" value={inputs.pincode} onChange={handleChange} pattern="[0-9]{6}" required />
                        <div className="valid-feedback">✅</div>
                        <div className="invalid-feedback">Pincode is required ❌</div>
                    </div>
                    <br></br>

                    <input
                        type="button"
                        value="Register"
                        className="btn btn-primary w-25"
                        onClick={handleSubmit}
                    />

                    {isError && (
                        <div className="alert alert-danger mt-4">
                            Please enter the information before submitting!
                        </div>
                    )}

                    {/* <button type="submit" class="btn btn-primary"  >Submit</button> */}
                </form>
            </div>
        </div>

    </div>;
};
export default Form1;