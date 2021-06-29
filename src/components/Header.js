import logo from "../img/logoOrange.png";
import { Link, Route } from "react-router-dom";

function Header(props) {
  return (
    <div className="Container">
      <header className="Header">
      <ul className="Header__list">
        <Link to="/">
          <img className="Header__logo" src={logo} alt="Logo Condominios" />
        </Link>
          <li className="Header__listItem">
            <Link to="/actualizar">
              Actualizar información
            </Link>
          </li>
          <li className="Header__listItem">
            <Link to="/ingresosegresos">
              Ingresos y egresos
            </Link>
          </li>
          <li className="Header__listItem">
            <Link to="/prioridadUsuario">
              Prioridades y mejoras
            </Link>
          </li>
          <li className="Header__listItem">
            <Link to="/genrarsugerencia">
              Generar sugerencia
            </Link>
          </li>
          <li className="Header__listItem">
            <Link to="/reportfalla">
              Reportar falla
            </Link>
          </li>
        </ul>
      </header>
      <p className="Container__title">Bienvenido Admin - User!</p>
    </div>
  );
}

export default Header;