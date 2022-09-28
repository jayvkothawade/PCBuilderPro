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
import UpdateComponentForm from "./components/UpdateComponentForm";


import AMDMotherBoard from "./components/Products/AMD/AMDMotherBoard";
import IntelMotherBoard from "./components/Products/Intel/IntelMotherBoard";
import IntelProcessor from "./components/Products/Intel/IntelProcessor";
import AMDProcessor from "./components/Products/AMD/AMDProcessor";
import jwt_decode from "jwt-decode";

import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";

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
            {/* Admin Routes */}
            <Route path="customers" element={<AdminRoute><CustomerList /></AdminRoute>}></Route>

            <Route path="add-employee" element={<AdminRoute><EmployeesAddForm /></AdminRoute>}></Route>
            <Route path="employees" element={<AdminRoute><EmployeesList /></AdminRoute>}></Route>
            <Route path="updateemployee" element={<AdminRoute><EmployeesUpdateForm /></AdminRoute>}></Route>
            <Route path="addcomponent" element={<AdminRoute><AddComponentForm /></AdminRoute>}></Route>
            <Route path="updatecomponent" element={<AdminRoute><UpdateComponentForm /></AdminRoute>}></Route>


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

function UserName() {
  let username;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    username = decoded.sub;
    //const [inputs, setInputs] = useState(empState.state);
    return username;
  }
}

function AdminRoute({ children }) {
  // let myjwt = localStorage.getItem("user");
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0];   // role = admin
  }

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (role != "admin" || localStorage.getItem("user") === null) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

function CustomerRoute({ children }) {
  // let myjwt = localStorage.getItem("user");
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0];   // role = admin
  }

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (role != "customer" || localStorage.getItem("user") === null) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
}

function EmployeeRoute({ children }) {
  // let myjwt = localStorage.getItem("user");
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0];   // role = admin
  }

  // IF NOT LOGGED IN :: REDIRECT THE USER TO LOGIN
  if (role != "employee" || localStorage.getItem("user") === null) {
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