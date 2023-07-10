import React, { useContext, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../store/AppContextProvider";

function Home() {
  // Destructuring
  const { setCityName } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(inputValue);
    navigate(inputValue ? `/${inputValue}` : "/");
  };

  return (
    <div className="homeComponent">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the city"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button className="searchBtn" type="submit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#01a779" }}
          />
        </button>
      </form>
      <div className="container"></div>
      <NavLink to="/" className="link" onClick={() => setInputValue("")}>
        Home
      </NavLink>
      <Outlet />
    </div>
  );
}

export default Home;
