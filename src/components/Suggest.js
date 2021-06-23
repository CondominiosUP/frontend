function Suggest () {
    return(
        <div className="Content">
            <div className="Content_card">
              <div className="Content_head">
                <div>
                  <h3 className="Content_title">Nombre:</h3>
                  <input className="Content_record"placeholder="Pintar Postes"></input>
                </div>
                <div className="Content_name_check">
                  <h3 className="Content_title">Prioridad</h3>
                  <h3 className="Content_title">Mejora</h3>
                </div>
                <div claseName="Content_button">
                  <button type="button" className="Content_select">X</button><br/>
                  <button type="button" className="Content_select"> </button>
                </div>
                <div>
                   <button className="Content_close"><strong>x</strong></button>
                </div> 
              </div>
              <div >
                <h3 className="Content_title">Detalles:</h3>
                <textarea className="Content_text">Pintar Postes</textarea>
              </div>     
            </div>
        </div>
    )
}

export default Suggest;