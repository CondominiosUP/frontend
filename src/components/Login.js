import logo from "../img/logoOrange.png"

function Login (props) {
    return (
        <div className="login-box">
            <img src={logo} alt="logo condominio"/>
            <h1>Log in to Condominios</h1>
            <form>
                
                <label for="email"></label>
                <input type="text" placeholder="Email" />
                <label for="password"></label>
                <input type="password" placeholder="Contraseña" />
                <input type="submit" value="Log In" />
                <a href="#">¿Olvidaste tu contraseña?</a>
                
            </form>
        </div>    
    );
}

export default Login;
