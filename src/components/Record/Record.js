import React from "react";

import style from "./Record.module.css";

const Record = (props) => {
  const { label, field, item } = props
  return (
    <li className={style.row}>
      {label}: {item[field]}
    </li>
  );
};

export default Record;
