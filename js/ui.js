function renderCurrentWeather(data) {
  const div = document.getElementById("currentWeather");
  div.innerHTML = `
    <h2>${data.name}</h2>
    <p>🌡 Temperature: ${data.main.temp} °C</p>
    <p>☁ Weather: ${data.weather[0].description}</p>
    <button onclick="saveFavorite('${data.name}')">⭐ Save Favorite</button>
  `;
}

function renderForecast(data) {
  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  const days = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  days.forEach(day => {
    forecastDiv.innerHTML += `
      <div>
        <p>${day.dt_txt.split(" ")[0]}</p>
        <p>${day.main.temp} °C</p>
      </div>
    `;
  });
}

function renderFavorites() {
  const ul = document.getElementById("favorites");
  ul.innerHTML = "";

  state.favorites.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.onclick = () => loadCity(city);
    ul.appendChild(li);
  });
}

function showError(msg) {
  document.getElementById("error").innerText = msg;
}