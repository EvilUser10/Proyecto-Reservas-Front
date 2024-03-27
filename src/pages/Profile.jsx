import React, { useEffect, useState } from "react";
import { deleteUser, getUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useAuth } from "../components/auth/AuthContext";
import { candelBooking } from "../services/BookingService";

const Profile = () => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const userId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        /*Antes de hacer la llamada al api verificamos si hay un token.
         * No es la mejor forma, pero por ahora lo hacemos así.
         * la mejor forma seria crea un variable global dentro de AutContext y exportarlo al resto de los componentes.
         */
        if (!token) {
          navigate("/login");
        }
        const userData = await getUser(userId, token);
        console.log(userData);
        //Aqui en vez de establecer el usuario aqui, se establecera en Aluthprovides.
        //En vez de establecer los valores localmente en un componente deberia hacerlo globalmente.
        setUser(userData);
        if (userData) setIsAuthenticated(true);
      } catch (error) {
        setErrorMessage(error?.data);
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      await deleteUser(userId)
        .then((response) => {
          setMessage(response.data);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("userId");
          sessionStorage.removeItem("userRole");
          navigate("/");
          window.location.reload();
        })
        .catch((error) => {
          setErrorMessage(error.data);
        });
    }
  };

  const handleCancelBooking = async (bookingId) => {
    const confirmed = window.confirm(
      "Estas seguro que quieres cancela la reserva? Esta acción no se podrá deshacer."
    );
    if (confirmed) {
      await candelBooking(bookingId)
        .then((response) => {
          console.log(response);
          setMessage(response.data);
        })
        .catch((error) => {
          setErrorMessage(error.data);
        });
    }
  };

  return (
    <div className="container">
      {errorMessage && <p className="text-danger">{errorMessage}</p>}
      {message && <p className="text-danger">{message}</p>}
      {user ? (
        <div
          className="card p-5 mt-5"
          style={{ backgroundColor: "whitesmoke" }}
        >
          <h4 className="card-title text-center">User Information</h4>
          <div className="card-body">
            <div className="col-md-10 mx-auto">
              <div className="card mb-3 shadow">
                <div className="row g-0">
                  <div className="col-md-2">
                    <div className="d-flex justify-content-center align-items-center mb-4">
                      <img
                        src="https://themindfulaimanifesto.org/wp-content/uploads/2020/09/male-placeholder-image.jpeg"
                        alt="Profile"
                        className="rounded-circle"
                        style={{
                          width: "150px",
                          height: "150px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-md-10">
                    <div className="card-body">
                      <div className="form-group row">
                        <label className="col-md-2 col-form-label fw-bold">
                          First Name:
                        </label>
                        <div className="col-md-10">
                          <p className="card-text">{user.name}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="form-group row">
                        <label className="col-md-2 col-form-label fw-bold">
                          Email:
                        </label>
                        <div className="col-md-10">
                          <p className="card-text">{user.email}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="form-group row">
                        <label className="col-md-2 col-form-label fw-bold">
                          Roles:
                        </label>
                        <div className="col-md-10">
                          <ul className="list-unstyled">
                            <li className="card-text">{user.role}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="card-title text-center">Booking History</h4>

              {user.bookings ? (
                <table className="table table-bordered table-hover shadow">
                  <thead>
                    <tr>
                      <th scope="col">ID de Reserva</th>
                      <th scope="col">Fecha de entrada</th>
                      <th scope="col">Fecha de salida</th>
                      <th scope="col">Código de reserva</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.bookings.map((booking, index) => (
                      <tr key={index}>
                        <td>{booking.id}</td>
                        <td>
                          {moment(booking.startDate)
                            .subtract(1, "month")
                            .format("MMM Do, YYYY")}
                        </td>
                        <td>
                          {moment(booking.finishDate)
                            .subtract(1, "month")
                            .format("MMM Do, YYYY")}
                        </td>

                        <td>{booking.bookingConfirmationCode}</td>
                        <td className="text-success">{booking.state}</td>
                        <td>
                          <div className="mx-2">
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleCancelBooking(booking.id)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>You have not made any bookings yet.</p>
              )}

              <div className="d-flex justify-content-center">
                <div className="mx-2">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={handleDeleteAccount}
                  >
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
