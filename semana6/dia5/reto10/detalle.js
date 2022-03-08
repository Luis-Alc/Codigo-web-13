// JSON.parse convierte un string a un JSON (objeto)
const objetoCharacter = JSON.parse(localStorage.getItem("character"));

const imgDetail = document.querySelector("#img-detail");
const statusCharacter = document.querySelector("#status");
const nameCharacter = document.querySelector("#name");
const locationCharacter = document.querySelector("#location");
const originCharacter = document.querySelector("#origin");
const episodesCharacter = document.querySelector("#episodes");
const speciesCharacter = document.querySelector("#species");



statusCharacter.innerHTML = objetoCharacter.status;
nameCharacter.innerHTML = objetoCharacter.name;
imgDetail.src = objetoCharacter.image;
locationCharacter.innerHTML = objetoCharacter.location.name
originCharacter.innerHTML = objetoCharacter.origin.name
episodesCharacter.innerHTML = objetoCharacter.episode.length
speciesCharacter.innerHTML = objetoCharacter.species