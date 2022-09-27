import { useState } from "react";
import axios from "axios";



function Form1() {

    const [inputs, setInputs] = useState({});

    const handleChange = evnt => {
        let paramName = evnt.target.name;
        let paramValue = evnt.target.value;

        setInputs(
            values => ({ ...values, [paramName]: paramValue })
        );
    };

    const handleSubmit = evnt => {
        evnt.preventDefault();
        //alert(JSON.stringify(inputs));

        axios.post('http://localhost:8080/register', inputs)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                alert(error);
            });


    };

    return <div>
        <div>
            <h2 className="bg-dark text-light p-3 text-center">User Registration</h2>
            <br></br>
            <div className="container m-auto w-25">
                <form action="" onSubmit={handleSubmit} >
                    <div class="mb-3 mt-3 center">
                        {/* <label for="name" class="form-label">Name:  </label> */}
                        <input className="form-control" type="text" name="name" placeholder="Name" value={inputs.name} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="email" class="form-label">Email:  </label> */}
                        <input className="form-control" type="email" name="email" placeholder="Email" value={inputs.email} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="password" class="form-label">Password:  </label> */}
                        <input className="form-control" type="text" name="password" placeholder="Password" value={inputs.password} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="mobile" class="form-label">Mobile:  </label> */}
                        <input className="form-control" type="text" name="mobile" placeholder="Mobile" value={inputs.mobile} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="street" placeholder="Street" value={inputs.street} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="city" placeholder="City" value={inputs.city} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="state" placeholder="State" value={inputs.state} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="address" class="form-label">Address:  </label> */}
                        <input className="form-control" type="text" name="pincode" placeholder="Pin code" value={inputs.pincode} onChange={handleChange} />
                    </div>





                    <button type="submit" class="btn btn-primary"  >Submit</button>
                </form>
            </div>
        </div>

    </div>;
};
export default Form1;