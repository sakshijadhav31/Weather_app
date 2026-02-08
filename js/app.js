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

renderFavorites();