const API_KEY = "40904e0db82a4a609f69f9b1cafe5380";  
const BASE_URL = "https://api.openweathermap.org/data/2.5";

async function fetchWeather(city) {
  const res = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  if (!res.ok) throw new Error("City not found");
  return res.json();
}

async function fetchForecast(city) {
  const res = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  if (!res.ok) throw new Error("Forecast not found");
  return res.json();
}
