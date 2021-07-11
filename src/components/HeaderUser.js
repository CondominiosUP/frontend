import logo from "../img/logoDarkBlue.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="Container">
      <header className="Header">
        <img className="Header__logo" src={logo} alt="Logo Condominios" />
        <ul className="Header__list">
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
            <Link to="/ingresosegresos">
              Prioridades y mejoras
            </Link>
          </li>
          <li className="Header__listItem">
            <Link to="/ingresosegresos">
              Generar sugerencia
            </Link>
          </li>
          <li className="Header__listItem">
            <Link to="/ingresosegresos">
              Reportar <br></br>
              falla
            </Link>
          </li>
        </ul>
      </header>
        <p className="Container__title">Bienvenido Admin - User!</p>
    </div>
      );
}

      export default Header;
