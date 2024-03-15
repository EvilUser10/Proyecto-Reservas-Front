import React, { useEffect, useState } from 'react'
import { makeLogin } from '../services/AuthService'
import {useNavigate } from 'react-router-dom'

function Login({iniciarSesion}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      // Si hay un token, redirigir al usuario a la página de perfil
      navigate("/profile");
      
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault()
    //Comprueba que el campo de usuario y contraseña no esten vacíos
    if (username.length > 0 && password.length > 0) {
      const information = await makeLogin(username, password);
      if (information == null) {
        setLoginMessage('Las credenciales son incorrectas.')
      } else {
        //Recarga la pagina para actualizar el estado de la barra de navegacion
        sessionStorage.setItem('token', information.token)
        navigate("/profile")
        window.location.reload();
      }
    }
    setUsername('');
    setPassword('');
  }


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                {loginMessage.length > 0 && (
                  <div className="alert alert-danger" role="alert">
                    {loginMessage}
                  </div>
                )}
                <h5 className="card-title text-center mb-5 fw-light fs-5">Iniciar Sesión</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username} />
                    <label htmlFor="floatingInput">Nombre de usuario</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password} />
                    <label htmlFor="floatingPassword">Contraseña</label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={handleSubmit} type="submit">Iniciar
                      Sesión</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;