import { React } from "react";

import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark">
        <Link to="/krima">
          <button type="button" class="btn btn-outline-primary">
            Home
          </button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/GetAllProduct">
          <button type="button" class="btn btn-outline-primary">
            Product Name
          </button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/AddProduct">
          <button type="button" class="btn btn-outline-primary">
            Add Product
          </button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        {/* <!-- Navbar content --> */}
      </nav>
      <nav class="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
        <h1 style={{ textAlign: "center" }}> Darshan University </h1>
        {/* <!-- Navbar content --> */}
      </nav>
      {/* -------------------------------------- */}

      <Outlet />
    </>
  );
}

export default Layout;
