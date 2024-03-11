
import axios from 'axios'
import React from 'react'



function Madrid() {

  const URL = 'http://localhost:8080/api';

  async function fetchHotels(){
    const response = await axios.get(URL + '/hotels/Madrid');
    console.log(response.data._embedded.hotelList);
  }

  fetchHotels();
  
  return (
    <h1>Si</h1>
  )
}

export default Madrid