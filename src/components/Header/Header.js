import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <NavLink to="/">
          <img className={style.logo} src="images/dart-veyder.jpg" alt=""/>
        </NavLink>
        <NavLink to="/people">characters</NavLink>
      </div>
    </div>
  );
};

export default React.memo(Header);
