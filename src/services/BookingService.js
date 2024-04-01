// import axios from "axios";
// import { api, getHeader } from "./ApiService";
import { api, getHeader } from "./ApiService";

export async function makeRegister(id, booking) {
  try {
    const response = await api.post(`/api/bookings/hotel/${id}/booking`, booking,{
      headers: getHeader()
    })
    return response.data
  } catch (e) {
    console.log("No se ha podido realizar la reserva: " + e)
    throw e;
  }
}

/* This is the function to cancel a booking */
export async function candelBooking(bookingId) {
	try {
		const response = await api.delete(`/api/bookings/${bookingId}/cancel`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		console.error("Error cancelando bookings:", error.message)
		throw new Error("Failed to cancel bookings")
	}
}