import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={process.env.PUBLIC_URL + "./images/dmce.jpg"}
            alt="logo"
            style={{ height: "2.2rem" }}
          />{" "}
          Inventory Management System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <Link to="/admin" className="btn btn-outline-success mr-3">
              Admin Panel
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
