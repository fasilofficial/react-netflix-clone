import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="logo"
        />
        <ul className="links">
          <li>
            <a href="#originals">Originals</a>
          </li>
          <li>
            <a href="#trendings">Trendings</a>
          </li>
          <li>
            <a href="#action">Action</a>
          </li>
          <li>
            <a href="#documentries">Documentries</a>
          </li>
        </ul>
      </div>
      <img
        className="avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar"
      />
    </div>
  );
};

export default NavBar;
