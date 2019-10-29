import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/gods/";

export function getGods() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
