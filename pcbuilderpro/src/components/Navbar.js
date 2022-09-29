import { Link, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import GetCurrentUser from "./GetCurrentUser";
import { Nav, NavDropdown } from "react-bootstrap";

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
            </ul>
          </div>
        </div>
        <Nav>
          <NavDropdown title={user}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </nav>

      <Outlet />

    </>
  );
};

function CustomerNavbar() {

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

              <li class="nav-item">
                <Link class="nav-link" to="/components" >Orders</Link>
              </li>

            </ul>
          </div>
        </div>
        <Nav>
          <button type="button" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </Nav>
        <Nav bg="light">

          <NavDropdown title={user}>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
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