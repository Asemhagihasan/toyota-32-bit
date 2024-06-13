import axios from "axios";
const API_URL = "https://661c1c1ce7b95ad7fa69b72a.mockapi.io/api/v3/users";
export default function getUsers() {
  let users = [];
  axios
    .get(`${API_URL}`)
    .then((response) => {
      users = response.data;
    })
    .catch((error) => {
      console.log(error.message);
    });
  return users;
}
