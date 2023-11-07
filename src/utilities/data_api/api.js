import axios from "axios";
import { useContext } from "react";
import { Context } from "../app_context/AppContext";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// API Documentation: https://rapidapi.com/Glavier/api/youtube138
const fetchDataFromApi = (url) => {
  return axios.get(`${BASE_URL}/${url}`, options);
};

export default fetchDataFromApi;
