import axios from "axios";

export const ApiRequest = axios.create({
    baseURL: "https://kenziehub.herokuapp.com"
});