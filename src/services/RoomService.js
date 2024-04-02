import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/rooms';
export const listRoomsByHotelId = (id) =>{
    return axios.get(REST_API_BASE_URL+ `/hotel/${id}/availables`);
}