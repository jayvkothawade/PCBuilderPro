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



import { BrowserRouter, Routes, Route } from "react-router-dom";

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
   <Route path='/' element={<Navbar/>} >
            <Route index element={<Welcome />} ></Route>
            <Route path='login' element={<LoginForm />} ></Route>
            <Route path='registeruser' element={<Form1/>} ></Route>
            <Route path="components" element={<ComponentList />}></Route>
            <Route path="customers" element={<CustomerList />}></Route>
            <Route path="add-employee" element={<EmployeesAddForm />}></Route>
            <Route path="employees" element={<EmployeesList />}></Route>
            <Route path="updateemployee" element={<EmployeesUpdateForm />}></Route>
    </Route>

   </Routes>
   
   
   </BrowserRouter>
   
   
   </div>
  );
}

export default App;