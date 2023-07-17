import { Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import { Helmet } from "react-helmet";
//*Components
import Home from "./Components/Home";
import City from "./Components/City";
import NoMatch from "./Components/NoMatch";
import Welcome from "./Components/Welcome";
import Forecast from "./Components/Forecast";
//*ContextProviders

import { AppContext } from "./store/AppContextProvider";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const { isCityValid } = useContext(AppContext);
  const location = useLocation();
  const isNoMatch = location.pathname !== "/" && !isCityValid;

  return (
    <div className={`App${isNoMatch ? " no-match" : ""}`}>
      <Helmet>
        <style>{`
    body {
      background-color: ${isNoMatch ? "#ffc7ca" : "#fff2f9"};
    }
  `}</style>
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Welcome />} />
          {isCityValid ? (
            <>
              <Route path="/:city" element={<City />} exact />
              <Route path="/:city/forecast" element={<Forecast />} exact />
            </>
          ) : (
            <Route path="*" element={<NoMatch />} />
          )}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
