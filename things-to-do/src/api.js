import axios from "axios";

const myApi = axios.create({
  baseURL: "http://www.boredapi.com/api",
});

export const getIdea = () => {
  return myApi.get("/activity").then((response) => {
    return response;
  });
};
