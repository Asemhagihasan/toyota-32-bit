import axios from "axios";

export function GetStoreInformation() {
  return axios
    .get("http://localhost:4000/store")
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
