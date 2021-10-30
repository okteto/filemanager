import axios from "axios";


export const getPublicAxios = () =>
  axios.create({
    baseURL: `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_URL}`,
  });