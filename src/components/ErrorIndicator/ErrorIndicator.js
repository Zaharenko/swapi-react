import React from "react";
import style from "./ErrorIndicator.module.css";

const ErrorIndicator = ({ error }) => {
  return (
    <div className={style.indicator}>
      <span>Произошла ошибка</span>
      <span>Мы уже в курсе данного инцидента</span>
      <span>и уже работаем над ее исправлением.</span>
      {error && error.message && <span>{error.message}</span>}
    </div>
  );
};

export default ErrorIndicator;
