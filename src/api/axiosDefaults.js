import axios from "axios";

// axios.defaults.baseURL = "https://catscoffeecovers-448595c73efd.herokuapp.com/";
axios.defaults.baseURL = "https://8000-elamont174-catscoffeeco-7lf51kayvku.ws.codeinstitute-ide.net/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();