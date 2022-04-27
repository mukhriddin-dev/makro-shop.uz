import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-brand">
          Food <br /> <span>Delivery</span>
        </div>
        <div className="nav-content  d-flex ">
          <form action="">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
            {/* <i className="bi bi-search"></i> */}
          </form>
          <div className="right-nav d-flex">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Restaurants
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My orders
                </a>
              </li>
            </ul>
            <div className="message">
              <i className="bi bi-cart3"></i>
            </div>
            <Link to="/setting/account" className="avatar border-outline-light">
              {/* <img src="./img/avatar.jpg"   alt="" /> */}
            </Link>
            <div className="hamburger-menu">
            <i className="bi bi-list"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
