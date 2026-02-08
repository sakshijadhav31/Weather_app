document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  loadCity(city);
});

async function loadCity(city) {
  try {
    showError("");
    const weather = await fetchWeather(city);
    const forecast = await fetchForecast(city);

    renderCurrentWeather(weather);
    renderForecast(forecast);
    state.currentCity = city;

  } catch (err) {
    showError(err.message);
  }
}

function saveFavorite(city) {
  addFavorite(city);
  renderFavorites();
}

function removeFavAndRender(city) {
  removeFavorite(city);
  renderFavorites();
}

// Initial load of favorites from localStorage
renderFavorites();
