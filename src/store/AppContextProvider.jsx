import { createContext, useEffect, useState } from "react";
import { fetchCityWeather } from "../apiCalls/fetchCityWeather";

export const AppContext = createContext();

// AppContextProvider
export function AppContextProvider({ children }) {
  const [cityInfo, setCityInfo] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [cityName, setCityName] = useState("");
  const [isCityValid, setIsCityValid] = useState(true);
  const [cityResponseError, setCityResponseError] = useState(null);

  useEffect(() => {
    const fetchCityAndWeather = async () => {
      try {
        const { cityData, weatherData, cityResponse } = await fetchCityWeather(
          cityName
        );

        setCityInfo(cityData);
        setWeatherInfo(weatherData);
        setIsCityValid(cityResponse.ok);
      } catch (error) {
        setIsCityValid(error.response.ok);
        setCityResponseError({ error: error.message });
      }
    };

    fetchCityAndWeather();
  }, [cityName]);

  const contextValue = {
    cityInfo,
    weatherInfo,
    cityName,
    isCityValid,
    cityResponseError,
    setCityName,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
