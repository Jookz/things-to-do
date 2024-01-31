import axios from "axios";

const myApi = axios.create({
  baseURL: "http://www.boredapi.com/api/activity/",
});

export const getIdea = () => {
  return myApi.get("http://www.boredapi.com/api/activity/").then((response) => {
    return response.data;
  });
};
