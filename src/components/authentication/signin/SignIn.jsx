import "./SignIn.css";
import profile from "../../../assets/images/authentication/a.png";
import email from "../../../assets/images/authentication/email.jpg";
import pass from "../../../assets/images/authentication/pass.png";

export default function SignIn() {
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
            <h1>Pagina de Login</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input
                type="text"
                placeholder="username o email"
                className="name"
              />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input
                type="password"
                placeholder="contraseña"
                className="name"
              />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <p className="link">
              <a href="https://google.com">¿Necesitas ayuda?</a> O{" "}
              <a href="https://google.com">Registrarme</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
