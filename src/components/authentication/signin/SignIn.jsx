import style from "./SignIn.module.css";
import profile from "../../../assets/images/authentication/a.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const sendLogin = async () => {
    const reqBody = {
      password: password,
      usernameOrEmail: useremail,
    };
    if (useremail === "") {
      return window.alert("El campo de usuario esta vacio!");
    }
    if (password === "") {
      return window.alert("El campo de contraseña esta vacio!");
    }
    const resp = await fetch("http://localhost:8080/api/auth/login", {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(reqBody),
    }).catch((error) => {
      console.log(error);
    });
    const salida = await resp.json();
    const exito = salida.success;
    console.log(salida);

    if (exito === true) {
      const dataLog = salida.data;
      localStorage.setItem("role", dataLog.role);
      localStorage.setItem("id", dataLog.id);

      navigate("/", { replace: true });
    }
  };

  return (
    <div className={style.main}>
      <div className={style.sub_main}>
        <div>
          <div className={style.imgs}>
            <div className={style.container_image}>
              <img src={profile} alt="profile" className={style.profile} />
            </div>
          </div>
          <div>
            <h1>Pagina de Login</h1>
            <div>
              <input
                type="text"
                placeholder="username o email"
                className={style.name}
                value={useremail}
                onChange={(event) => setUseremail(event.target.value)}
              />
            </div>
            <div className={style.second_input}>
              <input
                type="password"
                placeholder="contraseña"
                className={style.name}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className={style.login_button}>
              <button className={style.boton_ar} onClick={() => sendLogin()}>
                Login
              </button>
            </div>

            <p className={style.link}>
              <a className={style.a_link} href="https://google.com">
                ¿Necesitas ayuda?
              </a>{" "}
              O{" "}
              <a className={style.a_link} href="https://google.com">
                Registrarme
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
