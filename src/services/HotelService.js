import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/';
export const listHotels = () =>{
    return axios.get(REST_API_BASE_URL+'hotels/madrid');
}
export const getHotel = (city, id) =>{
    return axios.get(`${REST_API_BASE_URL}hotels/${city}/${id}`);
}