import axios from "axios";

const API_URL = "https://661c1c1ce7b95ad7fa69b72a.mockapi.io/api/v3/categories";

export function getCategories() {
  return axios
    .get(`${API_URL}`)
    .then((respone) => {
      if (respone.status >= 200 && respone.status < 300) {
        return respone.data;
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch(() => {
      throw new Error("Failed getting categories.");
    });
}
export function getCategoryById(id) {
  return axios
    .get(`https://661c1c1ce7b95ad7fa69b72a.mockapi.io/api/v3/categories/${id}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch(() => {
      throw new Error("Failed getting products.");
    });
}
