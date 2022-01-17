import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function Navbar({ title }) {
  const [darkMode, setdarkMode] = useState(false);

  let text = { color: darkMode ? "black" : "white" };

  let nav = {
    backgroundColor: darkMode ? "lightgray" : "black",
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg  " style={nav}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h1 style={text}>{title}</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  style={text}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a style={text} className="nav-link" href="/">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link  " style={text}>
                  {/* <i class="fas fa-camera"></i> */}
                  <i
                    className="fa fa-adjust "
                    color="Tomato"
                    onClick={() => setdarkMode(!darkMode)}
                  >
                    {darkMode ? " Dark Mode" : " Light Mode"}
                  </i>

                  {/* <i class="fa fa-bahai "> Dark Mode</i> */}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                style={text}
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
