const state = {
  currentCity: "",
  favorites: JSON.parse(localStorage.getItem("favorites")) || []
};

function addFavorite(city) {
  if (!state.favorites.includes(city)) {
    state.favorites.push(city);
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }
}

function removeFavorite(city) {
  state.favorites = state.favorites.filter(c => c !== city);
  localStorage.setItem("favorites", JSON.stringify(state.favorites));
}
