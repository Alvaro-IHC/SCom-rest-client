import estilo from "./SignUp.module.css";
import profile from "../../../assets/images/authentication/a.png";

import { useState } from "react";

export default function SignUp() {
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [emailRegistro, setEmailRegistro] = useState("");
  const [passOrigen, setPassOrigen] = useState("");
  const [passConfirmar, setPassConfirmar] = useState("");
  const [usernameReg, setUsernameReg] = useState("");

  let arrApellidos = apellidos.split(" ");
  console.log(nombres);

  const sendSignIn = () => {
    const reqRegisInfo = {
      name: nombres,
      fatherLastname: arrApellidos[0],
      email: emailRegistro,
      motherLastname: arrApellidos[1],
      password: passConfirmar,
      username: usernameReg,
    };
    if (nombres === "") {
      return window.alert("El campo nombre esta vacio!");
    }
    if (arrApellidos[0] === "") {
      return window.alert("El campo apellidos esta vacio!");
    }
    if (emailRegistro === "") {
      return window.alert("El campo email esta vacio!");
    }
    if (passConfirmar === "") {
      return window.alert("El campo confirmar contraseña esta vacio!");
    }
    if (usernameReg === "") {
      return window.alert("El campo nombre de usuario esta vacio!");
    }
    if (passOrigen === "") {
      return window.alert("El campo contraseña esta vacio!");
    }
    if (passOrigen === passConfirmar) {
      fetch("http://localhost:9081/api/customers", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify(reqRegisInfo),
      });
    } else window.alert("Revise su contraseña!");
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
          <br />
          <div className={estilo.entrada}>
            <input
              type="text"
              placeholder="nombres"
              className={estilo.name}
              value={nombres}
              onChange={(event) => setNombres(event.target.value)}
            />
          </div>
          <div className={estilo.entrada}>
            <input
              type="text"
              placeholder="apellidos"
              className={estilo.name}
              value={apellidos}
              onChange={(event) => setApellidos(event.target.value)}
            />
          </div>
          <br />
          <br />
          <div className={estilo.entrada}>
            <input
              type="text"
              placeholder="Ingresar su email"
              className={estilo.name}
              value={emailRegistro}
              onChange={(event) => setEmailRegistro(event.target.value)}
            />
          </div>

          <div className={estilo.entrada}>
            <input
              type="text"
              placeholder="nombre de usuario"
              className={estilo.name}
              value={usernameReg}
              onChange={(event) => setUsernameReg(event.target.value)}
            />
          </div>
          <br />
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
