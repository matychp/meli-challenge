import axios from "axios";
import to from "await-to-js";

const httpClient = axios.create({
  baseURL: "http://localhost:5000/api",
});

const api = {
  search: async (searchTerm) => {
    const [err, search] = await to(httpClient.get(`/items?q=${searchTerm}`));

    if (err) return new Error(err);

    return search.data;
  },
  getItemById: async (id) => {
    const [err, item] = await to(httpClient.get(`/items/${id}`));

    if (err) throw new Error(err);

    return item.data;
  },
};

export default api;
