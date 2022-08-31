import React from "react";
import "./Header.css";
import messi from "../../../assets/images/cashier/messi.webp";
import logo from "../../../assets/images/cashier/logo.svg";
const Header = () => {
  return (
    <>
      <header className="main">
        <div className="main_item">
          <img className="main_icon" src={logo} alt="icono" />
        </div>
        <div className="main_item item_cont">
          <h2 className=" main_name">Messi</h2>
          <img
            className=" main_picture"
            src={messi}
            alt="usuario"
          />
          <a href="#" className="main_link">
            {" "}
            salir{" "}
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
