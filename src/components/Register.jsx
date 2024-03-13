import React from 'react'

function Register() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Registrarse</h5>
                <form>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" name="username" placeholder="Nombre de usuario" />
                    <label htmlFor="floatingInput">Nombre de usuario</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" name="password" placeholder="Contraseña" />
                    <label htmlFor="floatingPassword">Contraseña</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email</label>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">
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