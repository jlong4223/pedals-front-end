import { getToken } from "./tokenService";

// makes AJAX requests to my bike back end
const BASE_URL = "http://localhost:3001/bikes";
// const BASE_URL = "https://pedals-backend.herokuapp.com/bikes";

export function fetchBikeData() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function addBikeData(bikes) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken(),
    }),
    body: JSON.stringify(bikes),
  }).then((res) => res.json());
}

export function deleteBike(bike) {
  return fetch(BASE_URL + `/${bike._id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      // added authorization header to send the token with the req
      Authorization: "Bearer " + getToken(),
    },
  });
}
