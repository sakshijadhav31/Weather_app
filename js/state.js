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