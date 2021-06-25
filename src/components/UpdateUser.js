import React from 'react'
import FormUpdate from './FormUpdate'

function UpdateUser() {
    return (
        <div>
            <form class="update-form">
                <input className="update__input" type="text" name="" id="" placeholder="Pepito Perez" autocomplete="name" required/>
                <input className="update__button" type="submit" value="Search" />
            </form>
            <FormUpdate />
        </div>
    )
}

export default UpdateUser;
