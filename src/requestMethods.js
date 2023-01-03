import axios from "axios";


export const manoRequest = axios.create({
  baseURL: "https://api.manoapp.com/api",
  headers: {
    // Authorization: f44a4aabfc5992514d262d7f517327e7,
    StoreID: 4,
    UserAddressID: 60877,
  },
});
