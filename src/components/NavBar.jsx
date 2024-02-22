import React from "react";

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        // style={{ backgroundColor: "#054672" }}
        style={{ backgroundColor: "#054672" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Service & Events
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Temple Timings
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Classes
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Calendar
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Pooja Items
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Priest
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Donation
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "blue" }}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
