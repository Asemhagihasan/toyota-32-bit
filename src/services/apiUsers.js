import axios from "axios";
const API_URL = "http://localhost:4000/users";
export default function getUsers() {
  return axios
    .get(`${API_URL}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data.data;
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
