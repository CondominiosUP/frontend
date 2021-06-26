function ReportFailure () {
    return(
        <div className="Container_failure">
            <div className="Content_failure">

              <div className="main-failure">
                <div>
                  <h4 className="title-failure">Nombre:</h4>
                  <input className="input-failure"placeholder="Bombillos rotos"></input>
                </div>                 
              </div>

              <div >
                <h4 className="title-failure">Detalles:</h4>
                <textarea className="text-details">En el pasillo de la piscina no prenden lan luces al anochecer</textarea>
              </div> 
              <div>
                <input className="button" type="submit" value="Reportar falla" />
              </div>    
            </div>
        </div>
    );
}

export default ReportFailure;