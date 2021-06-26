import React from 'react'
import logo from "../img/logoDarkBlue.png";
import logoHome from "../img/logoHome.png";

function Home() {
    return (
        <div>
            <section className="HeaderHome">
                <img className="Header__logo" src={logo} alt="Logo Condominios" />
                <p className="Header__title">Nuestros Servicios</p>
            </section>
            <section className="ContainerHome">
                <img className="Home__logohome" src={logoHome} alt="LogoHome Condominios" />
                <div className="Home__titleleft">
                    <p>¿Eres administrador del condominio ?</p>
                </div>
                <div className="Home__titleright">
                    <p>¿Eres administrador del condominio ?</p>
                </div>

            </section>
            <section className="DetailsHome">
                <div className="Details__left">
                <h1>Cómo administrador de condominio:</h1>
                <ul>
                    <li>Puedes registrar casas o apartamentos nuevos</li>
                    <li>Puedes ver la información de cada casa o apartamento</li>
                    <li>Puedes registrar los ingresos y egresos </li>
                    <li>Puedes actualizar los rubros los ingresos yegresos</li>
                    <li>Puedes generar un informe financiero de los ingresos y egresos mensual </li>
                    <li>Puedes generar listas de prioridades ymejoras para el condominio</li>
                    <li>Puedes ver las sugerencias y reportes de fallas enviadas por parte de los habitantes</li>
                </ul>
                </div>

                <div className="Details__right">
                <h1>Cómo habitante de condominio:</h1>

                <ul>
                    <li>Puedes actualizar la información de la casa o apartamento</li>
                    <li>Puedes ver el informe financiero mensual del condominio</li>
                    <li>Puedes ver las prioridades y lasmejoras hechas al condominio</li>
                    <li>Puedes enviar sugerencias al Administrador</li>
                    <li>Puedes reportar fallos del condominio al Administrador</li>
                </ul>
                </div>
            </section>
        </div>
    )
}

export default Home
