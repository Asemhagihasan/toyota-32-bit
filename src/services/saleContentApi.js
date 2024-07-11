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
    .catch((err) => {
      throw new Error(err.message);
    });
}
export function getCategoryById(id) {
  return axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch(() => {
      throw new Error("Failed getting products.");
    });
}

export async function getProductById(id) {
  try {
    const categories = await getCategories();
    for (const category of categories) {
      const product = category?.children.find(
        (product) => product.productCode === id
      );
      if (product) {
        return product;
      }
    }
  } catch (err) {
    console.error(
      "An error occurred while fetching or processing categories:",
      err
    );
    throw err;
  }
}

export function getProducts(page) {
  return axios
    .get(`http://localhost:8000/data/${page}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data.children;
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch(() => {
      throw new Error("Failed getting products.");
    });
}
export function getAllProducts() {
  return axios
    .get("http://localhost:8000/data")
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .catch(() => {
      throw new Error("Failed getting products.");
    });
}
