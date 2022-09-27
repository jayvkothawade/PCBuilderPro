import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/loginform";
import Form1 from "./components/form1";
import Navbar from "./components/Navbar";
import Welcome from "./components/welcome";
import CustomerList from "./components/CustomerList";
import ComponentList from "./components/ComponentList";
import EmployeesAddForm from "./components/EmployeesAddform";
import EmployeesList from "./components/EmployeesList";
import EmployeesUpdateForm from "./components/EmployeesUpdateForm";
import AddComponentForm from "./components/AddComponentForm";

import AMDMotherBoard from "./components/Products/AMD/AMDMotherBoard";
import IntelMotherBoard from "./components/Products/Intel/IntelMotherBoard";
import IntelProcessor from "./components/Products/Intel/IntelProcessor";
import AMDProcessor from "./components/Products/AMD/AMDProcessor";
import jwt_decode from "jwt-decode";

import {Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      {/* <LoginForm />
     <Form1 /> */}

      {/* <BrowserRouter>
   <Routes>
   <Route path='/login' element={<LoginForm />} ></Route>
   <Route path='/registeruser' element={<Form1 />} ></Route>
   <Route path='/index' element={<Navbar />} ></Route>
   </Routes>
   </BrowserRouter> */}


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} >
            <Route index element={<Welcome />} ></Route>
            <Route path='login' element={<LoginForm />} ></Route>
            <Route path='registeruser' element={<Form1 />} ></Route>
            <Route path="components" element={<ComponentList />}></Route>
            <Route path="customers" element={<ProtectedRoute><CustomerList /></ProtectedRoute>}></Route>

            <Route path="add-employee" element={<EmployeesAddForm />}></Route>
            <Route path="employees" element={<EmployeesList />}></Route>
            <Route path="updateemployee" element={<EmployeesUpdateForm />}></Route>
            <Route path="addcomponent" element={<AddComponentForm />}></Route>
            

          </Route>
          
          {/* Route For AMDProcessor and AMDMotherBoard  */}
          <Route
            path="/products/AMDProcessor"
            element={<AMDProcessor></AMDProcessor>}
          ></Route>
          <Route
            path="/products/AMDMotherBoard"
            element={<AMDMotherBoard />}
          ></Route>
          {/* Route for IntelProcessor and IntelMotherBoard */}
          <Route
            path="/products/IntelProcessor"
            element={<IntelProcessor></IntelProcessor>}
          ></Route>
          <Route
            path="/products/IntelMotherBoard"
            element={<IntelMotherBoard />}
          ></Route>

        </Routes>


      </BrowserRouter>

      


    </div>
  );


}

function ProtectedRoute({ children }) {
 // let myjwt = localStorage.getItem("user");
 let role;
 if (localStorage.getItem("user") != null) {
  var decoded = jwt_decode(localStorage.getItem("user"));
  const role = decoded.roles[0];   // role = admin
}

  //console.log(!role === "admin");
  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (!role === "admin" || localStorage.getItem("user") === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

function UnProtectedRoute({ children }) {
  let myjwt = localStorage.getItem("user");

  if (myjwt) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}

export default App;