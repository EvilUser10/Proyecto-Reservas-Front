import axios from "axios";
import { api, getHeader } from "./ApiService";

const REST_API_AUTH_URL = 'http://localhost:8080/api/bookings';
export const makeRegister = (id) => {
  try {
    return axios.post(`${REST_API_AUTH_URL}/hotel/${id}/booking`,{

      //Se puede hacer el uso al metodo global getHeader()
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

/* This is the function to cancel a booking */
export async function candelBooking(bookingId) {
	try {
		const response = await api.delete(`/api/bookings/${bookingId}/cancel`, {
			headers: getHeader()
		})
    console.log(response)
		return response.data
	} catch (error) {
		console.error("Error cancelando bookings:", error.message)
		throw new Error("Failed to cancel bookings")
	}
}