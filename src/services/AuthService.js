import axios from "axios";

const REST_API_AUTH_URL = 'http://localhost:8080/auth';
export const makeRegister = (username, password, email) => {
  const json = JSON.stringify({
    "username": username,
    "password": password,
    "email": email
  });
  try {
    axios.post(REST_API_AUTH_URL + "/register", json, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.data);;
    });
  } catch (e) {
    console.log("No se ha podido realizar el registro: " + e)
    return false;
  }
  return true;
}