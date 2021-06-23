function Priori_Admin () {
    return(
        <div className="Tank">
          <div className="Tank_todo">
             <h3>Por hacer</h3>
            <div className="Tank_button">
                <button><h3>Nombre</h3><h3>Detalles...</h3></button>
                <button><h3>Nombre</h3><h3>Detalles...</h3></button>
            </div>
              <button className="Tank_create">Crear Card</button>
              <h3>En proceso</h3>
            <div className="Tank_todo"></div>
              <h3>Terminadas</h3>
            <div className="Tank_todo"></div>
          </div>
        </div>
    )
}

export default Priori_Admin;