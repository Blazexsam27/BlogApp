import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
      <div className="container-fluid">
        <Link to="/app">
          <li className="nav-item h3 mx-3">Blog</li>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to={"/app"}>
              <li className="nav-item mx-1">Home</li>
            </Link>
            <Link to={"/app/users/sign_in"}>
              <li className="nav-item mx-1">Sign In</li>
            </Link>
            <Link to={"/app/users/sign_up"}>
              <li className="nav-item mx-1">Sign Up</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
