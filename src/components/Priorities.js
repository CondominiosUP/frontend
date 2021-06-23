function Priorities () {
    return(
        <div className="Space">
            <div className="Space_card">
              <div className="Space_head">
                <div>
                  <h3 className="Space_title">Nombre:</h3>
                  <input className="Space_record"placeholder="Pintar Postes"></input>
                </div>
                <div className="Space_name_check">
                  <h3 className="Space_title">Prioridad</h3>
                  <h3 className="Space_title">Mejora</h3>
                </div>
                <div className="Space_button">
                  <button type="button" className="Space_select">X</button><br/>
                  <button type="button" className="Space_select"> </button>
                </div>
                <div className="Space_public">
                   <button className="Space_close">Públicar</button>
                </div> 
              </div>
              <div >
                <h3 className="Space_title">Detalles:</h3>
                <textarea className="Space_text">Pintar Postes</textarea>
              </div>     
            </div>
        </div>
    )
}

export default Priorities;