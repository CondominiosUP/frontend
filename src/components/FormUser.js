import React from 'react'

function FormUser() {
    return (
        <div className="container-form">
            <form className="container-update">
                <p>
                    <label for="habitante">Nombre Habitante</label>
                    <input className="input__habitante" type="text" name="habitante" id="habitante" placeholder="Nombre habitante" required />
                </p>

                <p>
                    <label for="habitante">Nombre Propietario</label>
                    <input className="input__propietario" type="text" name="propietario" id="propietario" placeholder="Nombre propietario" required />
                </p>

                <p>
                    <label for="email">Email</label>
                    <input className="input__email" type="email" name="email" id="email" placeholder="Email" required />
                </p>

                <p>
                    <label for="password">Contraseña</label>
                    <input className="input__contraseña" type="password" name="password" id="password" placeholder="Contraseña" required />
                </p>

                <p>
                    <label for="departamento">Número Departamento/Casa</label>
                    <input className="input__departamento" type="text" name="departamento" id="departamento" placeholder="Departamento/Casa" required />
                </p>

                <p>
                    <label for="bloque">Número Torre/Bloque</label>
                    <input className="input__bloque" type="text" name="bloque" id="bloque" placeholder="Bloque/Casa" required />
                </p>

                <p>
                    <label for="nhabitantes">Número Habitantes</label>
                    <input className="input__nhabitantes" type="text" name="nhabitantes" id="nhabitantes" placeholder="Numero habitantes" required />
                </p>

                <p>
                    <label for="telefono">Teléfono</label>
                    <input className="input__telefono" type="text" name="telefono" id="telefono" placeholder="Número teléfono" required />
                </p>

                <p>
                    <label for="temergencia">Teléfono Emergencia</label>
                    <input className="input__habitante" type="text" name="temergencia" id="temergencia" placeholder="Teléfono Emergencia" required />
                </p>

                <p>
                    <label for="condominio">Nombre Condominio</label>
                    <input className="input__condominio" type="text" name="condominio" id="condominio" placeholder="Nombre Condominio" required />
                </p>

            </form>
        </div>

    )
}

export default FormUser
