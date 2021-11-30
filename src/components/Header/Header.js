import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__left">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
                alt=""
                className="header__logo"
              />
            </Link>
          </div>
          <div className="header__right">
            <Link to="/add">
              <button>Add product</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
