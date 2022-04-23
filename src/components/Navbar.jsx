import React from "react";

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
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Restaurants
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Deals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  My orders
                </a>
              </li>
            </ul>
            <div className="message">
              <i class="bi bi-cart3"></i>
            </div>
            <div className="avatar border-outline-light">
              {/* <img src="./img/avatar.jpg"   alt="" /> */}
            </div>
            <div className="hamburger-menu">
            <i class="bi bi-list"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
