import "./SignUp.css";
import profile from "../../../assets/images/authentication/a.png";
import email from "../../../assets/images/authentication/email.jpg";
import pass from "../../../assets/images/authentication/pass.png";

export default function SignUp() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Pagina de Registro</h1>
            <div className="entrada">
              <input type="text" placeholder="nombre" className="name" />
            </div>
            <div className="entrada">
              <input
                type="text"
                placeholder="nombre de usuario"
                className="name"
              />
            </div>
            <br />
            <br />
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="ingresar email"
                className="name"
              />
            </div>
            <br />
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="contraseña"
                className="name"
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="repetir contraseña"
                className="name"
              />
            </div>
            <div className="login-button">
              <button>Registrar</button>
            </div>

            <p className="link">
              <a href="https://google.com">¿Ya tiene una cuenta?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
