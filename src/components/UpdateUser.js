import React from 'react'
import FormUser from './FormUser'


function UpdateUser() {
    return (
        <div>
            <FormUser />
            <div className="container-button">
                <input className="form-button" type="button" value="Guardar Cambios" ></input>
            </div>
        </div>
    )
}

export default UpdateUser;
