const apiKey = "13236a7bbb2f8c80364ea7e77dda4b9c";

export async function fetchCityWeather(cityName) {
  const cityResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
  );

  const cityData = await cityResponse.json();

  if (!cityResponse.ok) {
    throw {
      error: `Error fetching city: ${cityResponse.status}`,
      response: cityResponse,
    };
  }

  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.coord.lat}&lon=${cityData.coord.lon}&units=metric&appid=${apiKey}`
  );

  const weatherData = await weatherResponse.json();

  if (!weatherResponse.ok) {
    throw {
      error: `Error fetching weather: ${weatherResponse.status}`,
      response: weatherResponse,
    };
  }

  return { cityData, weatherData, cityResponse };
}
