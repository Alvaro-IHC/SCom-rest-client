import React from "react";
import './Header.css'
import log from "../../../assets/images/administrator/logoH.svg"
import { Link ,NavLink} from "react-router-dom";
function header() {
  return (
    <header className="container_jv">
      <img src={log} alt="logo" className="logo" />

      <nav>
        <ul className="nav_links_jv">
          <li className="nav_item_jv">
            <NavLink  to="/users"  className="link_jv" activeclassname="active_jv">Usuarios</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="/plates"  className="link_jv" activeclassname="active_jv">Platos</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="/system"  className="link_jv" activeclassname="active_jv">Sistema</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="/rol"  className="link_jv" activeclassname="active_jv">Roles</NavLink>
          </li>
        </ul>
      </nav>
      <a className="cta" href=""> <button className="nav_butttom_jv"> SALIR</button></a>
     
      

    </header>
  );
}

export default header;
