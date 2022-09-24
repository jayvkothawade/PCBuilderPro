import {Link, Outlet} from "react-router-dom";
function Navbar(){
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
        <li class="nav-item">
          <Link class="nav-link" to="/components" >Components</Link> 
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/customers" >Customers</Link> 
        </li>
  </ul>

  </div>
  </div>
</nav>

  <Outlet/>

 </>
);
};
export default Navbar;