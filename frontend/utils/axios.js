import axios from "axios";

export const getPublicAxios = () => 
  axios.create({
    baseURL: 'https://api-manosfrias.cloud.okteto.net/api/',
  });