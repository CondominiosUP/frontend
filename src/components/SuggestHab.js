function SuggestHab () {
    return(
        <div className="Container_suggest">
            <div className="Content_suggest">

              <div className="main-suggest">
                <div>
                  <h4 className="title-suggest">Nombre:</h4>
                  <input className="input-suggest"placeholder="Diciembre"></input>
                </div>                 
              </div>

              <div >
                <h4 className="title-suggest">Detalles:</h4>
                <textarea className="text-details">Estamos a tres meses de Diciembre, mes de familia, unión y compartir.Podríamos hacer una actividad para recoger fondos y compartir entre todos los habitantes del condominio</textarea>
              </div> 
              <div>
                <input className="button" type="submit" value="Enviar tu sugerencia" />
              </div>    
            </div>
        </div>
    )
}

export default SuggestHab;