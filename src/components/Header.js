import logo from "../img/logoDarkBlue.png";

function Header(props) {
    return (
      <div className="Container">
      <header className="Header">
        <img className="Header__logo" src={logo} alt="Logo Condominios" />
        <ul className="Header__list">
          <li className="Header__listItem">Actualizar información</li>
          <li className="Header__listItem">Ingresos y egresos</li>
          <li className="Header__listItem">Prioridades y mejoras</li>
          <li className="Header__listItem">Generar sugerencia</li>
          <li className="Header__listItem">Reportar falla</li>
        </ul>
      </header>
      <p className="Container__title">Bienvenido Administrador!</p>
      </div>
    );
  }
  
  export default Header;