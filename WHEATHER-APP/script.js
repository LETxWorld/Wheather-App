async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'YOUR_API_KEY'; // Get it free from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    document.getElementById('result').innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } else {
    document.getElementById('result').innerText = "City not found!";
  }
}
