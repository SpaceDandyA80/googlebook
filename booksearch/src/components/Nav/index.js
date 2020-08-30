import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Google Book Search
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Search Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
