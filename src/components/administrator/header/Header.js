import React from "react";
import './Header.css'
import log from "../../../assets/images/administrator/logoH.svg"
import { Link ,NavLink} from "react-router-dom";
import settings from '../../../settings.json';
function header({toPage}) {
  const u = settings.url;
const comeback=(event)=>{
  event.preventDefault();
    localStorage.clear();
    window.location.assign(u+"3000/");
}
  return (
    <header className="container_jv_adm">
      <img src={log} alt="logo" className="logo" />

      <nav>
        <ul className="nav_links_jv">
          <li className="nav_item_jv">
            <NavLink  to="#"  className="link_jv" activeclassname="active_jv" onClick={toPage("users")} >Usuarios</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="#"  className="link_jv" activeclassname="active_jv" onClick={toPage("plates")}>Platos</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="#"  className="link_jv" activeclassname="active_jv" onClick={toPage("system")}>Sistema</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="# " className="link_jv" activeclassname="active_jv"onClick={toPage("roles")}>Roles</NavLink>
          </li>
        </ul>
      </nav>
      <a className="cta" href=""> <button className="nav_butttom_jv" onClick={comeback}> SALIR</button></a>
     
      

    </header>
  );
}

export default header;
