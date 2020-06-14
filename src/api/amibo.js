import constants from "./constants";

const parseResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject({
    error: `Status for request failed request: ${response.status}`,
  });
};

const validateResponse = (response) => {
  if (response.amiibo) {
    return response.amiibo;
  }
  return Promise.reject({ error: "Response not in supported format" });
};

export default {
  getAmiibos: () =>
    fetch(`${constants.amiiboAPI}amiibo/`)
      .then(parseResponse)
      .then(validateResponse),
};
