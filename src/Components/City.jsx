import React, { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "../store/AppContextProvider";


//*ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownLong,
  faTemperatureHalf,
  faWind,
  faCloud,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

//*PICS
import ClearSky from "../images/sun.svg";
import Clouds from "../images/clouds (1).svg";
import Rain from "../images/rain (1).svg";
import Drizzle from "../images/drizzle (1).svg";
import Thunderstorm from "../images/storm (1).svg";
import Snow from "../images/snow (1).svg";
import Extreme from "../images/thunderstorm (1).svg";

function City() {
  const { cityInfo } = useContext(AppContext);

  const params = useParams();
  const { city } = params;
  const { name, main, weather, wind, clouds } = cityInfo;
  const weatherCode = weather && weather.length > 0 ? weather[0].id : null;

  if (!cityInfo) {
    return null;
  }

  return (
    <div className="cityComponent">
      
      <h1>{name}</h1>

      
      <div className="mainBox">
        {weather && weatherCode && (
          <img
            src={
              weatherCode === 800
                ? ClearSky
                : weatherCode >= 801 && weatherCode <= 804
                ? Clouds
                : (weatherCode >= 500 && weatherCode <= 504) ||
                  weatherCode === 511
                ? Rain
                : weatherCode >= 300 && weatherCode <= 321
                ? Drizzle
                : weatherCode >= 200 && weatherCode <= 232
                ? Thunderstorm
                : weatherCode >= 600 && weatherCode <= 622
                ? Snow
                : (weatherCode >= 900 && weatherCode <= 902) ||
                  (weatherCode >= 905 && weatherCode <= 906) ||
                  (weatherCode >= 957 && weatherCode <= 962)
                ? Extreme
                : ""
            }
            alt="weather"
          />
        )}
        {/* right box with info */}
        <div className="box">
          <div>{main && main.temp} &deg;C</div>
          <p>{weather && weather[0].description}</p>
          <button className="searchBtn">
            <NavLink to={`/${city}/forecast`} className="link">Forecast</NavLink>
          </button>
        </div>
      </div>

      {/* 'feels like' box */}
      <div className="feelsLike">
        <FontAwesomeIcon icon={faTemperatureHalf} className="icon" />
        <div>
          <p className="text">Feels like: </p>
          <p className="info">{main && main.feels_like} &deg;C</p>
        </div>
      </div>

      {/* small boxes */}
      <div className="smallBoxes">
        <div className="container">
          <FontAwesomeIcon icon={faArrowDownLong} className="icon" />
          <div className="sub-container">
            <p className="text"> Pressure: </p>
            <p className="info">{main && main.pressure} hPa</p>
          </div>
        </div>

        <div className="container">
          <FontAwesomeIcon icon={faWind} className="icon" />
          <div className="sub-container">
            <p className="text">Wind: </p>
            <p className="info">{wind && wind.speed} km</p>
          </div>
        </div>

        <div className="container">
          <FontAwesomeIcon icon={faCloud} className="icon" />

          <div className="sub-container">
            <p className="text"> Cloudiness:</p>
            <p className="info">{clouds && clouds.all}%</p>
          </div>
        </div>

        <div className="container">
          <FontAwesomeIcon icon={faDroplet} className="icon" />

          <div className="sub-container">
            <p className="text">Humidity:</p>
            <p className="info">{main && main.humidity}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default City;
