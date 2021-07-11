import logo from "../img/logoOrange.png"
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <div className="login-box">
            <img src={logo} alt="logo condominio" />
            <h1>Log in to Condominios</h1>
            <form>

                <label for="email"></label>
                <input type="text" placeholder="Email" />
                <label for="password"></label>
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Log In" />
                <Link to="#">¿Olvidaste tu contraseña?</Link>

            </form>
        </div>
    );
}

export default Login;
