import React from 'react'
import FormUser from './FormUser'

function RegisterAdmin() {
    return (
        <div>
            <form class="update-form">
                <input className="update__input" type="text" name="" id="" placeholder="Pepito Perez" autocomplete="name" required/>
                <input className="update__button" type="submit" value="Search" />
            </form>
            <FormUser />
            <div className="container-button">
                <input className="form-button" type="button" value="Agregar Registro" ></input>
            </div>
        </div>
    )
}

export default RegisterAdmin;