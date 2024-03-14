import React, { useRef, useState } from 'react'
import { makeRegister } from "../services/AuthService";

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [register, setRegister] = useState(false);
  const [registerMessage, setRegisterMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.length > 0 && password.length > 0 && email.length > 0) {
      if (makeRegister(username, password, email)) {
        setRegisterMessage("El usuario se ha registrado correctamente.")
        setRegister(true);
      }
      else {
        setRegisterMessage("El usuario no se ha podido registrar.")
        console.log("xd")
      }
    } else {
      setRegisterMessage("El usuario no se ha podido registrar.")
      console.log("aa")
    }
    setUsername('');
    setPassword('');
    setEmail('')
  }

  return (
    <>
      {registerMessage.length > 0 && register == true && (
        <div className="alert alert-success" role="alert">
          {registerMessage}
        </div>
      )}

      {registerMessage.length > 0 && register == false && (
        <div className="alert alert-danger" role="alert">
          {registerMessage}
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Registrarse</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" name="username"
                      placeholder="Nombre de usuario"
                      onChange={(e) => setUsername(e.target.value)} 
                      value={username}/>
                    <label htmlFor="floatingInput">Nombre de usuario</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" name="password"
                      placeholder="Contraseña"
                      onChange={(e) => setPassword(e.target.value)} 
                      value={password}/>
                    <label htmlFor="floatingPassword">Contraseña</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}/>
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" onClick={handleSubmit} type="submit">
                      Registrarse
                    </button>
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

export default Register