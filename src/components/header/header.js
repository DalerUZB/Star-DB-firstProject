import React from "react";

import "./header.css";

const Header = ({ onServiceChange }) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">StarDB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://github.com/DalerUZB">My Git Hub Profile</a>
        </li>
      </ul>

      <button onClick={onServiceChange} className="btn btn-primary btn-sm">
        Change Server
      </button>
    </div>
  );
};

export default Header;
