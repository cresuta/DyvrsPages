export { fetchCategory, fetchStore, fetchTeam, fetchSpotlight, fetchAllCategories, fetchCat1 };
const fetchCategory = async (id) => {
  return (
    fetch(`http://localhost:8080/api/category/${id}/`).then((response) => response.json())
  );
};
const fetchStore = async (id) => {
  return fetch(`http://localhost:8080/api/stores/${id}`).then((response) =>
    response.json()
  );
};
const fetchTeam = async (id) => {
  return fetch(`http://localhost:8080/api/team/${id}`).then((response) =>
    response.json()
  );
};
const fetchSpotlight = async () => {
  return fetch("http://localhost:8080/api/stores/random/").then((response) =>
    response.json()
  );
};
const fetchAllCategories = async () => {
  return fetch(`http://localhost:8080/api/index/`).then((response) =>
    response.json()
  );
};
const fetchCat1 = async () => {
  return (
  fetch(`http://localhost:8080/api/category/1/`).then((response) => response.json())
  );
};