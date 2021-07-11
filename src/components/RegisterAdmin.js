import React, {useEffect} from 'react'
import FormUser from './FormUser'
import axios from "axios";

const fechData = () => {
    return axios.get("https://rickandmortyapi.com/api/character")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
}

function RegisterAdmin() {

    useEffect(() => {
     fechData();
    }, [])

    return (
        <div>
            <form className="update-form">
                <input className="update__input" type="text" name="" id="" placeholder="Pepito Perez" required/>
                <input className="update__button" type="submit" value="Search" />
            </form>
            <FormUser />
            <div className="container-button">
                <button className="form-button" type="button">Agregar Registro</button>
            </div>
        </div>
    )
}

export default RegisterAdmin;