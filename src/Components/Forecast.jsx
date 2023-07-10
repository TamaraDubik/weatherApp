import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../store/AppContextProvider";

//!ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faTemperatureHalf,
  faTemperatureFull,
  faArrowTurnDown,
  faWind,
  faCloud,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import { faTemperatureEmpty } from "@fortawesome/free-solid-svg-icons";

function Forecast() {
  const { weatherInfo, cityName } = useContext(AppContext);
  const [openForecastIndex, setOpenForecastIndex] = useState(null);

  if (!cityName) {
    return null;
  }

  const handleToggleContainer2 = (index) => {
    setOpenForecastIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="forecast">
      <NavLink className="btn" to={`/${weatherInfo.city.name}`}>
        Go back to current weather
      </NavLink>

      {weatherInfo.list.map((info, index) => {
        const isOpen = openForecastIndex === index;

        return (
          <div key={index} className="container">
            {/* MAIN CONTAINER */}
            <div className="mainCon">
              <p>{info.dt_txt}</p>
              <p>{info.main.temp}&deg;C</p>
              <p>{info.weather[0].description}</p>
              <button
                className="btnToShow"
                onClick={() => handleToggleContainer2(index)}
              >
                <FontAwesomeIcon
                  className={`iconColor ${isOpen && "open"}`}
                  icon={faChevronDown}
                />
              </button>
            </div>

            {/* CONTAINER WITH SMALL BOXES */}
            {isOpen && (
              <div className="container2">
                <div className="sub-con">
                  <FontAwesomeIcon
                    className=" iconColor"
                    icon={faTemperatureHalf}
                  />
                  <div className="nested-con">
                    <p className="text">Feels like:</p>
                    <p className="info">{info.main.feels_like}</p>
                  </div>
                </div>

                <div className="sub-con">
                  <FontAwesomeIcon
                    className=" iconColor"
                    icon={faTemperatureEmpty}
                  />
                  <div className="nested-con">
                    <p className="text">Minimum temp:</p>
                    <p className="info">{info.main.temp_min}</p>
                  </div>
                </div>

                <div className="sub-con">
                  <FontAwesomeIcon
                    className="iconColor"
                    icon={faTemperatureFull}
                  />
                  <div className="nested-con">
                    <p className="text"> Maximum temp:</p>
                    <p className="info">{info.main.temp_max}</p>
                  </div>
                </div>

                <div className="sub-con">
                  <FontAwesomeIcon
                    className="iconColor"
                    icon={faArrowTurnDown}
                  />
                  <div className="nested-con">
                    <p className="text">Pressure:</p>
                    <p className="info">{info.main.pressure}</p>
                  </div>
                </div>

                <div className="sub-con">
                  <FontAwesomeIcon className=" iconColor" icon={faWind} />
                  <div className="nested-con">
                    <p className="text">Wind:</p>
                    <p className="info">{info.wind.speed}</p>
                  </div>
                </div>

                <div className="sub-con">
                  <FontAwesomeIcon className=" iconColor" icon={faCloud} />
                  <div className="nested-con">
                    <p className="text">Cloudiness:</p>
                    <p className="info">{info.clouds.all}%</p>
                  </div>
                </div>

                <div className="sub-con">
                  <FontAwesomeIcon className="iconColor" icon={faDroplet} />
                  <div className="nested-con">
                    <p className="text">Humidity:</p>
                    <p className="info">{info.main.humidity}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;
