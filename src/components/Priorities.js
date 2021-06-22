import React from 'react'

const Priorities = () => {
    return(
        <div className="container">
            <div>
                <h3>Nombre:</h3>
                <input placeholder="Pintar Postes"></input>
                <h3>Prioridad</h3>
                <button>X</button>                
                <h3>Mejora</h3>
                <button>x</button>
                <button><strong>x</strong></button>
            </div>
            <div>
                <h3>Detalles:</h3>
                <textarea>Pintar Postes</textarea>
            </div>  
        </div>
    )
}

export default Priorities;