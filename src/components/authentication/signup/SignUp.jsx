import estilo from "./SignUp.module.css";
import profile from "../../../assets/images/authentication/a.png";

import { useState } from "react";

export default function SignUp() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [passOrigen, setPassOrigen] = useState("");
  const [passConfirmar, setPassConfirmar] = useState("");

  const sendSignIn = () => {
    const reqBody = {
      nombres: nombres,
      apellidos: apellidos,
      emailRegistro: emailRegistro,
      passOrigen: passOrigen,
      passConfirmar: passConfirmar,
    };

    fetch("http://localhost:8080/api/customers", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(reqBody),
    });
  };

  return (
    <div className={estilo.main}>
      <div className={estilo.sub_main}>
        <div className={estilo.imgs}>
          <div className={estilo.container_image}>
            <img src={profile} alt="profile" className={estilo.profile} />
          </div>
        </div>
        <div>
          <h1>Pagina de Registro</h1>
          <div className={estilo.entrada}>
            <input
              type="text"
              placeholder="nombre"
              className={estilo.name}
              value={nombres}
              onChange={(event) => setNombres(event.target.value)}
            />
          </div>
          <div className={estilo.entrada}>
            <input
              type="text"
              placeholder="nombre de usuario"
              className={estilo.name}
              value={apellidos}
              onChange={(event) => setApellidos(event.target.value)}
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="text"
              placeholder="Ingresar su email"
              className={estilo.name}
              value={emailRegistro}
              onChange={(event) => setEmailRegistro(event.target.value)}
            />
          </div>
          <br />
          <div className={estilo.second_input}>
            <input
              type="password"
              placeholder="contraseña"
              className={estilo.name}
              value={passOrigen}
              onChange={(event) => setPassOrigen(event.target.value)}
            />
          </div>
          <div className={estilo.second_input}>
            <input
              type="password"
              placeholder="repetir contraseña"
              className={estilo.name}
              value={passConfirmar}
              onChange={(event) => setPassConfirmar(event.target.value)}
            />
          </div>
          <div className={estilo.login_button}>
            <button className={estilo.boton_ar} onClick={() => sendSignIn()}>
              Registrar
            </button>
          </div>

          <p className={estilo.link}>
            <a href="https://google.com">¿Ya tiene una cuenta?</a>
          </p>
        </div>
      </div>
    </div>
  );
}
