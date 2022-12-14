import { Link, Outlet, NavLink } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import GetCurrentUser from "./GetCurrentUser";
import { Nav, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {
  let role;
  if (localStorage.getItem("user") != null) {
    const decoded = jwt_decode(localStorage.getItem("user"));
    role = decoded.roles[0];   // role = admin
  }
  // return (
  //   <>
  //     {(role === "admin") ? <AdminNavbar /> : <NotLoggedInUser />}
  //     {(role === "customer") ? <CustomerNavbar /> : <NotLoggedInUser />}
  //   </>
  // );
  if (role === "admin" || role === "employee") {
    return (
      <>
        {<AdminNavbar />}
      </>
    );
  }
  if (role === "customer") {
    return (
      <>
        {<CustomerNavbar />}
      </>
    );
  }
  return (
    <>
      {<NotLoggedInUser />}
    </>
  );

}




function AdminNavbar() {

  let navigate = useNavigate();
  let user = GetCurrentUser();
  const logout = () => {
    localStorage.clear();
    navigate('/', { replace: true });
    //navigate(0);
    window.location.reload(false);
  }
  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PCBuilderPro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">

              {/* <li class="nav-item">
                <Link class="nav-link" to="/login" >Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/registeruser" >Register</Link>
              </li> */}

              <li class="nav-item">
                <Link class="nav-link" to="/components" >Components</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/customers" >Customers</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/employees" >Employees</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/adminorders" >Orders</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/add-employee" >Add Employee</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/addcomponent" >Add Component</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <Nav>
          <NavDropdown className="text-light" title={user}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {user}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" onClick={logout} href="#!">Logout</a>
            </div>
          </li>

        </ul>

      </nav>

      <Outlet />

    </>
  );
};

function CustomerNavbar() {

  let navigate = useNavigate();
  let user = GetCurrentUser();

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + user.access_token
  };

  const logout = () => {
    localStorage.clear();

    axios
      .post("http://localhost:8080/customer/clearCart")
      .then((response) => {
        console.log("cart cleared");
      })
      .catch((error) => {
        console.log("error in cart clear");
      });

    navigate('/', { replace: true });
    //navigate(0);
    window.location.reload(false);
  }

  const [cartNum, setcartNum] = useState("");

  const cartNumber = () => {
    axios
      .get("http://localhost:8080/customer/getCartNumber")
      .then((response) => {
        setcartNum(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    cartNumber();
  }, []);

  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PCBuilderPro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">

              <li class="nav-item">
                <Link class="nav-link" to="/orders" >Orders</Link>
              </li>

            </ul>
          </div>
          <NavLink to="/cart">
            <button type="button" class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
              {cartNum}
            </button>
          </NavLink>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" onClick={logout} href="#!">Logout</a>
              </div>
            </li>

          </ul>
        </div>

      </nav>

      <Outlet />

    </>
  );
};


function NotLoggedInUser() {
  return (
    <>

      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">PCBuilderPro</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">


            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/login" >Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/registeruser" >Register</Link>
              </li>
            </ul>
          </div>
          <Nav>
            <button type="button" class="btn btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </Nav>
        </div>

      </nav>

      <Outlet />

    </>
  );
};

export default Navbar;