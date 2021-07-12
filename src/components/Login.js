
import React, { useState } from 'react';
import logo from "../img/logoOrange.png"
import { Link } from "react-router-dom";
import Input from './Input';
import axios from 'axios';
import { Apiurl } from '../services/apirest';


//import Button from './Button';

const Login = () => {

    const [ username, setUsername] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUsername(value)
        }   else {
                if(value.length < 6) {
                    setPasswordError(true);
                } else {
                    setPasswordError(false);
                    setPassword(value)
                }
        }
    };

    function HandleSubmit() {
        //let url = Apiurl + 'auth'
        let account = { username, password }
        if(username && password) {
            console.log('account:', account)
            axios.post(Apiurl, account)
        // let url = Apiurl;
        // axios.post(url)
                .then( (data) => {console.log(data)} )
                .catch( (err) => {console.log(err)} )
        }
    }

    return (
        <div className="login-box">
            <img src={logo} alt="logo condominio"/>
            <h1>Log in to Condominios</h1>

                <label text='usuario' />
                <Input
                attribute={{
                    id: 'usuario',
                    name: 'usuario',
                    placeholder: 'Usuario',
                    type:'text'
                }}
                handleChange={handleChange}
                //className="regular-style"
                />

                <label text="password"></label>
                <Input
                attribute={{
                id: 'password',
                name: 'password',
                placeholder:'Password',
                type: 'password'
                }}
                handleChange={handleChange}
                param={passwordError}
                className='regular-style'
                />

                <input onClick={ HandleSubmit} type="submit" value="Log In" />
                <a href="#">¿Olvidaste tu contraseña?</a>

        </div>
    );
}

export default Login;

