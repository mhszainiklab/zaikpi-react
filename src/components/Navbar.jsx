import React from "react";

const Navbar = () => {
  return (
    <div className="landing-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-6">
            <a href="index.html" className="">
              <img src="src/assets/logo.png" alt="" />
            </a>
          </div>
          <div className="col-lg-7 col-6">
            <nav className="navbar navbar-expand-lg p-0">
              <button className="navbar-toggler bd-c-main-color text-main-color fs-30 ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
              </button>
              <div className="navbar-collapse landing-menu-navbar-collapse offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <button type="button" className="d-lg-none w-30 h-30 p-0 rounded-circle bg-white border-0 position-absolute top-10 right-10" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="fa-solid fa-times"></i>
                </button>
                <ul className="navbar-nav landing-menu-navbar-nav justify-content-md-center flex-wrap w-100">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#price">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">
                      FAQ's
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="d-flex justify-content-end g-8">
              <a href="#" className="py-19 px-33 bd-one bd-c-ld-black bd-ra-4 d-inline-flex bg-ld-black fs-18 fw-700 lh-24 text-white">
                Log In
              </a>
              <a href="#" className="py-19 px-33 bd-one bd-c-main-color bd-ra-4 d-inline-flex bg-white fs-18 fw-700 lh-24 text-main-color">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
