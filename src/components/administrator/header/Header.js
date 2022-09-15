import React from "react";
import './Header.css'
import log from "../../../assets/images/administrator/logoH.svg"
import { Link ,NavLink} from "react-router-dom";
import settings from '../../../settings.json';
function header() {
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
            <NavLink  to="/administrator/users"  className="link_jv" activeclassname="active_jv">Usuarios</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="/administrator/plates"  className="link_jv" activeclassname="active_jv">Platos</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="/administrator/system"  className="link_jv" activeclassname="active_jv">Sistema</NavLink>
          </li>
          <li className="nav_item_jv">
            <NavLink  to="/administrator/roles"  className="link_jv" activeclassname="active_jv">Roles</NavLink>
          </li>
        </ul>
      </nav>
      <a className="cta" href=""> <button className="nav_butttom_jv" onClick={comeback}> SALIR</button></a>
     
      

    </header>
  );
}

export default header;
