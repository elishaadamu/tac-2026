import React from "react";
import Logo from "./assets/Logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={Logo} className="header-logo" alt="Logo" />
        <h1 className="header-title">
          Draft FY27 UPWP
        </h1>
      </div>
    </header>
  );
};

export default Header;
