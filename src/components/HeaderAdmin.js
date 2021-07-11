import logo from "../img/logoDarkBlue.png";
import { Link } from "react-router-dom";

function HeaderAdmin(props) {
  return (
    <div className="Container">
      <header className="Header">
        <img className="Header__logo" src={logo} alt="Logo Condominios" />
        <ul className="Header__list">
          <li className="Header__listItem">
            <Link to="/registrar">
              Registrar <br></br>  
              Casa
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
              Sugerencias y Fallas
            </Link>
          </li>
        </ul>
      </header>
      <p className="Container__title">Bienvenido Admin - User!</p>
    </div>
  );
}

export default HeaderAdmin;