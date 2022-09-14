import React from "react";
import "./header.css";
import messi from "../../../assets/images/cashier/messi.webp";
import logo from "../../../assets/images/cashier/logo.svg";

const Header = () => {
  async function handleSubmit(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.assign("http://localhost:3000/");
  }
  return (
    <>
      <header className="main_head_jv">
        <div className="main_item_jv">
          <img className="main_icon_jv" src={logo} alt="icono" />
        </div>
        <div className="main_item_jv item_cont_jv">
          <h2 className=" main_name_jv jv">Messi</h2>
          <img
            className=" main_picture_jv jv"
            src={messi}
            alt="usuario"
          />
          
          <a href="#" className="main_link_jv " onClick={handleSubmit}>
            {" "}
            salir{" "}
          </a>

        </div>
      </header>
    </>
  );
};

export default Header;
