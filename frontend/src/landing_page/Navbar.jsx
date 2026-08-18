import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF",
        height:"60px"
       }}
    >
      <div className="container p-2 d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          <img
            src="media/logo.svg"
            style={{ width: "120px", height:"auto" }} 
            alt="Logo"
          />
        </Link>
        <div>
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
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item " >
                
                <Link className="nav-link"  aria-current="page" to="/signup" style={{fontSize:"13px"}}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/about" style={{fontSize:"13px"}}>
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link " to="/product" style={{fontSize:"13px"}}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/pricing" style={{fontSize:"13px"}}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support" style={{fontSize:"13px"}}>
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
        </div>
        
      </div>
    </nav>
   
  );
}

export default Navbar;
