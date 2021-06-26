function PrioriUser() {
  return (
    <div className="Tanks">
      <div className="Tanks_block">
        <h3 className="Tanks_title">Por hacer</h3>
        <div className="Tanks_content">
          <button className="Tanks_button"><h3>Nombre</h3><h3>Detalles...</h3></button>
          <button className="Tanks_button"><h4>Nombre</h4><h4>Detalles...</h4></button>
        </div>
      </div>
      <div className="Tanks_block">
        <h3 className="Tanks_title">En proceso</h3>
        <div className="Tanks_content"></div>
      </div>
      <div className="Tanks_block">
        <h3 className="Tanks_title">Terminadas</h3>
        <div className="Tanks_content"></div>
      </div>
    </div>
  )
}

export default PrioriUser;