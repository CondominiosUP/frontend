import React from 'react'

function FormUpdate() {
    return (
        <div className="container-form">
            <form className="container-update">
                <p>
                    <label for="habitante">Nombre Habitante</label>
                    <input className="input__habitante" type="text" name="habitante" id="habitante" placeholder="Nombre habitante" autocomplete="habitante" required />
                </p>

                <p>
                    <label for="habitante">Nombre Propietario</label>
                    <input className="input__propietario" type="text" name="propietario" id="propietario" placeholder="Nombre propietario" autocomplete="propietario" required />
                </p>

                <p>
                    <label for="email">Email</label>
                    <input className="input__email" type="email" name="email" id="email" placeholder="Email" autocomplete="email" required />
                </p>

                <p>
                    <label for="password">Contraseña</label>
                    <input className="input__contraseña" type="password" name="password" id="password" placeholder="Contraseña" autocomplete="password" required />
                </p>

                <p>
                    <label for="departamento">Número Departamento/Casa</label>
                    <input className="input__departamento" type="text" name="departamento" id="departamento" placeholder="Departamento/Casa" autocomplete="departamento" required />
                </p>

                <p>
                    <label for="bloque">Número Torre/Bloque</label>
                    <input className="input__bloque" type="text" name="bloque" id="bloque" placeholder="Bloque/Casa" autocomplete="bloque" required />
                </p>

                <p>
                    <label for="nhabitantes">Número Habitantes</label>
                    <input className="input__nhabitantes" type="text" name="nhabitantes" id="nhabitantes" placeholder="Numero habitantes" autocomplete="nhabitantes" required />
                </p>

                <p>
                    <label for="telefono">Teléfono</label>
                    <input className="input__telefono" type="text" name="telefono" id="telefono" placeholder="Número teléfono" autocomplete="telefono" required />
                </p>

                <p>
                    <label for="temergencia">Teléfono Emergencia</label>
                    <input className="input__habitante" type="text" name="temergencia" id="temergencia" placeholder="Teléfono Emergencia" autocomplete="temergencia" required />
                </p>

            </form>
            <div className="container-button">
                <input className="form-button" type="button" value="Agregar Registro" ></input>
            </div>
        </div>

    )
}

export default FormUpdate
