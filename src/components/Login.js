import React, { useState } from 'react';
import logo from "../img/logoOrange.png"
import Input from './Input';

//import Button from './Button';

const Login = () => {

    const [ user, setUser ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordError, setPasswordError ] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
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
        let account = { user, password }
        if(account) {
            console.log('account:', account)
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
                {/* <Button /> */}
                <input onClick={ HandleSubmit} type="submit" value="Log In" />
                <a href="#">¿Olvidaste tu contraseña?</a>

        </div>
    );
}

export default Login;
