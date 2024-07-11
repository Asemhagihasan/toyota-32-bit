import axios from "axios";
const API_URL = "https://661c1c1ce7b95ad7fa69b72a.mockapi.io/api/v3/users";
export default function getUsers() {
  return axios
    .get(`${API_URL}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      throw new Error(error.message);
    });
}
