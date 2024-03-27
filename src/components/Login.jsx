import React, { useContext, useEffect, useState } from 'react'
import { makeLogin } from '../services/AuthService'
import {useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth/AuthContext';

function Login({iniciarSesion}) {

  const {handleLogin, isAuthenticated} = useAuth();
  //Use React hooks (useLocation) to redirect to the path requested.
  const location = useLocation();
  //get the url to redirect to
  const redirectUrl = location.state?.path || "/";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      // Si hay un token, el usuario si queda el la pagina de entrada
      navigate(redirectUrl, { replace: true });
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
        //Usar el auth para controlar el inicio de sesion
        handleLogin(information.token);
			  //navigate(redirectUrl, { replace: true }); //Devolver el usuario a su pagina de entrada.
        navigate("/profile"); //O bien si se priefiere al profile
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