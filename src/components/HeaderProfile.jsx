import React from 'react'
import { Link } from "react-router-dom";
import profile from "../assets/images/profile.png";
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';


function HeaderProfile({ buttonsState }) {
    const navigate = useNavigate();

    //Comprueba si el jwt ha expirado
    function checkJwtExpirateDate() {
        if (sessionStorage.getItem("token")) {
            const decoded = jwtDecode(sessionStorage.getItem("token"));
            return decoded.iat;
        }
        return 0;
    }

    //Calcula el tiempo para saber si el jwt ha caducado
    function jwtIsExpirated() {
        if (Date.now > checkJwtExpirateDate()) {
            deleteTokenStorage;
        }
    }

    //Borra el token y recarga la página para actualizar la barra de navegación.
    const deleteTokenStorage = () => {
        sessionStorage.removeItem("token");
        navigate("/")
        window.location.reload();
    }


    jwtIsExpirated();

    //En caso de que exista el jwt, se carga el perfil.
    if (sessionStorage.getItem("token")) {
        return (
            <div className="align-items-center d-flex">
                <Link to={"profile"}><img src={profile} className="logo" alt="Profile Picture" /></Link>
                <Link to={"/"}></Link><button type="button" onClick={deleteTokenStorage} class="btn btn-danger">Cerrar Sesión</button>
            </div>
        )
    }
    // Cuando no exista el jwt, se cargan los botones iniciar sesión y registrarse
    return (
        <div className="align-items-center d-flex">
            <Link className="btn btn-outline-success me-2" to="login">
                Iniciar Sesion
            </Link>
            <Link className="btn btn-outline-primary" to="register">
                Registrarse
            </Link>
        </div>
    )


}

export default HeaderProfile