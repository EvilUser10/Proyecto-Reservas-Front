import axios from "axios";

const REST_API_AUTH_URL = 'http://localhost:8080/api/bookings';
export const makeRegister = (id) => {
  try {
    return axios.post(`${REST_API_AUTH_URL}/hotel/${id}/booking`,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + sessionStorage.getItem("token")
      }
    }).then((response) => {
      return response;
    });
  } catch (e) {
    console.log("No se ha podido realizar la reserva: " + e)
    return null;
  }
}