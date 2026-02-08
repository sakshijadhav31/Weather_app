function renderCurrentWeather(data) {
  const div = document.getElementById("currentWeather");
  div.innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡 Temperature: ${Math.round(data.main.temp)} °C</p>
    <p>☁ Weather: ${data.weather[0].description}</p>
    <button onclick="saveFavorite('${data.name}')">⭐ Save Favorite</button>
  `;
}

function renderForecast(data) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  const days = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  days.forEach(day => {
    const date = new Date(day.dt_txt);
    const dayName = date.toLocaleDateString("en-IN", { weekday: "short" });

    forecastDiv.innerHTML += `
      <div class="forecast-item">
        <div class="day">${dayName}</div>
        <div class="temp">${Math.round(day.main.temp)}°C</div>
        <div class="desc">${day.weather[0].main}</div>
      </div>
    `;
  });
}

function renderFavorites() {
  const ul = document.getElementById("favorites");
  ul.innerHTML = "";

  state.favorites.forEach(city => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="loadCity('${city}')">${city}</span>
      <button onclick="removeFavAndRender('${city}')">✖</button>
    `;
    ul.appendChild(li);
  });
}

function showError(msg) {
  document.getElementById("error").innerText = msg;
}
