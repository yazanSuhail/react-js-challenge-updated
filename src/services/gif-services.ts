import api from "./api";

const api_KEY = "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa";
export const searchGifs = async (searchParams: any) =>
  await api.get(`/search?q="cat${searchParams}&api_key=${api_KEY}`);
