import axios from "axios";
// import { googleApiKey } from "./API_KEY";
// import { searchEngineId } from "./SEARCH_ENGINE_ID";

const myApi = axios.create({
  baseURL: "http://www.boredapi.com/api",
});

// const imageApi = axios.create({
//   baseURL: "https://www.googleapis.com/customsearch/v1",
// });

export const getIdea = () => {
  return myApi.get("/activity").then((response) => {
    return response;
  });
};

// export const getImage = (activity) => {
//   console.log(
//     `key=${googleApiKey}&cx=${searchEngineId}&q=${encodeURIComponent(activity)}`
//   );
//   return imageApi
//     .get(
//       `key=${googleApiKey}&cx=${searchEngineId}&q=${encodeURIComponent(
//         activity
//       )}`
//     )
//     .then((response) => {
//       return response;
//     });
// };
