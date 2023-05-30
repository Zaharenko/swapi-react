import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "../Header";
import StarWarsText from "../StarWarsText";
import People from "../../pages/People";
import style from "./App.module.css";

import SwapiService from "../../services/service";

export const SwapiContext = React.createContext();

const RouteElement = ({ component: RouteComponent, ...passProps }) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <RouteComponent {...passProps} location={location} navigate={navigate} />
  );
};
const App = () => {
  const swapi = new SwapiService();

  return (
    <BrowserRouter>
      <div className={style.app}>
        <div className={style.container}>
          <Header />
          <SwapiContext.Provider value={swapi}>
            <Routes>
              <Route path="/" element={<StarWarsText />} />
              <Route path="/people" element={<People />} />
              {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            </Routes>
          </SwapiContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;