import React from 'react';
import { useState } from "react";
import axios from "axios";
import { useLocation} from "react-router-dom";





function FeedbackForm() {
    const compState = useLocation();

    

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
        alert(JSON.stringify(inputs));

        axios.post('http://localhost:8080/customer/addFeedback/'+compState.state, inputs)
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                alert(error);
            });


    };


    return (
        <div>
        <div>
            <h2 className="bg-dark text-light p-3 text-center">Feedback Form</h2>
            <br></br>
            <div className="container m-auto w-25">
                <form action="" onSubmit={handleSubmit} >
                    {/* <div class="mb-3 mt-3 center">
                        <label for="name" class="form-label">Name:  </label>
                        <input className="form-control" type="text" name="feedId" placeholder="Feedback Id" value={inputs.feedId} onChange={handleChange} />
                    </div> */}
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="email" class="form-label">Email:  </label> */}
                        <input className="form-control" type="text" name="customerName" placeholder="Customer Name" value={inputs.customerName} onChange={handleChange} />
                    </div>
                    <br></br>
                    <div class="mb-3">
                        {/* <label for="password" class="form-label">Password:  </label> */}
                        <textarea className="form-control" name="description" placeholder="Description" value={inputs.description} onChange={handleChange} />
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>

    </div>
    );
}

export default FeedbackForm;